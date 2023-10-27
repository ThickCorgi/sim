import ButtonIe from "./ButtonI"
import ButtonJ from "./ButtonJ"
import ButtonK from "./ButtonK"
import ButtonIndex from "./ButtonIndex"

export default function Toolbar() {
 
  return (
    <div className="flex flex-row ">
      <ButtonIe />
      <ButtonJ />
      <ButtonK />
      <ButtonIndex />
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
