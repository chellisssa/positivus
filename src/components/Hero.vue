<template>
    <section class="hero container">
        <div class="info">
            <h1 class="title">
                Navigating the digital landscape for success
            </h1>
            <img class="image mobile" src="../images/hero.svg" />
            <p class="text">
                Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <button class="button"
                    @click="clickContacts"
                    @mousemove="buttonMove"
                    @mouseleave="buttonLeave">
                Book a consultation
            </button>
        </div>
        <img class="image" src="../images/hero.svg" />
    </section>
</template>

<script>
export default {
    name: 'Hero',
    methods: {
        clickContacts() {
            this.$emit('scroll-to', '.js-contacts');
        },
        buttonMove(e) {
            this.$root.$emit('button-move', e);
        },
        buttonLeave(e) {
            console.log('ladlakd');
            this.$root.$emit('button-leave', e);
        }
    }
}
</script>

<style scoped lang="scss">
.hero {
    display: flex;
    padding: 50px 0 0;

    @include respond-to(s_tablet) {
        padding: 0 20px;
    }

    .info {
        max-width: 42%;

        @include respond-to(s_tablet) {
            max-width: 100%;
        }
    }

    .title {
        margin: 0;
        font-size: 60px;
        line-height: 77px;
        font-weight: 500;

        @include respond-to(tablet) {
            font-size: 43px;
            line-height: 54px;
        }

        @include respond-to(s_tablet) {
            font-size: 40px;
            line-height: 50px;
        }
    }

    .text {
        margin-top: 35px;
        margin-bottom: 0;
        font-size: 20px;
        line-height: 28px;

        @include respond-to(tablet) {
            font-size: 16px;
            line-height: 24px;
        }

        @include respond-to(s_tablet) {
            margin-top: 20px;
        }
    }

    .button {
        margin-top: 35px;

        @include respond-to(s_tablet) {
            margin-top: 40px;
        }
    }

    .image {
        margin-left: auto;
        width: 48%;
        height: 515px;

        @include respond-to(tablet) {
            height: 100%;
        }

        @include respond-to(s_tablet) {
            display: none;
        }

        &.mobile {
            display: none;

            @include respond-to(s_tablet) {
                display: flex;
                width: 100%;
                height: 310px;
                margin-top: 10px;
            }
        }
    }
}
</style>