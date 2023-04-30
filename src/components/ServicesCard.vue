<template>
<div class="card" :class="color">
    <div class="info">
        <h3 class="title"
            v-html="name" 
        />
        <div class="link" @click="openModal(type)">
            <svg width="41" height="41" viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20.5" cy="20.5" r="20.5"/>
                <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" />
            </svg>
            <span>Learn more</span>
        </div>
    </div>
    <img class="image"
         :src="image" 
    />
</div>
</template>

<script>
export default {
    name: 'ServicesCard',
    props: {
        name: String,
        color: {
            type: String,
            default: 'grey',
        },
        image: String,
        type: String,
    },
    methods: {
        openModal(type) {
            this.$root.$emit('open-modal', type);
        }
    }
}

</script>

<style scoped lang="scss">
.card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid $dark;
    border-radius: 45px;
    box-shadow: 0 5px 0px $dark;
    padding: 50px;
    background-color: $grey;

    @include respond-to(tablet) {
        padding: 24px;
    }

    @include respond-to(s_tablet) {
        position: relative;
        padding: 50px;
    }

    &.green {
        background-color: $green;

        & /deep/ .title span {
            background-color: #fff;
        }
    }

    &.black {
        background-color: $black;

        & /deep/ .title span {
            background-color: $grey;
        }

        & .link {
            color: #fff;
            
            svg {
                & circle {
                    fill: #fff;
                }

                & path {
                    fill: $black;
                }
            }
        }
    }

    .title {
        font-size: 30px;
        line-height: 38px;
        font-weight: 500;

        @include respond-to(tablet) {
            font-size: 24px;
            line-height: 32px;
        }

        @include respond-to(s_tablet) {
            font-size: 26px;
            line-height: 33px;
        }

        & /deep/ span {
            display: block;
            width: fit-content;
            padding: 0 7px;
            border-radius: 7px;
            background-color: $green;
        }
    }
    
    .image {
        width: 210px;
        height: 210px;
        object-fit: contain;
        object-position: center;

        @include respond-to(s_tablet) {
            position: absolute;
            bottom: 50px;
            right: 50px;
            width: 165px;
            height: 129px;
        }
    }

    .link {
        display: flex;
        align-items: center;
        margin-top: 100px;
        font-size: 20px;
        line-height: 28px;
        cursor: pointer;

        @include respond-to(tablet) {
            font-size: 16px;
            line-height: 24px;
        }

        @media (hover: hover) {
            &:hover {
                svg {
                    transform: rotate(30deg);
                }
            }
        }

        & svg {
            width: 41px;
            height: 41px;
            margin-right: 15px;
            transition: transform .5s $cubic;

            @include respond-to(tablet) {
                width: 32px;
                height: 32px;
            }

            @include respond-to(s_tablet) {
                width: 41px;
                height: 41px;
            }

            & circle {
                fill: $dark;
            }

            & path {
                fill: $green;
            }
        }

        & span {
            @include respond-to(s_tablet) {
                display: none;
            }
        }
    }
}
</style>