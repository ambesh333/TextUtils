import React,{useState} from 'react'

export default function TextForm(props) 
{

    const handleUpClick = ()=>{
        console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success" );
    }

    const handleClick = ()=>{
        console.log("lower case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success" );
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }


    const [text, setText ] = useState('Enter text here');
    return (
        <>
        <div className ="container" style ={{Color : props.mode==='dark'?'white' : 'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
         <textarea className="form-control" value = {text} onChange = {handleOnChange}  style ={{backgroundColor : props.mode==='dark'?'grey' : 'white',color:  props.mode==='dark'?'white' : 'black'}}
         id="myBox" rows="8"></textarea>
         </div>
        <button className="btn btnprime" onClick ={handleUpClick}>Convert into Uppercase</button>
        <button className="btn btnprime" onClick ={handleClick}>Convert into Lowercase</button>
       </div>

        </>
    )
}
