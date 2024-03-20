import React , {useState} from 'react'
// useState is a hook in react --> with hooks we can use features of a class without making the class


export default function Textform(props) {
    const upperClick = () =>{
        // console.log("uppercase was clicked: "+text); // will be seen in console
        let newText = text.toUpperCase();
        // setText("You have clicked right")
        setText(newText);
    }

    const lowerClick = () =>{
        // console.log("uppercase was clicked: "+text); // will be seen in console
        let newText = text.toLowerCase();
        // setText("You have clicked right")
        setText(newText);
    }

    const clearClick = ()=>{
        let newText = '';
        setText(newText)
    }

    const reverseClick = ()=>{
        let newText = text.split(" ").reverse().join(' ');
        setText(newText)
    }

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value)
    }
    // without onchange we can't write any text in the textarea
    // const [text,setText] = useState('Enter Text Here');
    // useState() function will return a pair text, setText 
    // always write this syntax inside the function 
    // we can't update the text like we do normally e.g. text = "abc" no this is not supported
    // to update the text variable we use the updation function setText
    // setText("Hello") --> this is the correct way
    // initially the value in text variable is "Enter Text Here"
    const [text,setText] = useState('');
    let words = text.split(" ");
    return (
        <>
        <div className="container">
        <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                {/* increasing the rows will increase the tezxt area defsault size */}
            </div>
            {/* btn btn-primary is also a property in bootstrap */}
            <button className="btn btn-primary mx-1" onClick={upperClick}>Convert to Uppercase</button>
            {/* we want the text to change to uppercase when we click on the button so make a function with onClick */}

            <button className="btn btn-primary mx-1" onClick={lowerClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={reverseClick}>Reverse Text</button>
            <button className="btn btn-primary mx-1" onClick={clearClick}>Clear Text</button>


        </div>

        <div className="container my-2">
            <h2>Your Text Summary</h2>
            <p>{words.length} words, and {text.length} characters</p>
            <p>{0.008 * words.length} Minutes Read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
            
             
        </>

    )
}
