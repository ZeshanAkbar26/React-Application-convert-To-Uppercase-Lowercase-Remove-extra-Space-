import React,{useState} from 'react'

export default function TextForm(props)

{
const handleUpClick= ()=>{
   // console.log("Uppercase was clicked"+text);
    let newText= text.toUpperCase();
    setText(newText)
}
const handleLoClick= ()=>{
  // console.log("Uppercase was clicked"+text);
   let newText= text.toLowerCase();
   setText(newText)
}
const handleClearClick= () => {
 console.log("Uppercase was clicked"+text);
   let newText=('');
   setText(newText)
}

const handleOnChange= (event)=>{
   // console.log("on change");
    setText(event.target.value)
}

const handleCopy= ()=> {
  console.log("I am copy");
  var text= document.getElementById("mybox");
  text.select();
  text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value);
}

const handleExtreSpaces = ()=>{
  let newText= text.split(/[ ]+/);
  setText(newText.join(" "))
}


const [text,setText]=useState('');


  return (
    <>
    <div className=" container">
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange}  id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-1" onClick={handleExtreSpaces}>Remove Extra Space</button>




    </div>
    <div className=" container my-3">
      <h2>Your text summery </h2>
      <p>{text.split(" ").length}words and {text.length} characters</p>
      <p>{ 0.008 * text.split(" ").length} Minutes Read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
