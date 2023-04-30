<template>
    <section class="cta container">
        <div class="cta-container">
            <div class="info">
                <h2 class="title">
                    Let’s make things happen
                </h2>
                <p class="text text-m">
                    Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                </p>
                <button class="button"
                        @click="clickContacts"
                        @mousemove="buttonMove"
                        @mouseleave="buttonLeave">
                    Get your <span>free</span> proposal
                </button>
            </div>
            <img class="image" src="../images/cta.svg" alt="Contact Us">
    </div>
    </section>
</template>

<script>
export default {
    name: 'Cta',
    methods: {
        clickContacts() {
            this.$emit('scroll-to', '.js-contacts');
        },
        buttonMove(e) {
            this.$root.$emit('button-move', e);
        },
        buttonLeave(e) {
            this.$root.$emit('button-leave', e);
        }
    }
}
</script>

<style scoped lang="scss">
.cta {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;

    @include respond-to(tablet) {
        margin-top: 80px;
    }

    @include respond-to(s_tablet) {
        margin-top: 70px;
    }

    .cta-container {
        position: relative;
        width: 100%;
        padding: 60px;
        border-radius: 45px;
        background-color: $grey;

        @include respond-to(s_tablet) {
            padding: 50px;
        }
    }
    
    .info {
        max-width: 500px;

        @include respond-to(tablet) {
            max-width: 375px;
        }
    }

    .title {
        margin: 0;
        font-size: 30px;
        line-height: 38px;
        font-weight: 500;

        @include respond-to(s_tablet) {
            font-size: 26px;
            line-height: 33px;
        }
    }

    .text {
        margin: 26px 0 0;

        @include respond-to(s_tablet) {
            margin: 20px 0 0;
        }
    }

    .button {
        margin-top: 26px;

        @include respond-to(s_tablet) {
            margin-top: 20px;
        }

        & span {
            @include respond-to(s_tablet) {
                display: none;
            }
        }
    }

    .image {
        position: absolute;
        top: 50%;
        right: 135px;
        transform: translateY(-50%);
        height: 394px;

        @include respond-to(tablet) {
            right: 32px;
        }

        @include respond-to(s_tablet) {
            display: none;
        }
    }
}
</style>