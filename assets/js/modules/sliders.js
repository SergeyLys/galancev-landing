import '../libs/slick';
import "../libs/light-gallery/lightgallery.min.js";
import "../libs/light-gallery/lg-thumbnail.min.js";
import "../libs/light-gallery/lg-fullscreen.min.js";

export default {
    init() {
        this.sliders();
    },

    sliders() {
        $('.testimonial-slider').slick();

        $('.popup-link').lightGallery({
          subHtmlSelectorRelative: true,
          counter: false
        }); 
    }
}