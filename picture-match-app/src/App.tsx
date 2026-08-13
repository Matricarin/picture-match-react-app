import './App.css'
import Card from "./components/Card";

function App() {
  const title = "Picture Match!";
  const size = 10;


  return (
    <div>
      <h1>{title}</h1>

      <div className='board'>

        <Card image="😺" />
        <Card image="🐶" />
        <Card image="🐸" />
        <Card image="🐻" />
        
      </div>
    </div>
  );
}

export default App
