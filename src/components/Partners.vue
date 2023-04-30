<template>
    <section class="partners container" >
        <div class="partners-row" ref="firstRow" :style="{transform: `translateX(${translateFirst}px)`}">
            <a v-for="logo in logos.slice(0, logos.length / 2)" 
               :href="logo.link" target="_blank">
               <img :src="logo.url" 
                    :alt="logo.name" 
                />
            </a>
            
        </div>
        <div class="partners-row" ref="secondRow" :style="{transform: `translateX(${translateSecond}px)`}">
            <a v-for="logo in logos.slice(logos.length / 2)" 
               :href="logo.link" target="_blank">
               <img :src="logo.url" 
                    :alt="logo.name" 
                />
            </a>
        </div>
    </section>
</template>

<script>
const amazon = require('../images/partners/amazon.svg');
const dribble = require('../images/partners/dribble.svg');
const hubspot = require('../images/partners/hubspot.svg');
const notion = require('../images/partners/notion.svg');
const netflix = require('../images/partners/netflix.svg');
const zoom = require('../images/partners/zoom.svg');

export default {
    name: 'Partners',
    data() {
        return {
            logos: [
                {name: 'Amazon', url: amazon, link: 'https://www.amazon.com/'},
                {name: 'Dribble', url: dribble, link: 'https://dribbble.com/'},
                {name: 'HubSpot', url: hubspot, link: 'https://www.hubspot.com/'},
                {name: 'Notion', url: notion, link: 'https://www.notion.so/'},
                {name: 'Netflix', url: netflix, link: 'https://www.netflix.com/'},
                {name: 'Zoom', url: zoom, link: 'https://zoom.us/'},
            ],
            windowHeight: window.innerHeight,
            translateFirst: 0,
            translateSecond: 0,
        }
    },
    mounted() {
        if (window.innerWidth < 980) {
            this.movePartners();
            window.addEventListener('scroll', this.movePartners);
        }
    },
    methods: {
        movePartners() {
            const firstRefTop = this.$refs.firstRow.getBoundingClientRect().top;
            const secondRefTop = this.$refs.secondRow.getBoundingClientRect().top;
            this.translateFirst = firstRefTop / 2;
            this.translateSecond = -secondRefTop / 2;
        }
    }
}
</script>

<style scoped lang="scss">
.partners {
    display: flex;
    gap: 96px;
    margin-top: 70px;
    overflow: hidden;

    @include respond-to(tablet) {
        gap: 32px;
    }

    @include respond-to(s_tablet) {
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 60px;
        gap: 20px;
    }

    .partners-row {
        display: flex;
        align-items: center;
        gap: 96px;
        width: 50%;

        @include respond-to(tablet) {
            gap: 32px;
        }

        @include respond-to(s_tablet) {
            width: auto;
        }

        a {
            filter: grayscale(1);
            transition: filter .5s ease-in-out;
            flex-grow: 1;

            @media(hover: hover) {
                &:hover {
                    filter: grayscale(0);
                }
            }
        }

        img {
            display: block;
            margin: 0 auto;
        }
    }
}
</style>