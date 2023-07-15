import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import "./Result.css"
import Alert from "@mui/material/Alert"
import Confetti from "react-confetti"
import randomColors from "../../colorGenerator";
import Footer from "../../components/footer/Footer";

export default function Result({ input, setInput }) {
    const [colors, setColors] = React.useState(randomColors())
    const [result, setResult] = React.useState("");
    const [index , setIndex] = React.useState();
    const [character, setCharacter] = React.useState();
    // const [isDisabled, setIsDisabled] = React.useState(false)
    let [orignalInput] = React.useState(input)

    function haveDuplicates(str) {
        let obj = {}
        for (let i = 0; i < str.length; i++) {
            if(obj[str[i]]) {
                return true
            }
            obj[str[i]] = 1
        }
        return false
    }
    function removeDuplicates(str, key, ind) {
        let result = ""
        for (let i = 0; i < str.length; i++) {
            if(str[i] !== key || i === ind) {
                result += str[i]
            }
        }
        return result
    }
    React.useEffect(() => {
        setResult(removeDuplicates(input, character, index ))
    },[input, index, character]);

    function handleClick(event) {
        setInput("");
        setColors(randomColors())    }

    function furtherDuplicate(event) {
        event.preventDefault();
        if(haveDuplicates(result)) {
            setInput(result)
        } else {
            alert("No duplicates found")
        }
    }

    const inputElement = input.split("").map((ch,i) => {
        return <Card 
                key={i}
                character={ch} 
                isInput={true}
                id={i}
                setIndex={setIndex}
                setCharacter={setCharacter}
                colors={colors}
            />
    })
    const resultElement = result.split("").map((ch, i) => {
        return <Card 
                key={i}
                character={ch} 
                isInput={false}
                colors={colors} 
            />
    })
    return (
        <div className="result--page">
            {!haveDuplicates(result) && input ? <Alert className="alert"> <p>Congratulations🎉 All duplicates removed.🥳</p></Alert> : null}
            {!haveDuplicates(result) && input ?  
                <Confetti 
                    width={window.innerWidth} 
                    height={window.innerHeight}
                    numberOfPieces= {500} 
                    recycle={false}                      
                />
            : null}
            <h1>Duplicate Remover 🤖</h1>
            <div className="card--section">
                <div className="card--list"> {inputElement} </div>
                <div className="card--list"> {resultElement} </div>
            </div>
            

            <div className="buttons">
                {input ? <button className='next-button' onClick={furtherDuplicate}>Further Duplicate</button> : 
                    alert("No input found")
                }    
                <Link to="/"> <button className='back-button' onClick={handleClick}>{input ? "Back" : "Input String"}</button> </Link>
            </div>
            
            { input ? <div className="result--section">
                <p><span>Original Input:</span> {orignalInput}</p>
                <p><span>Result:</span> {result}</p>
            </div> : null}
            <Footer />
        </div>
  );
}