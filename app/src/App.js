import React, { useState } from 'react';
import './App.css';
import Home from './pages/home/Home';
import Result from './pages/result/Result'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path='/' element={<Home input={input} setInput={setInput}/>}/>
          <Route  path='/result' element={<Result input={input} setInput={setInput}/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
