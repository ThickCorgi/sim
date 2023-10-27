import PointerButton from "./buttons/PointerButton"

export default function Toolbar() {
 
  return (
    <div className="flex flex-row ">
      <PointerButton name="i" arrow="i" color="red"/>
      <PointerButton name="j" arrow="j" color="green"/>
      <PointerButton name="k" arrow="k" color="blue"/>
    
    </div>
  )  
  
}


// export default function Toolbar(){
//   return(
//     <div className="flex justify-center mb-10">
//       {/* <button className="m-2 border border-slate-800 px-2">array[i] arrow</button> */}
//       {/* <button className="m-2 border border-slate-800 px-2"> i arrow</button> */}
//       {/* <button className="m-2 border border-slate-800 px-2">j arrow</button> */}
//       <button className="m-2 border border-slate-800 px-2"> k arrow</button>
//     </div>
//   )
// }
