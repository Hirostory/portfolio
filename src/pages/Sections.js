import About from "../components/About"
import Contact from "../components/Contact"
import Home from "../components/Home"
import Projects from "../components/Projects"
import Resume from "../components/Resume"


const Sections = () => {
    return (
        <div>
            <Home />
            <About />
            <Projects />
            <Resume />
            <Contact />
        </div>
    )
}

export default Sections