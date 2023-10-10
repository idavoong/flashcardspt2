import "./App.css";
import { useState } from "react";

function App() {
  const [card, setCard] = useState(0);
  const [flip, setFlip] = useState(false);
  const [allowInput, setAllowInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [correct, setCorrect] = useState("");
  const [streak, setStreak] = useState(0);
  const data = [
    { q: "What has more energy ADP ot ATP?", a: "ATP" },
    { q: "How many chromosomes are in all human cells?", a: "46" },
    { q: "What is a family tree?", a: "Pedigree" },
    {
      q: "What is a constriction on a chromosome bound to a disk?",
      a: "Cenromere",
    },
    { q: "Are hydrogen bonds weak or strong?", a: "Weak" },
    { q: "How does the water get to the leaf?", a: "Xylem" },
    { q: "What is the process of cell division?", a: "Mitosis" },
    { q: "What is any alternate version of a gene?", a: "Allele" },
    {
      q: "Does chromosomes replication take place during interphase?",
      a: "No",
    },
    { q: "Is pH2 more acidic than pH8?", a: "No" },
    { q: "What is the product of the Calvin Cycle?", a: "Glucose" },
    {
      q: "Are the Centrioles outside of the nuclear membrane or the inside?",
      a: "Outside",
    },
  ];

  const handleFlip = () => {
    setFlip(!flip);
    setAllowInput("noPointer");
  }

  const handlePrevCard = () => {
    if (card == 0) {
      setCard(data.length - 1);
    } else {
      setCard(card - 1);
    }
    setFlip(false);
    setCorrect("");
    setAnswer("");
    setAllowInput("");
  };

  const handleNextCard = () => {
    if (card == data.length - 1) {
      setCard(0);
    } else {
      setCard(card + 1);
    }
    setFlip(false);
    setCorrect("");
    setAnswer("");
    setAllowInput("");
  };

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer == data[card].a) {
      setCorrect("true");
      setStreak(streak + 1);
    } else {
      setCorrect("false");
      setStreak(0);
    }
  };

  return (
    <div className="App">
      <h1>General Biology Flashcards</h1>
      <h3>Test your knowledge on general biology!</h3>
      <h3>Number of cards: {data.length}</h3>
      <h3>Streak: {streak}</h3>
      <div
        className={!flip ? "flashcard q" : "flashcard a"}
        onClick={handleFlip}
      >
        <div className={flip ? "hide" : "blur"}>{data[card].q}</div>
        <div className={!flip ? "hide" : "blur"}>{data[card].a}</div>
      </div>
      <div className="guess">
        <form>
          <label>
            <strong>Guess the answer here: </strong>
          </label>
          <input
            className={"input " + correct + allowInput}
            type="text"
            id={answer}
            value={answer}
            onChange={handleAnswer}
          />
          <button className="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <div className="navigation">
        <button className="button left" onClick={handlePrevCard}>
          ⬅
        </button>
        <button className="button right" onClick={handleNextCard}>
          ➡
        </button>
      </div>
    </div>
  );
}

export default App;
