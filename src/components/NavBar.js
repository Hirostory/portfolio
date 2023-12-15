import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-scroll"
import { useMediaQuery } from "../utils/useMediaQuery"
import { useEffect, useState } from "react"

// framer variants
// nav container variant
const navMotion = {
    // initial state - hidden
    hidden: {
      y: '100%',
      opacity: 0,
      transitions: {
        duration: 0.5,
        staggerChildren: 0.15,
        ease: 'easeInOut',
      },
    },
    // active state - visible
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.15,
        ease: 'easeInOut',
      },
    },
    // exit state - hidden
    exit: {
      y: '100%',
      opacity: 0,
      transition: {
        duration: 0.5,
        when: 'afterChildren',
        staggerChildren: 0.15,
        staggerDirection: -1,
        ease: 'easeInOut',
      },
    },
  };
  
  // nav item variant
  const navItemMotion = {
    // initial state - hidden
    hidden: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    // active state - visible
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    // exit state - exit
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

const NavBar = () => {
    const isDesktop = useMediaQuery("(min-width: 1024px")
    const [ toggled, setToggled ] = useState(false)
    const [scrollBackground, setScrollBackground] = useState(false)

    const changeBackground = () => {
        if (window.scrollY > 50) {
            setScrollBackground(true)
        } else {
            setScrollBackground(false)
        }
    }

    window.addEventListener("scroll", changeBackground)

    useEffect(() => {
        if (toggled) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [toggled])

    const navStyle = {
        background: scrollBackground ? 'white' : 'white',
        height: '7rem',
        width: 'calc(100%)',
        position: 'fixed',
        top: '0',
        zIndex: '10',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // padding: '2rem',
        fontWeight: '500',
        transition: 'ease-in-out 200ms',
        // outline: '1px solid black'
      };
    // return (
    //     <div>
    //             <ul className='mainnav'>
    //                 <li>
    //                 <Link to={'home'} duration={200} smooth={true} style={{ cursor: "pointer",transition: 'all 0.2s ease-in-out' }}>
    //                     <h3>Home</h3>
    //                 </Link>
    //                 </li>
    //                 <li>
    //                 <Link to={'about'} duration={200} smooth={true} style={{ cursor: "pointer",transition: 'all 0.2s ease-in-out' }}>
    //                     <h3>About</h3>
    //                 </Link>
    //                 </li>
    //                 <li>
    //                 <Link to={'projects'} duration={200} smooth={true} style={{ cursor: "pointer",transition: 'all 0.2s ease-in-out' }}>
    //                     <h3>Projects</h3>
    //                 </Link>
    //                 </li>
    //                 <li>
    //                 <Link to={'resume'} duration={200} smooth={true} style={{ cursor: "pointer",transition: 'all 0.2s ease-in-out' }}>
    //                     <h3>Resume</h3>
    //                 </Link>
    //                 </li>
    //                 <li>
    //                 <Link to={'contact'} duration={200} smooth={true} style={{ cursor: "pointer",transition: 'all 0.2s ease-in-out' }}>
    //                     <h3>Contact</h3>
    //                 </Link>
    //                 </li>
    //             </ul>
    //     </div> 
    // )
    return (
        <nav style={navStyle}>
        {/* {isDesktop && (
            <>
                <Link to='home' duration={0} smooth={true} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <h1 style={{ fontWeight: 'bold', color: 'green' }}>Hiroaki</h1>
                    <h1 style={{ fontWeight: 'normal' }}>Sotooka</h1>
                    </div>
                </div>
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '14px' }}>
                <Link
                    to='about'
                    duration={0}
                    smooth={true}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    Learn More Love
                </Link>
                <Link
                    to='projects'
                    duration={0}
                    smooth={true}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <h3>projects</h3>
                </Link>
                <Link to='contact' duration={0} smooth={true} style={{ textDecoration: 'none' }}>
                    <button
                    style={{
                        backgroundColor: 'green',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                        transition: 'background-color 0.3s, box-shadow 0.3s, color 0.3s',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                    >
                    Contact Us
                    </button>
                </Link>
                </div>
            </>
            )} */}

            {/* navbar for tablet and below */}
            {/* {!isDesktop && ( */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'column', height: '100%', width: '100%', flexDirection: 'column' }}>
                <Link
                to='home'
                smooth={true}
                duration={0}
                style={{ textDecoration: 'none', color: 'inherit' }}
                onClick={() => setToggled(false)}
                >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <div className="block"> <img  src="https://see.fontimg.com/api/renderfont4/6jRq/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiI0Y2Q0E4RSIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/OQ/nymphette.png"/> </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <img style={{ fontWeight: 'bold', height: '3rem', marginTop:'1rem', }} src="https://see.fontimg.com/api/renderfont4/d9z4R/eyJyIjoiZnMiLCJoIjoxNTYsInciOjIwMDAsImZzIjo3OCwiZmdjIjoiIzM2NEI1MCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/SGlyb2FraSBTb3Rvb2th/hello-good-old-style-regular.png"  ></img>
                    {/* <h1 style={{ fontWeight: 'normal' }}>Sotooka</h1> */}
                    </div>
                    <div className="thin-line"></div>
                    <div className="block-2"> <img  src="https://see.fontimg.com/api/renderfont4/6jRq/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiI0Y2Q0E4RSIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/OQ/nymphette.png"/> </div>
                </div>
                </Link>
                <div
                onClick={() => setToggled((prevToggled) => !prevToggled)}
                style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer', gap: '5px' }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', margin: '.5rem' }} >
                    <img src="https://see.fontimg.com/api/renderfont4/L36OZ/eyJyIjoiZnMiLCJoIjoxNTYsInciOjIwMDAsImZzIjo3OCwiZmdjIjoiIzM2NEI1MCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/eQ/font-frame-pro.png" style={{  width: '7rem', transform: toggled ? 'scale(0)' : 'scale(1)', transition: 'transform 0.3s' }} ></img>
                    <img src="https://see.fontimg.com/api/renderfont4/d9z4R/eyJyIjoiZnMiLCJoIjoxNTYsInciOjIwMDAsImZzIjo3OCwiZmdjIjoiIzM2NEI1MCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/TWVudQ/hello-good-old-style-regular.png" style={{  position: 'absolute', width: '3rem', transform: toggled ? 'scale(0)' : 'scale(1)', transition: 'transform 0.3s' }} ></img>
                    </div>
                {/* <img src="https://see.fontimg.com/api/renderfont4/r7rL/eyJyIjoiZnMiLCJoIjoxODYsInciOjIwMDAsImZzIjo5MywiZmdjIjoiIzAzMDQwNCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/Yw/rta-ermine.png" style={{  width: '30px', transform: toggled ? 'scale(0)' : 'scale(1)', transition: 'transform 0.3s' }} ></img> */}
                {/* <span style={{ display: 'block', height: '2px', width: '24px', backgroundColor: 'black', transform: toggled ? 'scale(0)' : 'scale(1)', transition: 'transform 0.3s' }}></span>
                <span style={{ display: 'block', height: '2px', width: '24px', backgroundColor: 'black', transform: toggled ? 'scale(0)' : 'scale(1)', transition: 'transform 0.3s' }}></span>
                <span style={{ display: 'block', height: '2px', width: '24px', backgroundColor: 'black', transform: toggled ? 'scale(0)' : 'scale(1)', transition: 'transform 0.3s' }}></span> */}
                </div>
            </div>
            {/* )} */}

            {/* hamburger menu */}
            <AnimatePresence>
            {toggled && (
                <motion.div
                variants={navMotion}
                initial='hidden'
                animate='visible'
                exit='exit'
                style={{
                    position: 'fixed',
                    top: '120px',
                    left: '12px',
                    width: 'calc(100% - 2rem)',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: '10',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
                    backgroundColor: 'white',
                    outline: '1px solid black',
                }}
                >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '-8rem', gap: "3rem", height: '100%' }}>
                    <Link
                    to='about'
                    smooth={true}
                    style={{ textDecoration: 'none', color: 'inherit', fontSize: '24px' }}
                    onClick={() => setToggled(false)}
                    >
                    <h1>About</h1>
                    </Link>
                    <Link
                    to="projects"
                    smooth={true}
                    style={{ textDecoration: 'none', color: 'inherit', fontSize: '24px' }}
                    onClick={() => setToggled(false)}
                    >
                    <h1>Projects</h1>
                    </Link>
                    <Link
                    to="resume"
                    smooth={true}
                    style={{ textDecoration: 'none', color: 'inherit', fontSize: '24px' }}
                    onClick={() => setToggled(false)}
                    >
                    <h1>Resume</h1>
                    </Link>
                    <Link
                    to="contact"
                    smooth={true}
                    style={{ textDecoration: 'none', color: 'inherit', fontSize: '24px' }}
                    onClick={() => setToggled(false)}
                    >
                    <h1>Contact</h1>
                    </Link>
                </div>
                </motion.div>
            )}
            </AnimatePresence>

      </nav>
    )
}

export default NavBar


