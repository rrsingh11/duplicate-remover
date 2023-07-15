import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import Footer from '../../components/footer/Footer';

function Home({ input, setInput }) {

    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        if(!input) {
            window.alert("Please enter a non-empty string")
            return
        } 
        if(input.indexOf(' ') >= 0) {
            window.alert("Please enter a string without spaces")
            return 
        }
        navigate("/result");
    }

    function handleChange(event) {
        setInput(event.target.value);
    }
  return (
    <div className='home'>
        <h1 className='home--heading'> Duplicate Remover 🤖</h1>
        <form onSubmit={handleSubmit}>
            <input 
                className='home--input'
                type="text" 
                onChange={handleChange}
                value={input}
                placeholder="Enter your string"
                />
            <button className='home--submit'>Submit</button>
        </form> 
        <Footer/>
    </div>
  )
}

export default Home