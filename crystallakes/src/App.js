import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Experiences from "./components/Experiences";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer   from "./components/Footer";


function App() {
    return (
        <div>
            <Navbar />
            <Landing />
            <Experiences />
            <Services />
            <Contact />
            <Footer />
        </div>
    )
}

export default App