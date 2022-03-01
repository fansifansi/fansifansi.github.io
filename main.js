import { CountUp } from './js/countUp.min.js';

window.onload = function() {
    var fansicount = parseInt(document.getElementsByName("busuanzi_value_site_pv")[0].innerHTML);
    var countUp = new CountUp('target', fansicount);
    countUp.start();
}