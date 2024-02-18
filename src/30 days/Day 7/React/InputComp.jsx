import React, { useState } from "react";

const InputComp = () => {
  const [checkbtn,setChechbtn] = useState(false);
  const [sliderValue, setSliderValue] = useState(20);
  const [date,setDate] = useState("");

  const handleCheckBtn = (e) =>{
    setChechbtn(!checkbtn)
  }

  const handleSliderChange = (e) =>{
    setSliderValue(e.target.value)
  }
  const handleData =(e)=>{
    setDate(e.target.value)
  }

  const handleClick = () =>{
    // console.log(sliderValue)
    console.log(date)
  }
 

  console.log(checkbtn);
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h1>Naveed</h1>
        {/* <input type="button" /><br /> */}
        {/* <input type="checkbox" checked={checkbtn} onChange={handleCheckBtn} /><br /> */}
        {/* <input type="range" min="0" max="100" onChange={handleSliderChange}  value={sliderValue} /><br /> */}
        <input type="date" value={date} onChange={handleData} /><br />
        {/* <input type="color" /><br />
        <input type="date" /><br />
        <input type="datetime-local" /><br />
        <input type="email" /><br />
        <input type="file" /><br />
        <input type="hidden" /><br />
        <input type="image" /><br />
        <input type="month" /><br />
        <input type="number" /><br />
        <input type="password" /><br />
        <input type="radio" /><br />
        
        <input type="reset" /><br />
        <input type="search" /><br />
        <input type="submit" /><br />
        <input type="tel" /><br />
        <input type="text" /><br />
        <input type="time" /><br />
        <input type="url" /><br />
        <input type="week" /><br /> */}
        <button  onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
};

export default InputComp;
