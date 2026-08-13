import './App.css'
import {type Card} from "./models/Card";
import BoardComponent from "./components/BoardComponent";

function App() {
  const title = "Picture Match!";
  const cards: Card[] = [

  ]

  return (
    <div>
      <h1>{title}</h1>
      <BoardComponent cards={cards} />
    </div>
  );
}

export default App
