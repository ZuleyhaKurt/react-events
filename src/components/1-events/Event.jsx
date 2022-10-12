

const Event = () => {

    const handleClick = () => {
    alert("Btn Clicked")
    }
    const handleClear=(msg) => {
        alert(msg)
    }
    const handleChange = (e) => { 
    console.log(e.target)
    }

  return (
      <div className="container text-center mt-4">
          <button onClick={handleClick}  className="btn btn-success">Click</button>
    
          <button onClick={()=> handleClear("Clear btn clicked")} className="btn btn-dark">Clear</button>
      <button onClick={handleChange} className="btn btn-danger">Change</button>
      </div>
  )
}

export default Event;