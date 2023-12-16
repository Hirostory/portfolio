import ATSResume from "../assets/ATSResume.jpg"

const Resume = () => {
    return (
        <div id="resume" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <img src="https://see.fontimg.com/api/renderfont4/d9z4R/eyJyIjoiZnMiLCJoIjo0MDAsInciOjIwMDAsImZzIjoyMDAsImZnYyI6IiMzNjRCNTAiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/UmVzdW1l/hello-good-old-style-regular.png" className="title-resume-shadow" />
            <img src="https://see.fontimg.com/api/renderfont4/d9z4R/eyJyIjoiZnMiLCJoIjo0MDAsInciOjIwMDAsImZzIjoyMDAsImZnYyI6IiMzNjRCNTAiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/UmVzdW1l/hello-good-old-style-regular.png" className="title-resume" />
            <div className="resume-container">
                <div className="resume-background">

                </div>
                <a className="real-resume" href="https://docs.google.com/document/d/1bTRq0h5eB_r8TrNUREtnbUvlH_nryJ7I2xrU5RWV7Y0/edit?usp=sharing" >
                    <img src={ATSResume} className="inside-resume"/>
                </a>
            </div>
        </div>
    )
}

export default Resume