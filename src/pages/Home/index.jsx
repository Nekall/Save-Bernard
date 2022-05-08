import { Link } from "react-router-dom";
import "../../style/pages/home.scss";
const Home = () => {
  return (
    <section className="home">
      <Link to="/intro">J'ai raté l'explication !</Link>
      <h1>Sauvez Bernard !</h1>
      <div className="enigmas_links">
        <Link to="/enigma-1">Enigme 1: ❌</Link>
        <Link to="/enigma-2">Enigme 2: ❌</Link>
        <Link to="/enigma-3">Enigme 3: ❌</Link>
        <Link to="/enigma-4">Enigme 4: ❌</Link>
        <Link to="/bernard">Sauvez Bernard: ❌</Link>
      </div>
    </section>
  );
};
export default Home;
