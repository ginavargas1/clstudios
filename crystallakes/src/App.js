import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer   from "./components/Footer";


function App() {
    return (
        <div>
            <Navbar />
            <Landing />
            <Experience />
            <Services />
            <Contact />
            <Footer />
        </div>
    )
}

export default App