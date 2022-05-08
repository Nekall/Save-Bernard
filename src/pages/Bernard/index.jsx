import { Link } from "react-router-dom";
import BernardPleadingFace from "../../assets/images/bernard-pleading-face-v1.png";
import "../../style/pages/bernard.scss";
const Bernard = () => {
  return (
    <section className="bernard">
      <Link to="/">Retourner a l'accueil</Link>
      <h1>Bernard</h1>
      <img className="bernard_img" src={BernardPleadingFace} alt="bernard" />
    </section>
  );
};
export default Bernard;
