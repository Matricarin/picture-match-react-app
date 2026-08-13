import './App.css'
import Card from "./components/Card";
import Board from "./components/Board";

function App() {
  const title = "Picture Match!";
  const cards = [
    {
      id:1,
      image:"🐰"
    },
    {
      id:2,
      image:"🦁"
    },
    {
      id:3,
      image:"🐸"
    },
    {
      id:4,
      image:"🐵"
    },
  ]

  return (
    <div>
      <h1>{title}</h1>
      <Board cards={cards}/>
    </div>
  );
}

export default App
