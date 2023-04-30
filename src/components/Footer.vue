<template>
    <footer class="footer container">
        <div class="nav-row">
            <div class="logo">
                <Logo viewbox="0 0 180 30" />
            </div>
            <nav class="nav">
                <ul class="nav-list text-m">
                    <li v-for="item in navigation"
                        class="nav-item" 
                        v-html="item.name" 
                        @click="onNavigationClick(item.id)"
                    />
                </ul>
            </nav>
            <ul class="social">
                <li v-for="item in socials" class="social-item" :class="item.name">
                    <a :href="item.url" target="_blank">
                        <img :src="item.image" :alt="item.name" />
                    </a>
                </li>
            </ul>
        </div>

        <div class="contact-row">
            <div class="contacts">
                <h3 class="contacts-title header-title">Contact us:</h3>
                <address>
                    <p class="contacts-text text-m">
                        <a href="mailto:info@positivus.com">Email: info@positivus.com</a>   
                    </p>
                    <p class="contacts-text text-m">
                        <a href="tel:5555678901">
                            Phone: 555-567-8901
                        </a>
                    </p>
                    <p class="contacts-text text-m">Address: 1234 Main St<br>Moonstone City, Stardust State 12345</p>
                </address>
            </div>
            <div class="feedback">
                <form @submit="onFormSubmit" novalidate>
                    <input ref="input" type="email" required="true"
                           class="feedback-input" placeholder="Email"
                           @change="onInputChange"
                           @focus="onInputFocus"
                           @blur="checkValidation($event.target)">
                    <button class="feedback-button button _green"
                            @mousemove="buttonMove"
                            @mouseleave="buttonLeave">
                        Subscribe to news
                    </button>
                </form>
            </div>
        </div>

        <ul class="social mobile">
            <li v-for="item in socials" class="social-item">
                <a :href="item.url">
                    <img :src="item.image" :alt="item.name" />
                </a>
            </li>
        </ul>

        <div class="copyright">
            <p class="copyright-text">© 2023 Positivus. All Rights Reserved.</p>
            <a href="" class="copyright-privacy">Privacy Policy</a>
            <a href="https://olgaaverchenko.design/" target="_blank" class="copyright-privacy">Design By Olga Averchenko</a>
        </div>
    </footer>
</template>

<script>
import Logo from './Logo.vue';

const linkedin = require('../images/social/linkedin.svg');
const facebook = require('../images/social/facebook.svg');
const twitter = require('../images/social/twitter.svg');
export default {
    name: "Footer",
    components: { Logo },
    props: {
        navigation: Array,
    },
    data() {
        return {
            socials: [
                { name: "LinkedIn", image: linkedin, url: "https://linkedin.com/" },
                { name: "Facebook", image: facebook, url: "https://www.facebook.com/" },
                { name: "Twitter", image: twitter, url: "https://twitter.com/" },
            ],
            email: '',
        };
    },
    methods: {
        buttonMove(e) {
            this.$root.$emit("button-move", e, true);
        },
        buttonLeave(e) {
            this.$root.$emit("button-leave", e);
        },
        onFormSubmit(e) {
            e.preventDefault();
            this.$root.$emit('open-modal', 'news-success');
        },
        checkValidation(target) {
            if ((!target.checkValidity() || (!target.value && target.required))) {
                target.classList.add('error');
            }
        },
        onInputChange(e) {
            this.email = e.target.value;
            this.checkValidation(e.target);
        },
        onInputFocus(e) {
            e.target.classList.remove('error');
        },
        onNavigationClick(id) {
            if (id === 'about') {
                this.$root.$emit('open-modal', 'about');
            } else if (id === 'services') {
                this.$emit('scroll-to', '.js-services');
            } else if (id === 'use-cases') {
                this.$emit('scroll-to', '.js-cases');
            } else if (id === 'prices') {
                this.$emit('scroll-to', '.js-contacts');
                this.$emit('set-quote');
            } else if (id === 'blog') {
                this.$root.$emit('open-modal', 'blog');
            }
        }
    },
}

</script>

<style lang="scss" scoped>
.footer {
    margin-top: 140px;
    padding: 55px 60px 50px;
    border-radius: 45px 45px 0 0;
    background-color: $dark;

    @include respond-to(tablet) {
        margin-top: 80px;
    }

    @include respond-to(s_tablet) {
        margin-top: 90px;
        padding: 50px 20px 30px;
        border-radius: 0;
    }

    .nav-row {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @include respond-to(s_tablet) {
            flex-direction: column;
        }
    }

    .logo {
        width: 180px;
        height: 29px;
        fill: #fff;

        @include respond-to(s_tablet) {
            width: 144px;
            height: 24px;
            margin-bottom: 37px;
        }

        & svg {
            width: 100%;
            height: 100%;
        }
    }

    .nav-list {
        display: flex;
        align-items: center;
        gap: 40px;
        margin: 0;
        padding: 0;
        list-style: none;
        color: #fff;

        @include respond-to(tablet) {
            gap: 20px;
        }

        @include respond-to(s_tablet) {
            flex-direction: column;
            gap: 15px;
            text-decoration: none;
        }
    }

    .nav-item {
        position: relative;
        overflow: hidden;
        cursor: pointer;

        &:before {
            content: '';
            position: absolute;
            bottom: 2px;
            left: 0;
            width: 100%;
            height: 1px;
            border-radius: 1px;
            background-color: #fff;
            transform: translateX(0);
            transition: transform .5s $cubic;
        }

        @media (hover: hover) {
            &:hover {
                &:before {
                    transform: translateX(-100%);
                }
            }
        }
    }

    .social {
        display: flex;
        align-items: center;
        gap: 20px;
        margin: 0;
        padding: 0;
        list-style: none;

        @include respond-to(tablet) {
            display: none;
        }

        &.mobile {
            display: none;

            @include respond-to(tablet) {
                display: flex;
                justify-content: center;
                margin-top: 37px;
            }
        }
    }

    .social-item {
        width: 30px;
        height: 30px;
        transition: filter .3s ease-in-out;

        & * {
            width: 100%;
            height: 100%;
        }

        @media(hover: hover) {
            &:hover {
                filter: invert(1)
            }
        }
    }

    .contact-row {
        display: flex;
        justify-content: space-between;
        margin-top: 66px;

        @include respond-to(tablet) {
            flex-direction: column;
        }

        @include respond-to(s_tablet) {
            margin-top: 37px;
        }
    }

    .contacts {
        @include respond-to(tablet) {
            text-align: center;
        }

        address {
            font-style: normal;
        }
    }

    .contacts-title {
        padding: 0 7px;
        width: fit-content;
        font-size: 20px;
        line-height: 26px;

        @include respond-to(tablet) {
            margin: 0 auto;
        }

        @include respond-to(s_tablet) {
            font-size: 18px;
            line-height: 23px;
        }
    }

    .contacts-text {
        margin-bottom: 0;
        color: #fff;

        @include respond-to(s_tablet) {
            line-height: 20px;
        }

        &:first-child {
            margin-top: 27px;

            @include respond-to(s_tablet) {
                margin-top: 37px;
            }
        }

        &:not(:first-child) {
            margin-top: 20px;

            @include respond-to(s_tablet) {
                margin-top: 15px;
            }
        }

        a {
            text-decoration: none;
            color: #fff;
            transition: color .3s ease-in-out;

            @media (hover: hover) {
                &:hover {
                    color: $green;
                }
            }
        }
    }

    .feedback {
        padding: 58px 40px;
        border-radius: 14px;
        background-color: #292a32;

        @include respond-to(tablet) {
            margin-top: 40px;
            text-align: center;
        }

        @include respond-to(s_tablet) {
            margin-top: 37px;
            padding: 30px;
        }
    }

    .feedback-input {
        padding: 22px 35px;
        border: 1px solid #fff;
        border-radius: 14px;
        font-size: 18px;
        line-height: 23px;
        font-family: inherit;
        color: #fff;
        background-color: transparent;
        outline: none;
        transition: border-color .3s ease-in-out;

        @include respond-to(tablet) {
            padding: 12px 35px;
            font-size: 16px;
            line-height: 22px;
        }

        @include respond-to(s_tablet) {
            padding: 20px 24px;
            width: 100%;
            line-height: 24px;
        }

        &::placeholder {
            color: #fff;
        }

        &.error {
            border-color: red;
        }
    }

    .feedback-button {
        margin-left: 20px;

        @include respond-to(s_tablet) {
            margin-left: 0;
            margin-top: 22px;
        }
    }

    .copyright {
        display: flex;
        align-items: center;
        margin-top: 50px;
        border-top: 1px solid #fff;
        padding-top: 50px;

        @include respond-to(tablet) {
            justify-content: center;
        }

        @include respond-to(s_tablet) {
            flex-direction: column;
            margin-top: 37px;
            padding-top: 37px;
        }
    }

    .copyright-text {
        margin: 0;
        font-size: 18px;
        line-height: 28px;
        color: #fff;

        @include respond-to(s_tablet) {
            font-size: 16px;
            line-height: 24px;
        }
    }

    .copyright-privacy {
        position: relative;
        margin-left: 40px;
        font-size: 18px;
        line-height: 23px;
        text-decoration: none;
        color: #fff;
        overflow: hidden;
        cursor: pointer;

        @include respond-to(s_tablet) {
            margin-top: 15px;
            margin-left: 0;
            font-size: 16px;
            line-height: 24px;
            text-decoration: none;
        }

        &:before {
            content: '';
            position: absolute;
            bottom: 2px;
            left: 0;
            width: 100%;
            height: 1px;
            border-radius: 1px;
            background-color: #fff;
            transform: translateX(0);
            transition: transform .5s $cubic;
        }

        @media (hover: hover) {
            &:hover {
                &:before {
                    transform: translateX(-100%);
                }
            }
        }
    }
}
</style>