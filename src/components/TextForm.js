import React, { useState } from 'react'
import propTypes  from "prop-types";

export default function TextForm(props) {
    const[text,setText] = useState("")
    const handleupclick = ()=>{
        let new_text = text.toUpperCase()
        setText(new_text)
        props.showalert("Text is converted to Uppercase.","success")
    }
    
    const handleloclick = ()=>{
        let new_text = text.toLowerCase()
        setText(new_text)
        props.showalert("Text is converted to Lowercase.","success")
    }
    
    const handleclearclick = ()=>{
        let new_text = text.replace(text.slice(0,text.length),"")
        setText(new_text)
        props.showalert("Text is cleared.","success")
    }
    
    const handleonchange = ()=>{
        setText(event.target.value)
    }
    
    const handlecopyclick = ()=>{
        let copy_text = document.getElementById("exampleFormControlTextarea1")
        copy_text.select()
        navigator.clipboard.writeText(copy_text.value)
        props.showalert("Text is copied to clipboard.","success")
    }
    
    const handlespaceclick = ()=>{
        let space = text.split(/[ ]+/)
        setText(space.join(" "))
        props.showalert("Extraspace has been removed","success")
    }
    return (
    <>
    <div className="container" style={{color :props.mode =="dark"?"white":"black" }}>
    <div className="mb-3">
    <h1>{props.heading}</h1>
    <textarea className="form-control" style={{backgroundColor :props.mode =="dark"?"#121212":"white",color:props.mode == "dark"?"white":"black"}} value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
    <button className="btn btn-primary my-3" onClick ={handleupclick}>Convert to Uppercase</button>
    <button className="btn btn-primary my-3 mx-3" onClick ={handleloclick}>Convert to Lowercase</button>
    <button className="btn btn-primary my-3 mx-3" onClick={handleclearclick}>clear text</button>
    <button className="btn btn-primary my-3 mx-3" onClick={handlecopyclick}>Copy text</button>
     <button className="btn btn-primary my-3 mx-3" onClick={handlespaceclick}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length-1} word and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?`${text}`:"Enter something in the textbox to preview it."}</p>
    </div>
    </div>
    </>
  )
}
