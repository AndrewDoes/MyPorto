import { useRef } from "react";
import AboutMeEducation from "../components/AboutMeEducation";
import AboutMeCard from "../components/AboutMeCard";

export default function AboutPage({onNavigate}) {
  const educationSectionRef = useRef(null);

  const handleScrollDown = () => {
    if (educationSectionRef.current) {
      educationSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="h-full flex flex-col items-center justify-center p-0">
      <AboutMeCard onNavigate={onNavigate}/>
      <div className="mt-40" ref={educationSectionRef}>
        <AboutMeEducation />
      </div>
    </div>
  )
}