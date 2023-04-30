<template>
    <section class="modal" :class="{active: type}" @click.self="closeModal">
        <div class="container">
            <h3 class="header-title" v-html="content[type].title" />
            <div class="text" v-html="content[type].text" />
            <button class="button" @click="closeModal">Close</button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        type: String,
    },
    data() { 
        return {
            content: {
                'about': {
                    title: 'About Us',
                    text: 'Positivus is&nbsp;a&nbsp;digital marketing agency that specializes in&nbsp;helping businesses build their online presence and reach their target audience. With a&nbsp;team of&nbsp;experienced digital marketing professionals, we&nbsp;offer a&nbsp;wide range of&nbsp;services including search engine optimization, social media marketing, PPC advertising, email marketing, and more. We&nbsp;work closely with our clients to&nbsp;develop custom strategies that align with their goals and deliver measurable results. With a&nbsp;strong focus on&nbsp;innovation and creativity, Positivus is&nbsp;committed to&nbsp;helping businesses thrive in&nbsp;the digital age.'
                },
                'blog': {
                    title: 'Oops!',
                    text: 'This section is under construction.',
                },
                'form-success': {
                    title: 'Success!',
                    text: 'Thank you for contacting&nbsp;us.<br>We&nbsp;have received your message and one of&nbsp;our managers will get back to&nbsp;you shortly.'
                },
                'news-success': {
                    title: 'Success!',
                    text: 'Thank you for joining our community!<br>You will now receive the latest updates, news, and insights directly to&nbsp;your inbox.'
                },
                'case-study-restaurant': {
                    title: 'Successful PPC Campaign for a&nbsp;Local Restaurant',
                    text: '<p>Our team recently implemented a&nbsp;targeted PPC (pay-per-click) campaign for a&nbsp;local restaurant and the results were impressive. The campaign was designed to&nbsp;increase website traffic and ultimately drive sales for the restaurant.</p><p>After careful research and analysis, we&nbsp;created a&nbsp;highly targeted campaign that focused on&nbsp;specific keywords and demographics. The campaign was launched across various platforms including Google Ads and social media channels.</p><p>Overall, the success of&nbsp;this PPC campaign has demonstrated the effectiveness of&nbsp;targeted advertising and its ability to&nbsp;deliver tangible results for local businesses. If&nbsp;you&rsquo;re looking to&nbsp;improve your online presence and drive growth for your business, a&nbsp;targeted PPC campaign may be&nbsp;the perfect solution.</p>'
                },
                'case-study-software': {
                    title: 'SEO Success for B2B Software Company',
                    text: '<p>We&nbsp;are proud to&nbsp;have worked with a&nbsp;B2B software company to&nbsp;develop a&nbsp;successful SEO strategy that led to&nbsp;impressive results.</p><p>Our team of&nbsp;experts crafted a&nbsp;comprehensive plan that focused on&nbsp;optimizing the website for key keywords and improving overall search engine rankings. By&nbsp;conducting thorough keyword research and analysis, we&nbsp;were able to&nbsp;identify the most relevant and high-impact keywords to&nbsp;target.</p><p>We&nbsp;then implemented on-page optimization techniques, including optimizing meta tags, improving internal linking, and optimizing content for search engines. Additionally, we&nbsp;developed a&nbsp;content marketing strategy that focused on&nbsp;creating high-quality, keyword-rich content that would attract and engage the target audience.</p><p>Through our efforts, we&nbsp;were able to&nbsp;achieve a&nbsp;first page ranking for key keywords, resulting in&nbsp;a&nbsp;200% increase in&nbsp;organic traffic to&nbsp;the website. This boost in&nbsp;traffic led to&nbsp;an&nbsp;increase in&nbsp;leads and conversions, ultimately contributing to&nbsp;the company&rsquo;s bottom line.</p>'
                },
                'case-study-retail': {
                    title: 'Social Media Marketing Campaign for National Retail Chain',
                    text: '<p>We&nbsp;were tasked with creating a&nbsp;social media marketing campaign for a&nbsp;national retail chain. Our objective was to&nbsp;increase their online presence and drive more sales through their website.</p><p>After analyzing their current social media strategy and identifying areas for improvement, we&nbsp;developed a&nbsp;comprehensive plan that included targeted ads, engaging content, and influencer collaborations.</p><p>Our efforts resulted in&nbsp;a&nbsp;25% increase in&nbsp;social media followers and a&nbsp;significant&nbsp;20% increase in&nbsp;online sales. We&nbsp;were able to&nbsp;successfully leverage the power of&nbsp;social media to&nbsp;drive more traffic and revenue to&nbsp;the national retail chain.</p>'
                },
                'services-search-engine-optimization': {
                    title: 'Search engine optimization',
                    text: '<p>Search engine optimization (SEO) is&nbsp;the process of&nbsp;optimizing a&nbsp;website or&nbsp;web page to&nbsp;increase its visibility and ranking on&nbsp;search engine results pages (SERPs). The aim of&nbsp;SEO is&nbsp;to&nbsp;attract more organic traffic to&nbsp;a&nbsp;website by&nbsp;improving its search engine ranking.</p><p>The process of&nbsp;SEO involves several techniques such as&nbsp;keyword research, on-page optimization, link building, and content creation. Keyword research involves identifying the keywords that are relevant to&nbsp;a&nbsp;business and optimizing the content of&nbsp;the website around those keywords. On-page optimization involves optimizing the website\&rsquo;s content, metadata, and HTML structure to&nbsp;make it&nbsp;more search-engine friendly.</p><p>Link building is&nbsp;the process of&nbsp;acquiring links from other websites that point to&nbsp;the website being optimized. This technique helps to&nbsp;improve the website&rsquo;s authority and credibility in&nbsp;the eyes of&nbsp;search engines. Content creation involves creating high-quality, relevant, and engaging content that attracts and retains visitors.</p>'
                },
                'services-pay-per-click-advertising': {
                    title: 'Pay-per-click advertising',
                    text: '<p>Pay-per-click (PPC) advertising is&nbsp;a&nbsp;type of&nbsp;online advertising in&nbsp;which an&nbsp;advertiser pays each time a&nbsp;user clicks on&nbsp;one of&nbsp;their ads. PPC ads are typically displayed on&nbsp;search engine results pages (SERPs) and other websites that have agreed to&nbsp;show ads.</p><p>PPC advertising can be&nbsp;a&nbsp;highly effective way to&nbsp;drive targeted traffic to&nbsp;a&nbsp;website, since advertisers can choose which keywords and phrases they want to&nbsp;target with their ads. This means that ads are only displayed to&nbsp;users who are actively searching for products or&nbsp;services related to&nbsp;the advertiser&rsquo;s business.</p><p>PPC ads can also be&nbsp;highly customizable, allowing advertisers to&nbsp;choose the geographic location, time of&nbsp;day, and other parameters for their ads. This level of&nbsp;control can help advertisers maximize their return on&nbsp;investment (ROI) by&nbsp;ensuring that their ads are shown to&nbsp;the most relevant and interested users.</p>'
                },
                'services-social-media-marketing': {
                    title: 'Social Media Marketing',
                    text: '<p>Social media marketing is&nbsp;the process of&nbsp;promoting a&nbsp;product or&nbsp;service through various social media platforms such as&nbsp;Facebook, Instagram, Twitter, and LinkedIn.</p><p>This type of&nbsp;marketing involves creating and sharing content that is&nbsp;tailored to&nbsp;each platform and its audience. The goal is&nbsp;to&nbsp;engage with users and encourage them to&nbsp;share your content with their own followers, ultimately leading to&nbsp;increased brand awareness and sales.</p>'
                },
                'services-email-marketing': {
                    title: 'Email Marketing',
                    text: '<p>Email marketing is&nbsp;a&nbsp;digital marketing strategy that involves sending promotional messages and advertisements to&nbsp;a&nbsp;group of&nbsp;people via email. The main goal of&nbsp;email marketing is&nbsp;to&nbsp;build relationships with potential customers, increase brand awareness, generate leads, and ultimately drive sales.</p><p>To&nbsp;create a&nbsp;successful email marketing campaign, it&nbsp;is&nbsp;important to&nbsp;have a&nbsp;targeted email list and a&nbsp;well-crafted message that resonates with the audience. The message should be&nbsp;personalized, engaging, and relevant to&nbsp;the recipient&rsquo;s interests.</p>'
                },
                'services-content-creation': {
                    title: 'Content Creation',
                    text: '<p>Content creation is&nbsp;a&nbsp;crucial component of&nbsp;any successful marketing strategy. It&nbsp;involves the development of&nbsp;topic ideas that appeal to&nbsp;your buyer persona, the creation of&nbsp;written or&nbsp;visual content around those ideas, and the dissemination of&nbsp;that information to&nbsp;your target audience through various formats such as&nbsp;blogs, videos, infographics, and more.</p><p>By&nbsp;creating valuable content that is&nbsp;both informative and engaging, you can establish your brand as&nbsp;a&nbsp;thought leader in&nbsp;your industry, increase brand awareness, and attract new customers. Content creation can also help you build a&nbsp;loyal customer base by&nbsp;providing your audience with valuable information that they can use to&nbsp;make informed purchasing decisions.</p>'
                },
                'services-analytics-and-tracking': {
                    title: 'Analytics and Tracking',
                    text: '<p>In&nbsp;today&rsquo;s digital world, websites and mobile applications are integral parts of&nbsp;any business. Companies use websites and mobile applications to&nbsp;interact with their customers, promote their products or&nbsp;services, and generate leads. To&nbsp;measure the success of&nbsp;their digital presence, companies need to&nbsp;track and analyze user behavior on&nbsp;their websites and mobile applications. This is&nbsp;where analytics and tracking come&nbsp;in.</p><p>Analytics is&nbsp;the process of&nbsp;collecting, measuring, and analyzing data to&nbsp;understand and improve user behavior. Tracking refers to&nbsp;the process of&nbsp;monitoring user behavior on&nbsp;websites and mobile applications. By&nbsp;tracking user behavior, companies can gain valuable insights into how users interact with their digital assets.</p>'
                },
            }
        };
    },
    methods: {
        closeModal() {
            this.$emit('close-modal');
        }
    }
}
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba($black, .6);

    @include respond-to(s_tablet) {
        align-items: flex-start;
        overflow: auto;
    }

    .container {
        padding: 56px;
        border-radius: 45px;
        background-color: #fff;

        @include respond-to(s_tablet) {
            padding: 20px;
            border-radius: 0;
            height: fit-content;
        }
    }

    .header-title {
        width: fit-content;
        margin: 0 auto;
        text-align: center;
    }

    .text {
        margin: 32px auto 0;
        font-size: 18px;
        line-height: 23px;
        text-align: center;
    }

    .button {
        display: block;
        margin-top: 32px;
        width: 100%;
    }

    
}
</style>