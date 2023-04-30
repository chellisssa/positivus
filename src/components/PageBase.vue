<template>
    <div class="page" ref="container">
        <Header :navigation="navigationItems"
                @scroll-to="scrollTo"
                @set-quote="setQuote" 
        />

        <Hero @scroll-to="scrollTo" />

        <Partners></Partners>

        <Services></Services>

        <Cta @scroll-to="scrollTo" />

        <CaseStudies></CaseStudies>

        <Working></Working>

        <Team />
        
        <Testimonials></Testimonials>

        <Contacts :default-type="defaultRadioType"
                  @set-contacts-container="setContactsContainer"
        />

        <Footer :navigation="navigationItems" 
                @scroll-to="scrollTo"
                @set-quote="setQuote" 
        />

        <Transition appear name="fade" mode="out-in">
            <Modal v-if="modalType"
                   key="modal"
                   :type="modalType" 
                   @close-modal="onCloseModal"
            />
        </Transition>
    </div>
</template>

<script>
import Header from './Header.vue';
import Hero from './Hero.vue';
import Partners from './Partners.vue';
import Services from './Services.vue';
import Cta from './Cta.vue';
import CaseStudies from './CaseStudies.vue';
import Working from './Working.vue';
import Team from './Team.vue';
import Testimonials from './Testimonials.vue';
import Contacts from './Contacts.vue';
import Footer from './Footer.vue';
import Modal from './Modal.vue';
import { lockScreen, unlockScreen } from '..';

export default {
    name: 'PageBase',
    components: {
        Header,
        Hero,
        Partners,
        Services,
        Cta,
        CaseStudies,
        Working,
        Team,
        Testimonials,
        Contacts,
        Footer,
        Modal,
    },
    data() {
        return {
            contactsContainer: null,
            defaultRadioType: '',
            modalType: null,
            scrollTop: 0,
            color: {
                green: '#b9ff66',
                black: '#191a23',
                grey: '#f3f3f3',
            },
            navigationItems: [
                { name: "About us", id: 'about' },
                { name: "Services", id: 'services' },
                { name: "Use Cases", id: 'use-cases' },
                { name: "Prices", id: 'prices' },
                { name: "Blog", id: 'blog' },
            ],
        };
    },
    mounted() {
        this.$root.$on('open-modal', (type) => {
            this.modalType = type;
            this.scrollTop = lockScreen();
        });
        this.$root.$on('button-move', this.buttonMove);
        this.$root.$on('button-leave', this.buttonLeave);

        this.addObserver();
    },
    methods: {
        setContactsContainer(el) {
            this.contactsContainer = el;
        },
        scrollTo(selector) {
            const header = document.querySelector('.js-main-header');
            const container = document.querySelector(selector);

            console.log(container?.getBoundingClientRect().top, window.scrollY, header.clientHeight, container?.getBoundingClientRect().top + window.scrollY - header.clientHeight);
            window.scrollTo({
                top: container?.getBoundingClientRect().top - (container.classList.contains('visible') ? 0 : 30) + window.scrollY - header.clientHeight,
                behavior: 'smooth',
            })
        },
        buttonMove(e, inversed) {
            const rect = e.target.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / e.target.clientWidth) * 100;
            const y = ((e.clientY - rect.top) / e.target.clientHeight) * 100;
            e.target.style.backgroundImage = `radial-gradient(circle 20px
                                      at ${x}% ${y}%,
                                      ${inversed ? this.color.grey : this.color.green} 20px, ${inversed ? this.color.green : this.color.black})`;
        },
        buttonLeave(e) {
            console.log('lieav');
            e.target.style.removeProperty('background-image');
        },
        setQuote() {
            this.defaultRadioType = 'quote';
        },
        onCloseModal() {
            this.modalType = '';
            unlockScreen(this.scrollTop);
        },
        addObserver() {
            const options = {   
                threshold: .1
            }
            const callback = function(entries) {
                for (let i = 0; i < entries.length; i++) {
                    if (entries[i].isIntersecting) {
                        entries[i].target.classList.add('visible');
                    }
                }
            };
            const observer = new IntersectionObserver(callback, options);
            const targets = this.$refs.container.children;
            for (let i = 0; i < targets.length; i++) {
                targets[i].classList.add('hidden');
                observer.observe(targets[i]);
            }
        }
    },

}
</script>

<style scoped lang="scss">
.page {
    @include respond-to(s_tablet) {
        padding-top: 94px;
    }

    & > * {
        transition: opacity .3s ease-in-out .3s, transform .3s ease-in-out .3s;
        &.hidden {
            opacity: 0;
            transform: translateY(30px);
        }

        &.visible {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s ease;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .fade-leave,
    .fade-enter-to {
        opacity: 1;
    }
}
</style>