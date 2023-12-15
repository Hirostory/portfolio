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
        height: '3.5rem',
        width: 'calc(100% - 2rem)',
        position: 'fixed',
        top: '0',
        left: '4rem',
        zIndex: '10',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2rem',
        fontWeight: '500',
        margin: '1rem 0',
        transition: 'ease-in-out 200ms',
      };
    return (
        <div>
                <ul className='mainnav'>
                    <li>
                    <Link to={'home'} duration={200} smooth={true} style={{ cursor: "pointer",transition: 'all 0.2s ease-in-out' }}>
                        <h3>Home</h3>
                    </Link>
                    </li>
                    <li>
                    <Link to={'about'} duration={200} smooth={true} style={{ cursor: "pointer",transition: 'all 0.2s ease-in-out' }}>
                        <h3>About</h3>
                    </Link>
                    </li>
                    <li>
                    <Link to={'projects'} duration={200} smooth={true} style={{ cursor: "pointer",transition: 'all 0.2s ease-in-out' }}>
                        <h3>Projects</h3>
                    </Link>
                    </li>
                    <li>
                    <Link to={'resume'} duration={200} smooth={true} style={{ cursor: "pointer",transition: 'all 0.2s ease-in-out' }}>
                        <h3>Resume</h3>
                    </Link>
                    </li>
                    <li>
                    <Link to={'contact'} duration={200} smooth={true} style={{ cursor: "pointer",transition: 'all 0.2s ease-in-out' }}>
                        <h3>Contact</h3>
                    </Link>
                    </li>
                </ul>
        </div> 
    )
    // return (
    //     <nav style={navStyle}>
    //     {isDesktop && (
    //       <>
    //         <Link to='home' duration={0} smooth={true} style={{ cursor: "pointer" }}>
    //             <div>
    //                 <h1>hello</h1>
    //             </div>
    //         </Link>
    //         <Link to='about' duration={0} smooth={true} style={{ cursor: "pointer" }}>
    //             <div>
    //                 <h1>hello</h1>
    //             </div>
    //         </Link>
    //       </>
    //     )}
  
    //     {!isDesktop && (
    //       <>
    //       <Link to='home' duration={0} smooth={true} style={{ cursor: "pointer" }}>
    //         <div className='flex items-center justify-center'>
    //           <div className='flex flex-col justify-center'>
    //             <h1 className='font-black text-primary-green'>Neurosynth</h1>
    //             <h1 className='font-normal'>Dynamics</h1>
    //           </div>
    //         </div>
    //       </Link>
    //       <div className='flex items-center gap-4 text-sm'>
    //         <Link
    //           to='about'
    //           duration={0}
    //           smooth={true}
    //           className='cursor-pointer text-base hover:text-primary-green transition duration-200'
    //         >
    //           Learn More
    //         </Link>
    //         <Link to='contact' duration={0} smooth={true} className=''>
    //           <button className='bg-primary-green text-white hover:bg-green-700 px-3.5 py-2.5 transition duration-200'>
    //             Contact Us
    //           </button>
    //         </Link>
    //       </div>
    //     </>
    //     )}
    //     { !isDesktop && (
    //         <div className='flex items-center justify-between'>
    //         <Link
    //           to='home'
    //           smooth={true}
    //           duration={0}
    //           style={{ cursor: "pointer" }}
    //           onClick={() => setToggled(false)}
    //         >
    //           <div className='flex items-center justify-center'>
    //             <div className='flex flex-col justify-center'>
    //               <h1 className='font-black text-primary-green'>Neurosynth</h1>
    //               <h1 className='font-normal'>Dynamics</h1>
    //             </div>
    //           </div>
    //         </Link>
    //         <div
    //           onClick={() => setToggled((prevToggled) => !prevToggled)}
    //           className='space-y-1.5 cursor-pointer'
    //         >
    //           <motion.span
    //             animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
    //             className='block h-0.5 w-8 bg-black'
    //           ></motion.span>
    //           <motion.span
    //             animate={{ scale: toggled ? 0 : 1 }}
    //             className='block h-0.5 w-8 bg-black'
    //           ></motion.span>
    //           <motion.span
    //             animate={{
    //               rotateZ: toggled ? -45 : 0,
    //               y: toggled ? -8 : 0,
    //             }}
    //             className='block h-0.5 w-8 bg-black'
    //           ></motion.span>
    //         </div>
    //       </div>
    //     )}
    //     <AnimatePresence>
    //     {toggled && !isDesktop && (
    //     <motion.div
    //         variants={navMotion}
    //         initial='hidden'
    //         animate='visible'
    //         exit='exit'
    //         className='fixed top-[80px] left-4 w-[calc(100%-2rem)] h-screen flex items-center justify-center'
    //     >
    //         <div className='flex flex-col items-center justify-center gap-12 h-full'>
    //         <motion.div variants={navItemMotion}>
    //             <Link
    //             to='about'
    //             smooth={true}
    //             style={{ cursor: "pointer" }}
    //             onClick={() => setToggled(false)}
    //             >
    //             Learn More
    //             </Link>
    //         </motion.div>
    //         <motion.div variants={navItemMotion}>
    //             <Link to='contact' smooth={true} onClick={() => setToggled(false)}>
    //             <button className='bg-primary-green text-white hover:bg-green-700 px-3.5 py-2.5 transition duration-200'>
    //                 Join Trial
    //             </button>
    //             </Link>
    //         </motion.div>
    //         </div>
    //     </motion.div>
    //     )}
    // </AnimatePresence>
    //   </nav>
    // )
}

export default NavBar


