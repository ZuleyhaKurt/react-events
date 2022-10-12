import { useState } from "react";

const UsestateCounter = () => {
const[count,setCount]=useState(0)
    const increment = () => { 
        setCount(count+1)
    }
    const dec = () => {
        if (count > 0) {
            setCount(count-1)
        }
    }

  return (
      
          <div className="container text-center mt-4">
        <h1>Usestate Hook</h1>
          <h2 className="display-4 text-danger">COUNT:{ count}</h2>
        <button onClick={increment}  className="btn btn-success">INC</button>
        <button onClick={()=>setCount(0)}  className="btn btn-dark">CLR</button>
       
       
          <button onClick={dec} className="btn btn-danger">DEC</button>
          {/* <button onClick={()=> setCount(count-1)}  className="btn btn-danger">DEC</button> */}
      </div>
    
  )
}

export default UsestateCounter;