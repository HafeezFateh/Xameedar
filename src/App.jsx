import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Plots from './Plots';


function App() {
    return(
        
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />}/>
                <Route path="/plots" element={<Plots />}/>
            </Routes>
        </Router>

 )
}

export default App;