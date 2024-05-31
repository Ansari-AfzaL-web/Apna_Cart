import React, { useState } from "react";


export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    console.log("UpperCase Was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "Success");
  }
  
  const handleLoClick = () => {
    console.log("LowerCase Was Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "Success");
  }

  // const handleCopyClick = () => {
  //   console.log("I am Copy");
  //   // let newText = text.toLowerCase();
  //   var text = document.getElementById("myBox");
  //   text.Select();
  //   // text.SetSelectionRange(0, 9999);
  //   navigator.clipboard.writeText(text.value);
  // }

  const handleClearClick = () => {
    // console.log("LowerCase Was Clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "Success");
  }

  const handleOnChange = (event) => {
    console.log("OnChange");
    setText(event.target.value);
    // setText(event.target.value);
  }
  // text = "new text"; //Wrong way to change in the state in reactjs
  // setText{"new text"} //Wrong way to change in the state in reactjs
  return (
    <>
    <div className="container" style={{color: text-props.mode === "dark" ? 'white': '#042743'}}>
      <div className="mb-3">
      <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: text-props.mode === "dark" ? 'grey': 'dark'}}
        ></textarea>
      </div>
      <button className="btn btn-primary m-2" onClick={handleUpClick}>
        ConvertoUppercase
      </button>
      <button className="btn btn-dark text-white m-2" onClick={handleLoClick}> 
        ConvertoLowercase
      </button>
      <button className="btn btn-white text-dark m-2" onClick={handleClearClick}>
        Clear Text
      </button>
      {/* <button className="btn btn-success text-dark m-2" id="copy" onClick={handleCopyClick}>
        ForCopy
      </button> */}
    </div>
    <div className="container mt-3" style={{backgroundColor: text-props.mode === "dark" ? 'grey': 'dark',color: text-props.mode === "dark" ? 'white': '#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words & {text.length} characters</p>
      <p>{0.008 * text.split("").length} minute to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter somthing to preview"}</p>
      {/* <p>{text.trim()}</p> */}
    </div>
    </>
  );
}
