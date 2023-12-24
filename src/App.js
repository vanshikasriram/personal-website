
import React from "react";
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";

import ProjectPages from "./pages/ProjectPages";
import ResearchPages from "./pages/ResearchPages";
 
function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />} /> 
                    {/* <Route path="/about" exact element={<About />} /> */}
                    <Route path="/projects" exact element={<Projects />} />
                        <Route path="/research/:id" exact element={<ResearchPages />} />
                        <Route path="/project/:id" exact element={<ProjectPages />} />
                </Routes>
            </Router>
        </div>
    );
}
 
export default App;