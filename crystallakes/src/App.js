import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer   from "./components/Footer";
import {BrowserRouter as Router} from "react-router-dom"


function App() {
    return (
        <Router>
            <Navbar />
            <Landing />
            <Experience />
            <Services />
            <Contact />
            <Footer />
        </Router>
    )
}

export default App