export default function Display({array}){

  const handleClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    console.log(`Element position: x=${rect.left}, y=${rect.top}, right=${rect.right}, bottom=${rect.bottom}`);


}



  return (
    <div className="list-none flex justify-around ">
          {array.map((el,indx)=>{
            return (
              <div className="">
              <li className="border border-black px-5 py-3  text-4xl " onClick={handleClick} key={indx}>{el}</li>
              <p className="flex flex-end justify-end">index: {indx}</p>

              </div>
            )}
           )}
        </div>
  )
}