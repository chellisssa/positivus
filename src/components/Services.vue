<template>
    <section class="services container js-services">
        <header class="header">
            <h2 class="header-title">
                Services
            </h2>
            <p class="header-text">
                At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
            </p>
        </header>
        <div class="wrapper">
            <ServicesCard v-for="card in cards"
                          :key="card.name"
                          :name="card.name"
                          :color="card.color"
                          :image="card.img"
                          :type="card.type"
                          class="card"
            />
        </div>
    </section>
</template>

<script>
const optimization = require('../images/services/optimization.png');
const advertising = require('../images/services/advertising.png');
const marketing = require('../images/services/marketing.png');
const email = require('../images/services/email.png');
const content = require('../images/services/content.png');
const tracking = require('../images/services/tracking.png');
import ServicesCard from './ServicesCard.vue';
export default {
    name: 'Services',
    components: {
        ServicesCard,
    },
    data() {
        return {
            cards: [
                {name: '<span>Search engine</span> <span>optimization</span>', color: 'grey', img: optimization, type: 'services-search-engine-optimization'},
                {name: '<span>Pay-per-click</span> <span>advertising</span>', color: 'green', img: advertising, type: 'services-pay-per-click-advertising'},
                {name: '<span>Social Media</span> <span>Marketing</span>', color: 'black', img: marketing, type: 'services-social-media-marketing'},
                {name: '<span>Email</span> <span>Marketing</span>', color: 'grey', img: email, type: 'services-email-marketing'},
                {name: '<span>Content</span> <span>Creation</span>', color: 'green', img: content, type: 'services-content-creation'},
                {name: '<span>Analytics and</span> <span>Tracking</span>', color: 'black', img: tracking, type: 'services-analytics-and-tracking'},
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.services {
    margin-top: 140px;

    @include respond-to(tablet) {
        margin-top: 80px;
    }

    @include respond-to(s_tablet) {
        margin-top: 60px;
    }

    .header {

        @include respond-to(s_tablet) {
            flex-direction: column;
        }
    }

    .wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        margin-top: 80px;

        @include respond-to(tablet) {
            margin-top: 60px;
        }

        @include respond-to(s_tablet) {
            gap: 30px;
            margin-top: 40px;
        }
    }

    .card {
        width: calc(50% - 20px);

        @include respond-to(s_tablet) {
            width: 100%;
        }
    }
}

</style>