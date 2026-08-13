import './App.css'
import Card from "./components/Card";
import Board from "./components/Board";

function App() {
  const title = "Picture Match!";
  const cards = [
    {
      id: 1,
      image: "🐰"
    },
    {
      id: 2,
      image: "🦁"
    },
    {
      id: 3,
      image: "🐸"
    },
    {
      id: 4,
      image: "🐵"
    },
    {
      id: 5,
      image: "😺"
    },
    {
      id: 6,
      image: "🐶"
    },
    {
      id: 7,
      image: "🐮"
    },
    {
      id: 8,
      image: "🐼"
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
