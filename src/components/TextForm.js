import React, {useState} from 'react'

export default function TextForm(props) {

    const handelUpcClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to UpperCase.","success");
    }

    const handelLwrcClick=()=>{
        let newText1=text.toLowerCase();
        setText(newText1);
        props.showAlert("Text converted to LowerCase.","success");
    }

    const handelOnChange=(event)=>{
        setText(event.target.value);
    }

    const handelClrClick=()=>{
        setText("");
        props.showAlert("Text cleared.","success");

    }

    const handelFntChngClick=()=>{
        if(document.getElementById("exampleFormControlTextarea1").style.fontFamily==="initial")
        {

            document.getElementById("exampleFormControlTextarea1").style.fontFamily="cursive";
            document.getElementById("PreviewText").style.fontFamily="cursive";
            props.showAlert("Text font changed to cursive.","success");
        }
        else
        {
            document.getElementById("exampleFormControlTextarea1").style.fontFamily="initial";
            document.getElementById("PreviewText").style.fontFamily="initial";
            props.showAlert("Text font changed to default.","success");
        }
        
    }

    const handelCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied.","success");
    }

    const handelRmvExtraSpaces=()=>{
        let newText=text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed.","success");
    }

    const [text, setText]=useState("");

  return (
    <>
    <div>
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}} rows="10" value={text} onChange={handelOnChange}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handelUpcClick}>Convert to Uppercase</button> 
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handelLwrcClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handelClrClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handelFntChngClick}>Change Font</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handelCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handelRmvExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3"></div>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p  id='PreviewText'>{text.length>0?text:"Nothing to preview."}</p>
    </>
  )
}
