<template>
    <section class="team container">
        <header class="header">
            <h2 class="header-title">
                Team
            </h2>
            <p class="header-text">
                Meet the skilled and experienced team behind our successful digital marketing strategies
            </p>
        </header>
        <div class="wrapper">
            <ul class="list">
                <li v-for="member in teamMembers" 
                    :key="member.id"
                    class="list-item">
                    <div class="item-header">
                        <img :src="member.image" 
                             :alt="member.name" 
                             class="item-image">
                        <div class="item-info">
                            <p class="item-name" 
                               v-html="member.name" 
                            />
                            <p class="item-job" 
                               v-html="member.job"
                            />
                        </div>
                        <svg class="item-icon" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17" cy="17" r="17" fill="black"/>
                            <path d="M9.31776 25H12.8131V13.6844H9.31776V25Z" fill="#B9FF66"/>
                            <path d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z" fill="#B9FF66"/>
                            <path d="M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z" fill="#B9FF66"/>
                        </svg>
                    </div>
                    <div class="item-bottom text-m"
                         v-html="member.text"
                    />
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
const person1 = require('../images/team/person1.png');
const person2 = require('../images/team/person2.png');
const person3 = require('../images/team/person3.png');
const person4 = require('../images/team/person4.png');
const person5 = require('../images/team/person5.png');
const person6 = require('../images/team/person6.png');
export default {
    name: 'Team',
    data() {
        return {
            teamMembers: [
                {id: 1, name: 'John Smith', job: 'CEO and Founder', text: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy', image: person1},
                {id: 2, name: 'Jane Doe', job: 'Director of Operations', text: '7+ years of experience in project management and team leadership. Strong organizational and communication skills', image: person2},
                {id: 3, name: 'Michael Brown', job: 'Senior SEO Specialist', text: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization', image: person3},
                {id: 4, name: 'Emily Johnson', job: 'PPC Manager', text: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis', image: person4},
                {id: 5, name: 'Brian Williams', job: 'Social Media Specialist', text: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement', image: person5},
                {id: 6, name: 'Sarah Kim', job: 'Content Creator', text: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries', image: person6},
            ]
        }
    },
    methods: {
        buttonMove(e) {
            this.$root.$emit('button-move', e);
        },
        buttonLeave(e) {
            this.$root.$emit('button-leave', e);
        }
    }
}
</script>

<style lang="scss" scoped>
.team {
    margin-top: 140px;

    @include respond-to(tablet) {
        margin-top: 80px;
    }

    @include respond-to(s_tablet) {
        margin-top: 60px;
    }

    .wrapper {
        margin-top: 80px;

        @include respond-to(tablet) {
            margin-top: 52px;
        }
    }

    .list {
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        margin: 0;
        padding: 0;
        list-style: none;

        @include respond-to(s_tablet) {
            gap: 30px;
        }
    }

    .list-item {
        position: relative;
        width: calc((100% - 80px) / 3);
        border: 1px solid $dark;
        border-radius: 45px;
        box-shadow: 0px 5px 0px $dark;
        padding: 40px 35px;

        @include respond-to(tablet) {
            width: calc((100% - 40px) / 2);
        }

        @include respond-to(s_tablet) {
            width: 100%;
        }
    }

    .item-header {
        display: flex;
        align-items: flex-end;
        padding-bottom: 28px;
        border-bottom: 1px solid $black;

        @include respond-to(s_tablet) {
            padding-bottom: 20px;
        }
    }

    .item-image {
        width: 105px;
        height: 105px;
        margin-right: 20px;
    }

    .item-name {
        margin: 0;
        font-size: 20px;
        line-height: 26px;
        font-weight: 500;

        @include respond-to(s_tablet) {
            font-size: 18px;
            line-height: 23px;
        }
    }

    .item-job {
        margin: 0;
        font-size: 18px;
        line-height: 23px;

        @include respond-to(s_tablet) {
            font-size: 16px;
            line-height: 24px;
        }
    }

    .item-icon {
        position: absolute;
        top: 40px;
        right: 35px;
        width: 34px;
        height: 34px;
    }

    .item-bottom {
        margin-top: 28px;

        @include respond-to(s_tablet) {
            margin-top: 20px;
        }
    }

    .button {
        display: block;
        margin-top: 35px;
        margin-left: auto;
    }
}
</style>