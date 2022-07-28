import promo from "../../../images/promo.svg";
import "./Promo.css";

function Promo(props) {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студентки факультета Веб-разработки.
      </h1>
      <img className="promo__logo" src={promo} alt="Логотип в виде спирали" />
    </section>
  );
}
export default Promo;
