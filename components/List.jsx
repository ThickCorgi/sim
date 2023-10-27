
export default function List(){

  const array = []

  return (
    <div className="list-none flex justify-around">
      {array.map(el=>(
        <li>{el}</li>
        ))}
    </div>
  )
}