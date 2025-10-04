import { useRef } from "react";
import AboutMeEducation from "../components/AboutMeEducation";
import AboutMeCard from "../components/AboutMeCard";

export default function AboutPage({onNavigate}) {
  const educationSectionRef = useRef(null);

  return (
    <div className="h-full flex flex-col items-center justify-center p-30">
      <AboutMeCard onNavigate={onNavigate}/>
    </div>
  )
}