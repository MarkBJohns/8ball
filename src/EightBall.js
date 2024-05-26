import React, { useState } from "react";
import "./EightBall.css"

const EightBall = () => {
    
    const [message, setMessage] = useState("Think of a Question");
    
    const growText = (e) => {
        e.target.style.fontSize = "4em";
    }
    
    const revert = (e) => {
        e.target.style.fontSize = "3em";
    }
    
    const askQuestion = (e) => {
        const answer = Math.floor(Math.random() * 12);
        
        e.target.style.backgroundColor = wisdom[answer].color;
        setMessage(wisdom[answer].msg);
    }
    
    const wisdom = [
        { msg: "It is certain", color: "green" },
        { msg: "Without a doubt", color: "green" },
        { msg: "Most likely", color: "green" },
        { msg: "Outlook good", color: "green" },
        
        { msg: "Signs point to yes", color: "goldenrod" },
        { msg: "Ask again later", color: "goldenrod" },
        { msg: "Better not tell you now", color: "goldenrod" },
        { msg: "Concentrate and ask again", color: "goldenrod" },
        
        { msg: "Don't count on it", color: "red" },
        { msg: "My reply is no", color: "red" },
        { msg: "My sources say no", color: "red" },
        { msg: "Outlook not so good", color: "red" }
    ];
    
    
    
    return (
        <div
            className="EightBall" onMouseOver={growText} onMouseLeave={revert}
            onClick={askQuestion}
        >
            {message}
        </div>
    )
}

export default EightBall;