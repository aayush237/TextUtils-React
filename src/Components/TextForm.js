import React,{useState} from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("You clicked the button " + text);
    let UCText =  text.toUpperCase();
    setText(UCText);
  }

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  }


    const [text, setText] = useState("Enter text here");
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control" value={text}
            id="textBox" onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
    </div>
  );
}
