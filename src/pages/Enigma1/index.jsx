import { useState } from "react";
import { Link } from "react-router-dom";
const Enigma1 = () => {
  const [answer, setAnswer] = useState(null);
  let enigmas = [
    ["Qui a deux branches, mais pas de feuilles ?", "Les lunettes"],
    ["Qu'est-ce qui disparaît dès que tu dis son nom ?", "Le silence"],
    [
      "Si vous me cherchez, je suis là. Mais quand vous m’avez trouvé, j'ai disparu. Que suis-je ?",
      "Une énigme",
    ],
  ];
  const enigma = enigmas[Math.floor(Math.random() * 3)];

  const submitAnswer = (e) => {
    if (enigma[1].toLowerCase() === e.target[0].value.toLowerCase()) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  return (
    <>
      <Link to="/">Retourner a l'accueil</Link>
      <h1>Texte</h1>
      <p>{enigma}</p>
      <form
        onSubmit={(e) => {
          submitAnswer(e);
          e.preventDefault();
        }}
      >
        <input type="text" />
        <input type="submit" value="Envoyer" />
      </form>
      {answer === null ? null : answer ? (
        <>
        <p>Bien joué !</p>
        <p>Le premier chiffre est 4</p>
        </>
      ) : (
        <p>Oups il s'emblerait que se ne soit pas la bonne réponse !</p>
      )}
    </>
  );
};
export default Enigma1;
