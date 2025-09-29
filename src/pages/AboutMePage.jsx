import { useRef } from "react";
import AboutMeCard from "../components/AboutMe/AboutMeCard";
import AboutMeEducation from "../components/AboutMe/AboutMeEducation";

export default function AboutMePage() {
  const educationSectionRef = useRef(null);

  const handleScrollDown = () => {
    if (educationSectionRef.current) {
      educationSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="h-full flex flex-col items-center justify-center p-0">
      <AboutMeCard />
      <h2 className="text-2xl font-bold text-white mt-20 mb-20 opacity-50 cursor-pointer" onClick={handleScrollDown}>v See more about me v</h2>
      <div ref={educationSectionRef}>
        <AboutMeEducation />
      </div>
    </div>
  )
}