import Github from "../assets/Github.png"
import Linkedin from "../assets/Linkedin.png"

const Contact = () => {
    return (
        <div id="contact" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
           
            <img src="https://see.fontimg.com/api/renderfont4/d9z4R/eyJyIjoiZnMiLCJoIjoyNzIsInciOjIwMDAsImZzIjoxMzYsImZnYyI6IiMyOTNCMzciLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/Q29udGFjdA/hello-good-old-style-regular.png" className="title-resume-shadow" />
            <img src="https://see.fontimg.com/api/renderfont4/d9z4R/eyJyIjoiZnMiLCJoIjoyNzIsInciOjIwMDAsImZzIjoxMzYsImZnYyI6IiMyOTNCMzciLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/Q29udGFjdA/hello-good-old-style-regular.png" className="title-resume"  />

            <div className="email-container">
                <img src="https://see.fontimg.com/api/renderfont4/d9z4R/eyJyIjoiZnMiLCJoIjoxMzYsInciOjIwMDAsImZzIjo2OCwiZmdjIjoiIzI5M0IzNyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/aGlyb2FraXNvdG9va2FAZ21haWwuY29t/hello-good-old-style-regular.png"
                className="email-add"
                />
            </div>
            <div className="git-link-container">
                    <a href="https://github.com/Hirostory"  >
                        <img className="git-link-image" src={Github} />
                    </a>
                    <a href="www.linkedin.com/in/hiroaki-sotooka" > 
                        <img  className="git-link-image" src={Linkedin} />
                    </a>
                </div>
        </div>
    )
}

export default Contact