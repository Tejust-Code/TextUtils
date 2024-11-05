import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('')

  const  handleUpClick=()=>{
        const newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To Uppercase","success")
    }
  const  handleClearClick=()=>{
        const newText=''
        setText(newText)
        props.showAlert("Text Cleared","success")
    }
    const  handleLowClick=()=>{
        const newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To Lowercase","success")
    }
   const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const handlePascal = () => {
        const newText = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
        setText(newText);
        props.showAlert("Converted To Start Case", "success");
    };    
    const handleCopy = () =>{
        var text = document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied To Clipboard","success")
    }
    const handleExtraSpaces = ()=>{
        const newText=text.split(/[  ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces","success")
    }
    const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;

  return (
    <>
            <div className='container my-5'>
            <h3 style={{color:props.mode==='black'?'white':'black'}}>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control border border-1 border-primary" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='black'?'#000421':'white',color:props.mode==='black'?'white':'black',}} id="mybox"  rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Uppercase</button>
            <button className='btn btn-primary ms-3' onClick={handleLowClick}>Lowercase</button>
            <button className='btn btn-primary ms-3' onClick={handlePascal}>Startcase</button>
            <button className='btn btn-primary ms-3' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary ms-3' onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary ms-3' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-4">
            <h2 style={{color:props.mode==='black'?'white':'black'}}>Your Text Summary</h2>
            <p style={{color:props.mode==='black'?'white':'black'}}>{wordCount} Words and {text.length} Characters</p>
            <p style={{color:props.mode==='black'?'white':'black'}}>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2 style={{color:props.mode==='black'?'white':'black'}}>Preview</h2>
            <p style={{color:props.mode==='black'?'white':'black'}}>{text.length>0?text:'Enter Something In The Above Textbox To Preview Here'}</p>
        </div>
    </>
  )
}
