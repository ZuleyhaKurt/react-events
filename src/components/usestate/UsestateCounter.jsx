import { useState } from "react";

const UsestateCounter = () => {
  return (
      
          <div className="container text-center mt-4">
        <h1>Usestate Hook</h1>
                <h2 className="display-4 text-danger">COUNT:</h2>
        <button  className="btn btn-success">INC</button>
        <button className="btn btn-danger">DEC</button>
      </div>
    
  )
}

export default UsestateCounter;