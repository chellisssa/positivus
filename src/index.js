require('./style.scss');
import Vue from 'vue';
import PageBase from './components/PageBase.vue';

function init() {
    const container = document.querySelector('.js-container');
    if (!container) return;

    new Vue({
        el: '#container',
        components: { PageBase },
        data() {
            return {
                
            };
        },
        template: `<PageBase />`,
    });
}

document.addEventListener('DOMContentLoaded', () => {
    init();
});

export function lockScreen() {
    const scrollTop = window.scrollY;
    document.body.classList.add('_no-scroll');
    document.body.style.top = `-${scrollTop}px`;
    return scrollTop;
}

export function unlockScreen(scrollTop) {
    document.body.classList.remove('_no-scroll');
    document.body.style.top = 0;
    window.scrollTo({
        top: scrollTop,
    });
}





