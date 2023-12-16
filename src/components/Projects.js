import Laptop from "../assets/Laptop.png"

const Projects = () => {
    return (
        <div id="projects" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
            <div className="projects-container" >
                <div className="Projects-box">
                    <div className="Projects-detail" >
                        <img className="macbook" src={Laptop} />
                        <h4>Pokezodiac</h4>
                    </div>
                    <div className="Projects-detail" >
                        <img className="macbook" src={Laptop} />
                        <h4>Love & Hate</h4>
                    </div>
                    <div className="Projects-detail" >
                        <img className="macbook" src={Laptop} />
                        <h4>StyleMate</h4>
                    </div>
                    <div className="Projects-detail" >
                        <img className="macbook" src={Laptop} />
                        <h4>Suggesstify</h4>
                    </div>
                    <div className="Projects-detail" >
                        <img className="macbook" src={Laptop} />
                        <h4>Street Wear Watcher</h4>
                    </div>
                </div>
            </div>
            <h1>Projects</h1>
        </div>
    )
}

export default Projects