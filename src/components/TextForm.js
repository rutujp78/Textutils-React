import React, {useState} from 'react'

export default function TextForm(props) {

    

    // let handeloriClick;
    // const handeloriClick=()=>{
    //     setText(originalText);
    // }

    // function showOriText(originalTexta)
    // {
    //     setText(originalTexta);
    // }

    const handelUpcClick=()=>{
        // console.log("Uppercase button was clicked." + text);
        // setText("You have clicked handelUpcClick.");
        // event.preventDefault();
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
        // console.log("Handel On Change.");
        setText(event.target.value);
        // if(handeloriClick)
        // {
        //     let originalTexta=text;
        //     showOriText(originalTexta);

        // }

    }

    const handelClrClick=()=>{
        setText("");
        props.showAlert("Text cleared.","success");

    }

    // const handelRdAldClick=()=>{
    //     let texta= new SpeechSynthesisUtterance();
    //     texta.text=text;
    //     window.speechSynthesis.speak(texta);
    // }

    
    // let valueF=1;
    // let fontName="initial";
    const handelFntChngClick=()=>{
    // const handelFntChngClick=(valueF)=>{
        // let newText=document.getElementById("exampleFormControlTextarea1").style.fontFamily="cursive"
        // setText(document.getElementById("exampleFormControlTextarea1").style.fontFamily='cursive');
        
        // if(valueF===1)
        // {
        //     document.getElementById("exampleFormControlTextarea1").style.fontFamily="cursive";
        //     document.getElementById("PreviewText").style.fontFamily="cursive";
        //     props.showAlert("Text font changed to cursive.","success");
        //     valueF=0;
        // }
        // else
        // {
        //     document.getElementById("exampleFormControlTextarea1").style.fontFamily="default";
        //     document.getElementById("PreviewText").style.fontFamily="default";
        //     props.showAlert("Text font changed to default.","success");
        //     valueF=1;
        // }
        // const [font, setFont] = useState(valueF);
        // if(valueF!=0)
        // {
        //     document.getElementById("exampleFormControlTextarea1").style.fontFamily="cursive";
        //     document.getElementById("PreviewText").style.fontFamily="cursive";
        //     props.showAlert("Text font changed to cursive.","success");
        //     valueF=0;
        // }

        
        // if(fontName==="initial"){

        //     document.getElementById("exampleFormControlTextarea1").style.fontFamily="cursive";
        //     document.getElementById("PreviewText").style.fontFamily="cursive";
        //     fontName="cursive";
        // }
        // else
        // {
        //     fontName="initial";
        //     document.getElementById("exampleFormControlTextarea1").style.fontFamily="initial";
        //     document.getElementById("PreviewText").style.fontFamily="initial";

        // }
        // props.showAlert(`Text font changed to ${fontName}.`,"success");
        // document.getElementById("exampleFormControlTextarea1").style.fontFamily="cursive";
        // document.getElementById("PreviewText").style.fontFamily="cursive";
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
        // props.showAlert("Text font changed to cursive.","success");
        
    }

    const handelCopy=()=>{
        // var text= document.getElementById("exampleFormControlTextarea1");
        // text.select();
        // navigator.clipboard.writeText(text.value);
        // document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied.","success");
    }

    const handelRmvExtraSpaces=()=>{
        let newText=text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed.","success");
    }

    //HOOK and State (useState is a Hook)
    const [text, setText]=useState(""); // text is variable and setText is function
    // text="New Text"; // wrong way to change the state
    // setText("New Text"); // correct way to change the text


  return (
    <>
    <div>
        <h1 className="mb-2">{props.heading}</h1>
        {/* <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label> //write 'htmlfor' insted of 'for' for react
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div> */}
        <div className="mb-3">
            {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
            <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}} rows="10" value={text} onChange={handelOnChange}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handelUpcClick}>Convert to Uppercase</button> 
        {/* mx-2 is bootstrap class that which gives x margin */}
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handelLwrcClick}>Convert to Lowercase</button>
        {/* <buttom className="btn btn-primary mx-2 my-2"  onClick={handeloriClick}>Show Original Text</buttom> */}
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handelClrClick}>Clear</button>
        {/* <buttom className="btn btn-primary mx-2 my-2"  onClick={handelRdAldClick}>Read Aloud</buttom> */}
        {/* <buttom className="btn btn-primary mx-2 my-2"  onClick={handelFntChngClick(valueF)}>Change Font</buttom> */}
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handelFntChngClick}>Change Font</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handelCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handelRmvExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3"></div>
        <h1>Your text summary</h1>
        {/* <p>{text.split(" ").length} words and {text.length} characters.</p> */}
        {/* <p>{text.trim().split(/[ ]+/).length.filter()} words and {text.length} characters.</p> */}
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p  id='PreviewText'>{text.length>0?text:"Nothing to preview."}</p>
    </>
  )
}
