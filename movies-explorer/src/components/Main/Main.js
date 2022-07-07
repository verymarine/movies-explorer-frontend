import Header from "../Header/Header.js";
import AboutMe from "./AboutMe/AboutMe.js";
import AboutProject from "./AboutProject/AboutProject.js";
import Portfolio from "./Portfolio/Portfolio.js";
import Promo from "./Promo/Promo.js";
import Techs from "./Techs/Techs.js";

function Main(props) {
    return (
        <div >
            <Header />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
        </div>

    );
}
export default Main;