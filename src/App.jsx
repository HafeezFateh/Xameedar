import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Plots from './Plots';
import SellPlot from './SellPlot'


function App() {
    return(
        
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />}/>
                <Route path="/plots" element={<Plots />}/>
                <Route path="/sellplot" element={<SellPlot />}/>
            </Routes>
        </Router>

 )
}

export default App;