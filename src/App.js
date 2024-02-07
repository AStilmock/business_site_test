import './App.css';
import { useState, useEffect } from 'react'

const white = {background: "white"}
const blue = {background: "blue"}

function App() {
  const[color, setColor] = useState(white)
  const click = () => {
    setColor(color)
  }
  useEffect(() =>{
    document.body.style.backgroundColor = color
  }, [color])
  
  return (
    <div className="App">
      <button onClick = {
        () => click("yellow")
      }>Change color</button>
      <div>Home Page</div>
    </div>
  );
}

export default App;
