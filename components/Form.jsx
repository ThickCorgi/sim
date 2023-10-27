'use client'
import { useState } from "react"
import {BiNote} from "react-icons/bi"
import Display from "./Display"

export default function Form(){
  const [list, setList] = useState([1,2,3,4])
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let rege = /[^0-9a-z-]/gi
    const numbers = input.split(',').map(el=> el.trim().replace(rege, ''))
    while(numbers.includes('')){
      let inx = numbers.indexOf('')
      numbers.splice(inx,1)
    }
    
    setList([...list, ...numbers])
    setInput('')
  }

  const handleRising = () => {
    const sortedList = [...list].sort((a,b)=>a-b)
    setList(sortedList)
  }
  const handleDecrease = () => {
    const sortedList = [...list].sort((a,b)=>b-a)
    setList(sortedList)
  }

  return (
      <>
       <form className="flex justify-center pb-20 " onSubmit={handleSubmit}>
          <label>
            Array: 
            <input 
            type='text'
            className = 'border border-slate-800 ml-1'
            placeholder=" lets see"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
          </label>
          <button className="border border-slate-900 ml-1 px-1 " type='submit'>Visualize</button>
          <button className="border border-slate-900 ml-1 px-1 " onClick={()=> setList([])}>Clear</button>
          <button className="border border-slate-900 ml-1 px-1 " onClick={handleRising}>Asc Order</button>
          <button className="border border-slate-900 ml-1 px-1 " onClick={handleDecrease}>Desc Order</button>
        </form> 

        <div className="flex justify-center mb-10">
          <h4>length: {list.length}</h4>
        </div>


        <div>
              <Display array={list}/>
        </div>
      </>
  )
}