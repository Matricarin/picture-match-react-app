import './App.css'
import Card from "./components/Card";

function App() {
  const title = "Picture Match!";

  return (
    <div>
      <h1>{title}</h1>

      <div className='board'>

        <Card image="🐰" size={100} />
        <Card image="🦁" size={100}/>
        <Card image="🐸" size={100}/>
        <Card image="🐵" size={100}/>

      </div>
    </div>
  );
}

export default App
