import HeaderFunctions from "../modules/headerFunctions";
import Tabs from "../modules/tabSwitcher";
import Sliders from "../modules/sliders.js";
import MapInit from "../modules/map.js";
import Isotope from "../modules/isotopeGrid";

export default {
    init(){
        HeaderFunctions.init();
        Tabs.init();
        Sliders.init();
        MapInit.init();
        Isotope.init();
    }
};