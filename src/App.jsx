import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('000000')
  const randomColor = () => {
    var hexcode=""
    const chars=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    for(let i=0;i<6;i++){
      hexcode+=chars[Math.floor(Math.random()*chars.length)]
    }
    setColor(hexcode)
  }
  return (

    <div style={{ width: '100%', height: '100vh', backgroundColor: `#${color}` }} className='d-flex justify-content-center align-items-center'>
      <div style={{ width: '600px' }}>
        <h1 className="text-center text-light">Background Color Changer</h1>
        <div className="d-flex justify-content-between align-items-center mt-3 container">
          <button className="btn rounded-pill bg-light" onClick={() => setColor('ff0000')}>Red</button>
          <button className="btn rounded-pill bg-light" onClick={() => setColor('00FF00')}>Green</button>
          <button className="btn rounded-pill bg-light" onClick={() => setColor('0000FF')}>Blue</button>
          <button className="btn rounded-pill bg-light" onClick={randomColor}>Random</button>
          <button className="btn rounded-pill bg-light" onClick={() => setColor('000000')}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
