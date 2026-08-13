import './App.css'
import {type Card} from "./models/Card";
import Board from "./components/Board";

function App() {
  const title = "Picture Match!";
  const cards: Card[] = [
    {
      id: 1,
      image: "🐰",
      isOpen: false,
      isMatched: false
    },
    {
      id: 2,
      image: "🦁",
      isOpen: false,
      isMatched: false
    },
    {
      id: 3,
      image: "🐸",
      isOpen: false,
      isMatched: false
    },
    {
      id: 4,
      image: "🐵",
      isOpen: false,
      isMatched: false
    },
    {
      id: 5,
      image: "😺",
      isOpen: false,
      isMatched: false
    },
    {
      id: 6,
      image: "🐶",
      isOpen: false,
      isMatched: false
    },
    {
      id: 7,
      image: "🐮",
      isOpen: false,
      isMatched: false
    },
    {
      id: 8,
      image: "🐼",
      isOpen: false,
      isMatched: false
    },
  ]

  return (
    <div>
      <h1>{title}</h1>
      <Board cards={cards} />
    </div>
  );
}

export default App
