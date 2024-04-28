import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from './constants/constants'

function App() {
const[selected,setSelected] = useState(null)

const toggle = (i)=>{
if(selected===i){
  return setSelected(null)
}
setSelected(i)
}
  return (
    <>
      <div className="wrapper">
        <div className="accordion">
          {data.map((data,i) => (
          <div className="item">
            <div className="title" onClick={()=>toggle(i)}>
              <h2>{data.question}</h2>
              <span>{selected===i?"-":"+"}</span>
            </div>
            <div className={selected===i?"contentshow":"content"}>
              {data.answer}
              </div>
              </div>
        ))}</div>
      </div>
    </>
  )
}

export default App
