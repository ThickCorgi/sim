'use client'
import { useState } from "react"
import {BiNote} from "react-icons/bi"


export default function Form(){
  const [list, setList] = useState([])
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let rege = /[^0-9a-z]/gi
    const numbers = input.split(',').map(el=> el.trim().replace(rege, ''))
    let index = numbers.indexOf('')
    if(index>-1){
      numbers.splice(index,1)
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
    
       
       <form className="flex justify-center mb-10" onSubmit={handleSubmit}>
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


        <div className="list-none flex justify-around mb-10">
          {list.map((el,indx)=>{
          return (
             <li className="border border-black px-5 py-3 m-2 text-4xl " key={indx}>{el}</li>

           )}
           )}
        </div>
      </>
  )
}