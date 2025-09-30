import { useRef } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Homepage from './pages/Homepage'
import AboutPage from './pages/AboutPage';



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
      <div className='w-full min-h-screen  overflow-x-hidden'>
        <Navbar onNavigate={handleScrollSection}/>
        <div className="h-25"></div>
        <div ref={homeRef}><Homepage/></div>
        <div ref={aboutRef}><AboutPage/></div>
        <div ref={skillsRef}>Skills</div>
        <div ref={projectRef}>Project</div>
        <div ref={contactRef}>Contact</div>
      </div>
    </>
  )
}
