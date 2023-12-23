
import React from "react";
import {
    BrowserRouter as Router,
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
                    <Route path="/vanshika-sriram" exact element={<Home />} /> 
                    {/* <Route path="/about" exact element={<About />} /> */}
                    <Route path="/vanshika-sriram/projects" exact element={<Projects />} />
                        <Route path="/vanshika-sriram/:id" exact element={<ResearchPages />} />
                        <Route path="/vanshika-sriram/:id" exact element={<ProjectPages />} />
                </Routes>
            </Router>
        </div>
    );
}
 
export default App;