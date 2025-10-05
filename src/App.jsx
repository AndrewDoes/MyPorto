import { useRef } from 'react'
import './App.css'
import Homesection from './components/HomeSection'
import AboutPage from './pages/AboutPage';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Navbar from './components/Navbar.jsx';
import AboutMeCard from './components/AboutMeCard.jsx';
import AboutMeEducation from './components/AboutMeEducation.jsx';
import Contact from './components/Contact.jsx';



export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRef = {home: homeRef,about: aboutRef,skills: skillsRef,project: projectRef,contact: contactRef};

  const handleScrollSection = (section) => {
    if (sectionRef[section].current) {
      sectionRef[section].current?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <div className='w-full min-h-screen  overflow-x-hidden fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-gray-800 to-black'>
        <Navbar onNavigate={handleScrollSection}/>
        {/* <div className="h-25"></div> */}
        <div ref={homeRef}><Homesection onNavigate={handleScrollSection}/></div>
        <div ref={aboutRef} className='py-20'><AboutMeCard onNavigate={handleScrollSection}/></div>
        <div className=""><AboutMeEducation/></div>
        <div ref={skillsRef}><Skills/> </div>
        <div ref={projectRef}><Projects/></div>
        <div ref={contactRef}><Contact/></div>
      </div>
    </>
  )
}
