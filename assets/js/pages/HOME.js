import HeaderFunctions from "../modules/headerFunctions";
import FormFunctions from "../modules/formFunctions";
import Tabs from "../modules/tabSwitcher";
import Sliders from "../modules/sliders.js";
import MapInit from "../modules/map.js";
import Isotope from "../modules/isotopeGrid";
import Share from "../modules/sharing.js";

export default {
    init(){
        HeaderFunctions.init();
        Tabs.init();
        Sliders.init();
        MapInit.init();
        Isotope.init();
        FormFunctions.init();
        Share.init();
    }
};