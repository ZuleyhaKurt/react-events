import { useState } from "react";

const UsestateCounter = () => {
const[count,setCount]=useState(0)
    
    const [person, setPerson] = useState({
        name: "John",
        surname: "Doe",
        age:43,
})
    
    
    
    const incAge = () => {
       setPerson({...person, age:person.age+1})
   } 
    
    const increment = () => { 
        setCount(count+1)
    }
    // const dec = () => {
    //     if (count > 0) {
    //         setCount(count-1)
    //     }
    // }

  return (
      
      <div className="container text-center mt-4">
          <section>
        <h1>Usestate Hook</h1>
          <h2 className="display-4 text-danger">COUNT:{ count}</h2>
        <button onClick={increment}  className="btn btn-success">INC</button>
        <button onClick={()=>setCount(0)}  className="btn btn-dark">CLR</button>
       
{/*        
          <button onClick={dec} className="btn btn-danger">DEC</button> */}
          <button onClick={() => count > 0 && setCount(count - 1)} className="btn btn-danger">DEC</button>
          </section>
          <section>
              <h1>UseState Object</h1>
              <h2>{person.name}</h2>
              <h2>{person.surname}</h2>
              <h2>{person.age}</h2>
              <button onClick={incAge} className="btn btn-info">inc age</button>
          </section>
      </div>
      
    
      
  )
}

export default UsestateCounter;