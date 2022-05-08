import "../../style/pages/intro.scss";
import { Link } from "react-router-dom";
import Bernard from "../../assets/images/bernard-pleading-face-v1.png";
const Intro = () => {
  return (
    <section className="intro">
      <h1>Sauvez Bernard !</h1>
      <p>Bernard s'est fait enlever par le monstre du fin fond de la mer sombre !</p>
      <p>Délivre le avant qu'il ne soit trop tard !</p>
      <p>Pour cela, il te faut compléter 4 énigmes qui chacune te donneront un chiffre qui compose le code du caneda pour ouvrir la cage ou est enfermé Bernard !</p>
      <p>Mais attention de ne pas entrer le mauvais mot de passe... sinon le monstre du fin fond de la mer sombre pourrait entendre l'alarme & venir s'occuper de Bernard !</p>
      <p>Bon courage aventurier⸱ère⸱x !</p>
      <Link to="/">Je pars à l'aventure !</Link>
        <img className="bernard" src={Bernard} alt="bernard"/>
    </section>
  );
};
export default Intro;
