<template>
    <section class="studies container js-cases">
        <header class="header">
            <h2 class="header-title">
                Case Studies
            </h2>
            <p class="header-text">
                Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
            </p>
        </header>

        <div class="wrapper">
            <div v-for="column in columns"
                 :key="column.id"
                 class="column">
                <p class="text text-m"
                   v-html="column.text"
                />
                <button class="link" @click="openModal(column.type)">
                    Learn more
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570543C5.86854 -0.157358 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z" fill="#B9FF66"/>
                    </svg>
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CaseStudies',
    data() {
        return {
            columns: [
                {id: 1, text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.', type: 'case-study-restaurant'},
                {id: 2, text: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',  type: 'case-study-software'},
                {id: 3, text: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',  type: 'case-study-retail'}
            ]
        }
    },
    methods: {
        openModal(type) {
            this.$root.$emit('open-modal', type);
        }
    }
}
</script>

<style scoped lang="scss">
.studies {
    margin-top: 140px;

    @include respond-to(tablet) {
        margin-top: 80px;
    }

    @include respond-to(s_tablet) {
        margin-top: 60px;
    }

    .wrapper {
        display: flex;
        justify-content: space-between;
        margin-top: 80px;
        border-radius: 45px;
        padding: 70px 60px;
        background-color: $dark;

        @include respond-to(tablet) {
            margin-top: 52px;
            padding: 35px 30px;
        }

        @include respond-to(s_tablet) {
            position: relative;
            left: -20px;
            padding: 0 20px;
            width: 100vw;
            border-radius: 0;
            margin-top: 40px;
            background-color: transparent;
            overflow: auto;

            &::-webkit-scrollbar {
                display: none;
                scrollbar-width: none;
            }
        }
    }

    .column {
        box-sizing: content-box;
        flex-shrink: 0;
        width: calc((100% - 64px * 4) / 3);

        @include respond-to(tablet) {
            width: calc((100% - 32px * 4) / 3);
        }

        @include respond-to(s_tablet) {
            box-sizing: border-box;
            width: 81vw;
            padding: 42px 50px;
            border: none;
            border-radius: 45px;
            background-color: $dark;
        }

        &:not(:first-child) {
            margin-left: 64px;
            border-left: 1px solid #fff;
            padding-left: 64px;

            @include respond-to(tablet) {
                margin-left: 32px;
                padding-left: 32px;
            }

            @include respond-to(s_tablet) {
                margin-left: 20px;
            }
        }
    }

    .text {
        margin: 0;
        color: #fff;
    }

    .link {
        display: flex;
        align-items: center;
        margin-top: 20px;
        border: none;
        font-family: inherit;
        font-size: 20px;
        line-height: 28px;
        text-decoration: none;
        color: $green;
        background: none;
        cursor: pointer;

        @include respond-to(tablet) {
            font-size: 16px;
            line-height: 24px;
        }

        @include respond-to(s_tablet) {
            font-size: 20px;
            line-height: 28px;
        }

        @media (hover: hover) {
            &:hover {
                svg {
                    transform: rotate(30deg);
                }
            }
        }

        & svg {
            width: 20px;
            height: 20px;
            margin-left: 12px;
            transition: transform .5s $cubic;

            @include respond-to(tablet) {
                width: 16px;
                height: 16px;
            }
        }
    }
}
</style>