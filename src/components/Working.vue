<template>
    <section class="working container">
        <header class="header">
            <h2 class="header-title">
                <span>Our Working</span> <span>Process</span>
            </h2>
            <p class="header-text">
                Step-by-Step Guide to Achieving Your Business Goals
            </p>
        </header>
        <div class="wrapper">
            <ol class="list">
                <li v-for="(item, index) in workingItems"
                    :key="item.id"
                    :class="{active: activeItems.includes(item.id)}"
                    class="list-item"
                    @click="toggleItems(item.id)">
                    <div class="item-header">
                        <span class="item-number">{{ index + 1 > 10 ? index + 1 : '0' + (index + 1) }}</span>
                        <span class="item-name"
                              v-html="item.name"
                        />
                        <span class="item-toggle">
                            <svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23"/>
                                <path class="plus" d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z" fill="#191A23"/>
                                <path class="minus" d="M20 32.14V26.5H37.76V32.14H20Z" fill="black"/>
                            </svg>
                        </span>
                    </div>
                    <div class="item-bottom text-m" 
                         v-html="item.text"
                    />
                </li>
            </ol>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Working',
    data() {
        return {
            workingItems: [
                {id: 1, name: 'Consultation', text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'},
                {id: 2, name: 'Research and Strategy Development', text: 'We conduct in-depth research to gather relevant data and insights, analyze the findings to identify key patterns and trends, develop strategic plans and objectives based on the insights gained, and determine the most effective ways to implement and execute the strategies to achieve their goals.'},
                {id: 3, name: 'Implementation', text: 'We put the strategies and plans developed in the previous steps into action by executing various tactics and initiatives aimed at achieving the desired results.'},
                {id: 4, name: 'Monitoring and Optimization', text: 'Our team tracks and analyzes the performance of the implemented tactics and initiatives to ensure they are achieving the desired results and making any necessary adjustments to improve their effectiveness.'},
                {id: 5, name: 'Reporting and Communication', text: 'We create and share reports and updates on the performance of the implemented tactics and initiatives with internal teams and clients.'},
                {id: 6, name: 'Continual Improvement', text: 'Our team seeks to improve and enhance the effectiveness of its marketing strategies and tactics by continually monitoring and analyzing performance data, testing new ideas and approaches, and staying up-to-date with the latest trends and best practices in the industry.'}
            ],
            activeItems: [],
        };
    },
    methods: {
        toggleItems(id) {
            if (this.activeItems.includes(id)) {
                this.activeItems = this.activeItems.filter(el => el !== id);
            } else {
                this.activeItems.push(id);
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.working {
    margin-top: 140px;

    @include respond-to(tablet) {
        margin-top: 80px;
    }

    @include respond-to(s_tablet) {
        margin-top: 60px;
    }

    .header-title {
        @include respond-to(s_tablet) {
            display: flex;
            flex-direction: column;
            background: transparent;
            text-align: center;
            padding: 0;
            border-radius: 0;
        }

        span { 
            @include respond-to(s_tablet) {
                padding: 0 7px;
                border-radius: 7px;
                background-color: $green;
            }
        }
    }

    .wrapper {
        margin-top: 80px;

        @include respond-to(tablet) {
            margin-top: 52px;
        }

        @include respond-to(s_tablet) {
            margin-top: 30px;
        }
    }

    .list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .list-item {
        padding: 41px 60px;
        border: 1px solid $dark;
        border-radius: 45px;
        background-color: $grey;
        box-shadow: 0px 5px 0px $dark;
        cursor: pointer;
        transition: background-color .3s ease-in-out;

        @include respond-to(tablet) {
            padding: 32px 48px;
        }

        @include respond-to(s_tablet) {
            padding: 30px;
        }

        &:not(:first-child) {
            margin-top: 25px;
        }

        @media(hover: hover) {
            &:hover {
                background-color: #fff;
            }
        }

        &.active {
            background-color: $green;

            .item-toggle {

                & .plus {
                    display: none;
                }

                & .minus {
                    display: block;
                }
            }
            
            .item-bottom {
                max-height: 400px;
                margin-top: 30px;
                border-top: 1px solid black;
                padding-top: 30px;
                opacity: 1;
                transition: max-height .3s ease-in-out, padding .3s ease-in-out, margin .3s ease-in-out, opacity .3s ease-in-out;
            }
        }
    }

    .item-header {
        display: flex;
        align-items: center;
    }
    
    .item-number {
        margin-right: 25px;
        font-size: 60px;
        line-height: 77px;
        font-weight: 500;

        @include respond-to(s_tablet) {
            margin-right: 33px;
            font-size: 30px;
            line-height: 38px;
        }
    }

    .item-name {
        font-size: 30px;
        line-height: 38px;
        font-weight: 500;

        @include respond-to(s_tablet) {
            font-size: 18px;
            line-height: 23px;
        }
    }

    .item-toggle {
        flex-shrink: 0;
        margin-left: auto;
        width: 58px;
        height: 58px;

        @include respond-to(s_tablet) {
            width: 30px;
            height: 30px;
        }

        & svg {
            width: 100%;
            height: 100%;
        }

        & .minus {
            display: none;
        }
    }

    .item-bottom {
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: max-height .3s ease-in-out, padding .3s ease-in-out, margin .3s ease-in-out, opacity .1s ease-in-out;
    }
}
</style>