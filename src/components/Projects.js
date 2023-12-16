import Laptop from "../assets/Laptop.png"
import LoveHate from "../assets/LoveHateWeb.png"
import Suggestify from "../assets/SuggestifyWeb.png"
import StreetWearWatcher from "../assets/StreetWearWatcher.png"
import PokeZodiac from "../assets/PokeZodiacWeb.png"
import StyleMate from "../assets/StyleMateWeb.png"

const Projects = () => {
    return (
        <div id="projects" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
            <div className="projects-container" >
                <div className="Projects-box">
                    <div className="Projects-detail" >
                        <div className="block-project" >
                            <a className="web-project-container" href="https://pokezodiac-hiro-0a6457.netlify.app/">
                                <img className="macbook" src={Laptop} />
                                <img className="web-project" src={PokeZodiac} />
                            </a>
                            <div>
                            <a href="https://github.com/Hirostory/PokeZodiac-miniProject" className="proj-name-logo"> 
                                <h4>Pokezodiac</h4>
                                <img className="git-p-logo" src="https://see.fontimg.com/api/renderfont4/z1zG/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiI0YwRUZFRiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/74CK/octicons.png" />
                            </a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="Projects-detail" >
                        <div className="block-project" >
                        <a  className="web-project-container" href="https://love-and-hate-hsotooka-project1.netlify.app/">
                                <img className="macbook" src={Laptop} />
                                <img className="web-project" src={LoveHate} />
                            </a>
                            <div>
                            <a href="https://github.com/Hirostory/Love-Hate-Project-1" className="proj-name-logo"> 
                                <h4>Love & Hate</h4>
                                <img className="git-p-logo" src="https://see.fontimg.com/api/renderfont4/z1zG/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiI0YwRUZFRiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/74CK/octicons.png" />
                            </a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="Projects-detail" >
                        <div className="block-project"> 
                            <a  className="web-project-container" href="https://evening-mountain-25797-5882822564c4.herokuapp.com/stylemate">
                                    <img className="macbook" src={Laptop} />
                                    <img className="web-project" src={StyleMate} />
                            </a>
                            <div>
                            <a href="https://github.com/Hirostory/Project2" className="proj-name-logo"> 
                                <h4>StyleMate</h4>
                                <img className="git-p-logo" src="https://see.fontimg.com/api/renderfont4/z1zG/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiI0YwRUZFRiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/74CK/octicons.png" />
                            </a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="Projects-detail" >
                        <div className="block-project" >
                            <a className="web-project-container" href="hhttps://playful-cactus-764ac1.netlify.app/public/user/6533420973543d8372588561">
                                        <img className="macbook" src={Laptop} />
                                        <img className="web-project" src={Suggestify} />
                            </a>
                            <div>
                            <a href="https://github.com/Hirostory/Suggestify-Frontend" className="proj-name-logo"> 
                                <h4>Suggestify</h4>
                                <img className="git-p-logo" src="https://see.fontimg.com/api/renderfont4/z1zG/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiI0YwRUZFRiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/74CK/octicons.png" />
                            </a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="Projects-detail" >
                        <div className="block-project" >
                            <a className="web-project-container" href="https://tiny-capybara-1ff3f6.netlify.app/post/656a7c81888fa2b1e2763732">
                                        <img className="macbook" src={Laptop} />
                                        <img className="web-project" src={StreetWearWatcher} />
                            </a>
                            <div>
                            <a href="https://github.com/Hirostory/StreetWearWatcher_frontend_capstone" className="proj-name-logo"> 
                                <h4>StretWearWatcher</h4>
                                <img className="git-p-logo" src="https://see.fontimg.com/api/renderfont4/z1zG/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiI0YwRUZFRiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/74CK/octicons.png" />
                            </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <img src="https://see.fontimg.com/api/renderfont4/d9z4R/eyJyIjoiZnMiLCJoIjo0MDAsInciOjIwMDAsImZzIjoyMDAsImZnYyI6IiMzNjRCNTAiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/UHJvamVjdHM/hello-good-old-style-regular.png" className="title-resume" />
            <img src="https://see.fontimg.com/api/renderfont4/d9z4R/eyJyIjoiZnMiLCJoIjo0MDAsInciOjIwMDAsImZzIjoyMDAsImZnYyI6IiMzNjRCNTAiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/UHJvamVjdHM/hello-good-old-style-regular.png" className="title-resume-shadow" />
        </div>
    )
}

export default Projects