

const Event = () => {

    let msg ="Event Based Program"

    const handleClick = () => {
    alert("Btn Clicked")
    }
    const handleClear=(msg) => {
        alert(msg)
    }
    const handleChange = (e) => { 
        msg = "React";
        console.log(msg)
    }

  return (
      <div className="container text-center mt-4">
          <h1>{msg}</h1>
          <button onClick={handleClick}  className="btn btn-success">Click</button>
    
          <button onClick={()=> handleClear("Clear btn clicked")} className="btn btn-dark">Clear</button>
      <button onClick={handleChange} className="btn btn-danger">Change</button>
      </div>
  )
}

export default Event;