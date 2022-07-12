import Footer from "../Footer/Footer.js";
import Header from "./HeaderMain/HeaderMain.js";
import AboutMe from "./AboutMe/AboutMe.js";
import AboutProject from "./AboutProject/AboutProject.js";
import Portfolio from "./Portfolio/Portfolio.js";
import Promo from "./Promo/Promo.js";
import Techs from "./Techs/Techs.js";

function Main(props) {
    return (
        <div >
            <Header />
            <main className="main">
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </div>

    );
}
export default Main;