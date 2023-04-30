<template>
    <section class="testimonials container">
        <header class="header">
            <h2 class="header-title">
                Testimonials
            </h2>
            <p class="header-text">
                Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
            </p>
        </header>
        <div class="wrapper">
            <div ref="container" 
                 class="swiper-container">
                <div class="swiper-wrapper">
                    <div v-for="item in testimonials" 
                         :key="item.name"
                         class="swiper-slide">
                        <div class="feedback">
                            <div class="feedback-cloud text-m" 
                                 v-html="item.text"
                            />
                            <div class="feedback-author">
                                <p class="author-name"
                                   v-html="item.name"
                                />
                                <p class="author-job" 
                                   v-html="item.job"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="controls">
                    <button ref="prev" class="navigation prev">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 13.5C22.8284 13.5 23.5 12.8284 23.5 12C23.5 11.1716 22.8284 10.5 22 10.5L22 13.5ZM0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM22 10.5L2 10.5L2 13.5L22 13.5L22 10.5Z" />
                        </svg>
                    </button>
                    <div ref="pagination" class="pagination"></div>
                    <button ref="next" class="navigation next">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM23.0607 13.0607C23.6464 12.4749 23.6464 11.5251 23.0607 10.9393L13.5147 1.3934C12.9289 0.807613 11.9792 0.807613 11.3934 1.3934C10.8076 1.97919 10.8076 2.92893 11.3934 3.51472L19.8787 12L11.3934 20.4853C10.8076 21.0711 10.8076 22.0208 11.3934 22.6066C11.9792 23.1924 12.9289 23.1924 13.5147 22.6066L23.0607 13.0607ZM2 13.5L22 13.5L22 10.5L2 10.5L2 13.5Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Swiper, { Navigation, Pagination } from 'swiper';

export default {
    name: 'Testimonials',
    data() {
        return {
            testimonials: [
                {name: 'Leo Ramirez', job: 'Marketing Director', text: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.'},
                {name: 'Ava Parker', job: 'Marketing Manager', text: 'Working with Positivus has been an excellent experience. Their team has been attentive to our needs, responsive to our feedback, and consistently delivered outstanding results. Their data-driven approach has helped us to better understand our target audience and refine our marketing strategies to achieve our business goals. We appreciate their commitment to ongoing improvement and their willingness to work collaboratively with us to ensure our success.'},
                {name: 'Maya Patel', job: 'Digital Marketing Specialist', text: "I couldn't be happier with the results Positivus has delivered. Their team is knowledgeable, creative, and passionate about helping their clients succeed. They've been able to increase our online visibility and generate more leads for our business than we ever thought possible. Highly recommended!"},
                {name: 'Owen Davis', job: 'Brand Strategist', text: "This marketing agency has been a fantastic partner for our business. Their strategic approach and attention to detail have helped us to improve our brand recognition and connect with our target audience on a deeper level. Their team is professional, responsive, and always goes above and beyond to deliver exceptional service."},
                {name: 'Sophia Chen', job: 'Social Media Coordinator', text: "I am so impressed with the work Positivus has done for us. Their creativity and expertise have helped us to achieve a level of online engagement we never thought possible. Their data-driven approach has allowed us to measure the effectiveness of our marketing campaigns and make data-driven decisions to improve our results. I would highly recommend this agency to anyone looking for a partner who can help them achieve their marketing goals."},
            ],
        };
    },

    mounted() {
        Swiper.use([Navigation, Pagination]);
        this.initSlider();
    },

    methods: {
        initSlider() {
            const swiper = new Swiper(this.$refs.container, {
                slidesPerView: 1,
                navigation: {
                    prevEl: this.$refs.prev,
                    nextEl: this.$refs.next,
                },
                pagination: {
                    el: this.$refs.pagination,
                    clickable: true,
                    renderBullet(index, className, c, d) {
                        return `<div class=${className}>
                            <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" "/>
                            </svg>
                        </div>`
                    },
                },
                loop: true,
                spaceBetween: 50,
                centeredSlides: true,
                breakpoints: {
                    980: {
                        slidesPerView: 'auto',
                    }
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.testimonials {
    margin-top: 100px;

    @include respond-to(s_tablet) {
        margin-top: 60px;
    }

    .wrapper {
        margin-top: 80px;
        border-radius: 45px;
        padding: 84px 0 68px;
        background-color: $dark;

        @include respond-to(s_tablet) {
            margin-top: 40px;
            padding: 30px 30px 60px;
        }
    }

    .swiper-container {
        overflow: hidden;
    }

    .swiper-slide {
        width: 606px;

        @include respond-to(tablet) {
            width: 566px;
        }

        @include respond-to(s_tablet) {
            width: 100%;
        }
    }

    .feedback-cloud {
        position: relative;
        padding: 48px 52px;
        border: 1px solid $green;
        border-radius: 45px;
        color: #fff;

        @include respond-to(s_tablet) {
            padding: 30px;
        }

        &:after {
            content: '';
            position: absolute;
            bottom: -25px;
            left: 54px;
            width: 48px;
            height: 48px;
            border: 1px solid #b9ff66;
            background-color: #191a23;
            transform: rotate(45deg);
            border-top-color: transparent;
            border-left-color: transparent;

            @include respond-to(s_tablet) {
                bottom: -17px;
                left: 50px;
                width: 32px;
                height: 32px;
            }
        }
    }

    .feedback-author {
        margin-top: 54px;
        margin-left: 80px;

        @include respond-to(s_tablet) {
            margin-top: 44px;
            margin-left: 65px;
        }
    }

    .author-name {
        margin: 0;
        font-size: 20px;
        line-height: 26px;
        font-weight: 500;
        color: $green;

        @include respond-to(s_tablet) {
            font-size: 18px;
            line-height: 23px;
        }
    }

    .author-job {
        margin: 0;
        font-size: 18px;
        line-height: 23px;
        color: #fff;
    }

    .controls {
        display: flex;
        justify-content: center;
        margin-top: 124px;

        @include respond-to(s_tablet) {
            margin-top: 60px;
        }
    }

    .pagination {
        display: flex;
        align-items: center;
        gap: 19px;
        margin: 0 189px;

        @include respond-to(s_tablet) {
            margin: 0 auto;
        }

        /deep/ .swiper-pagination-bullet {
            width: 14px;
            height: 14px;
            fill: #fff;
            transition: fill .5s ease-in-out;
            cursor: pointer;

            @media(hover: hover) {
                &:hover {
                    fill: $green;
                }
            }
        }

        /deep/ .swiper-pagination-bullet-active {
            fill: $green;
            cursor: default;
        }
    }

    .navigation {
        border: 0;
        width: 24px;
        height: 24px;
        padding: 0;
        background: transparent;
        cursor: pointer;
        transition: opacity .3s ease-in-out;

        svg {
            fill: #fff;
            transition: fill .3s ease-in-out;
        }

        @media (hover: hover) {
            &:hover svg {
                fill: $green;
            }
        }

        &.swiper-button-disabled {
            opacity: .3;
            pointer-events: none;
        }
    }
}
</style>