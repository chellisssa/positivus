<template>
    <header class="main-header container js-main-header">
        <Logo class="logo" viewbox="0 0 220 56" />

        <nav class="navigation">
            <div class="navigation-wrapper" :class="{active: isMenuOpen}">
                <ul class="navigation-list">
                    <li v-for="item in navigation"
                        :key="item.name" 
                        v-html="item.name"
                        class="navigation-item" 
                        @click="onNavigationClick(item.id)"
                    />
                </ul>

                <button class="button _bordered"
                        @click="clickContacts">
                    Request a quote
                </button>
            </div>

            <div class="hamburger" @click="toggleMenu" :class="{active: isMenuOpen}">
                <span></span>
            </div>
        </nav>
    </header>
</template>

<script>
import { lockScreen, unlockScreen } from '..';
import Logo from './Logo.vue';

export default {
    components: { Logo },
    props: {
        navigation: Array,
    },
    data() {
        return {
            isMenuOpen: false,
            scrollTop: 0,
        };
    },
    methods: {
        clickContacts() {
            this.$emit('scroll-to', '.js-contacts');
            this.$emit('set-quote');
        },
        onNavigationClick(id) {
            if (window.innerWidth < 980) {
                this.toggleMenu();
            }
            
            // this.$nextTick(() => {
                if (id === 'about') {
                    this.$root.$emit('open-modal', 'about');
                } else if (id === 'services') {
                    this.$emit('scroll-to', '.js-services');
                } else if (id === 'use-cases') {
                    this.$emit('scroll-to', '.js-cases');
                } else if (id === 'prices') {
                    this.clickContacts();
                } else if (id === 'blog') {
                    this.$root.$emit('open-modal', 'blog');
                }
            // });
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            if (this.isMenuOpen) {
                this.scrollTop = lockScreen();
            } else {
                unlockScreen(this.scrollTop);
            }
        }
    },
}
</script>

<style scoped lang="scss">
.main-header {
    position: sticky;
    top: -40px;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 0 20px;
    background: #fff;

    @include respond-to(s_tablet) {
        position: fixed;
        top: 0;
        padding: 30px 20px 30px;
    }

    .logo {
        width: 220px;
        height: 56px;
        fill: $black;

        @include respond-to(s_tablet) {
            width: 97px;
            height: 24px;
        }
    }

    .navigation {
        display: flex;
    }

    .navigation-wrapper {
        display: flex;
        align-items: center;

        @include respond-to(s_tablet) {
            position: fixed;
            top: 0;
            right: 0;
            flex-direction: column;
            width: 100%;
            padding: 32px;
            border-bottom-left-radius: 45px;
            background: $green;
            transform: scale(0);
            transform-origin: top right;
            overflow: hidden;
            transition: all 1s ease-in-out;

            .navigation-list, 
            .button {
                opacity: 0;
                transition: opacity .2s ease-in-out;
            }

            &.active {
                transform: scale(1);
                transition: all .7s ease-in-out;

                .navigation-list, 
                .button {
                    opacity: 1;
                    transition: opacity .2s ease-in-out .4s;
                }
            }
        }
    }

    .navigation-list {
        display: flex;
        align-items: center;
        list-style: none;
        margin: 0;
        padding: 0;

        @include respond-to(s_tablet) {
            flex-direction: column;
        }
    }

    .navigation-item {
        position: relative;
        padding: 20px;
        font-size: 20px;
        line-height: 28px;
        overflow: hidden;
        cursor: pointer;

        @include respond-to(tablet) {
            padding: 12px;
        }

        @media(hover: hover) {
            &:hover {
                &:before {
                    transform: translateX(0);
                }
            }
        }

        &:before {
            content: '';
            position: absolute;
            bottom: 10px;
            left: 20px;
            width: calc(100% - 40px);
            height: 1px;
            border-radius: 1px;
            background-color: $black;
            transform: translateX(-200%);
            transition: transform .5s $cubic;
        }
    }

    .button {
        margin-left: 20px;

        @include respond-to(s_tablet) {
            margin-left: 0;
            margin-top: 20px;
        }
    }

    .hamburger {
        display: none;
        position: relative;
        width: 24px;
        height: 16px;

        @include respond-to(s_tablet) {
            display: flex;
        }

        &.active {

            & span {
                width: 0;
                opacity: 0;
            }

            &:before {
                top: 7px;
                transform: rotate(45deg);
            }

            &:after {
                top: 7px;
                transform: rotate(-45deg);
            }
        }

        & span {
            position: absolute;
            left: 0;
            top: 8px;
            width: 100%;
            height: 2px;
            border-radius: 2px;
            background-color: $black;
            transition: all .2s ease-in-out;
        }

        &:before,
        &:after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 2px;
            border-radius: 2px;
            background-color: $black;
            transition: all .4s ease-in-out;
        }

        &:after {
            top: 16px;
        }
    }
}
</style>