import { Link } from "react-scroll"

const Home = () => {
    return (
        <div id='home' style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <div className/>
          
          <img 
          data-aos='fade-right'
          data-aos-duration='500'
          data-aos-delay='200'
          data-aos-once='true' 
          src="https://see.fontimg.com/api/renderfont4/d9z4R/eyJyIjoiZnMiLCJoIjozMjYsInciOjIwMDAsImZzIjoxNjMsImZnYyI6IiMyOTNCMzciLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/SElSTw/hello-good-old-style-regular.png" className="main-main-logo" />
           <p 
           data-aos='fade-left'
           data-aos-duration='500'
           data-aos-delay='200'
           data-aos-once='true' 
           className="tagline">
          Crafting Code, Creating Tomorrow
          </p>
          <img 
          data-aos='fade-in'
          data-aos-duration='500'
          data-aos-delay='200'
          data-aos-once='true' 
          style={{opacity: '.3'}}
          src="https://see.fontimg.com/api/renderfont4/Yqa/eyJyIjoiZnMiLCJoIjo0MDAsInciOjIwMDAsImZzIjoyMDAsImZnYyI6IiMyOTNCMzciLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/Tw/4yeogarden.png" className="tree-main"/>
         
        </div>
    )
}

export default Home