import React,{useState} from "react";

export default function TextForm(props) {
  let sentenceCount = 0; let [count, setCount] = useState(0);

  const handleUpClick = () => {
    // console.log("You clicked the button: " + text);
    let UCText =  text.toUpperCase();
    setText(UCText);
  }

  const handleLoClick = () => {
    // console.log("You clicked the button: " + text);
    let UCText =  text.toLowerCase();
    setText(UCText);
  }

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }

  const handleSen = () => {
    for(count=0; count<text.length; count++){
      if(text.charAt(count).match(/[.?!]/)){
        sentenceCount++; 
        setCount(sentenceCount);
      }
    }
  }


    const [text, setText] = useState("");
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control" value={text}
            id="textBox" onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lower case</button>
        <button className="btn btn-primary" onClick={handleSen}>Count sentences</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary:</h2>
        <p>Your text has {text.split(" ").length} words and {text.length} characters.</p>
        <p>It is a {0.008 * text.split(" ").length} minutes long read.</p>
        <p>Your text has {count} sentences.</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
