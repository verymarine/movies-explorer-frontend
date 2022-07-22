import Footer from "../Footer/Footer.js";
import HeaderMain from "./HeaderMain/HeaderMain.js";
import AboutMe from "./AboutMe/AboutMe.js";
import AboutProject from "./AboutProject/AboutProject.js";
import Portfolio from "./Portfolio/Portfolio.js";
import Promo from "./Promo/Promo.js";
import Techs from "./Techs/Techs.js";
import Header from "../Header/Header.js";
import "./HeaderMain/HeaderMain.css";
import "../Header/Header.css";

function Main(props) {
    return (
        <div >
            {props.loggedIn
                ? <Header className="header-main" openNavigation={props.onClick} />
                : <HeaderMain />
            }
            <section className="main">
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </section>
            <Footer />
        </div>
    );
}
export default Main;
