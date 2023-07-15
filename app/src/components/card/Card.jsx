import React from 'react'
import { MdDelete }  from 'react-icons/md'
import "./Card.css"



function Card({ character, isInput, setIndex, id, setCharacter, setResult, colors }) {

    
    function handleClick(event) {
        setIndex(id)
        setCharacter(character)
    }
    // console.log(character.charCodeAt(0) - 33)
    return (
        <div 
            className='card' 
            style={{backgroundColor: colors[character.charCodeAt(0) - 33]}}
        >
            {isInput ?  <button onClick={handleClick}> <MdDelete /> </button> : null}
            <p>{character}</p>
        </div>
    )
}

export default Card