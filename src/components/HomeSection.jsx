import Andrew from "../assets/Andrew2.jpeg"
import { TypeAnimation } from "react-type-animation"
import Github from "../assets/Github.png"
import LinkedIn from "../assets/linkedin.png"
import CV from "../assets/CV.png"

const buttons = [
  {
    name: "Contact Me",
    link: "contact",
  },
  {
    name: "See my projects",
    link: "project",
  }
]

const pageChangeButton = [
  {
    icon: Github,
    name: "GitHub",
    link: "https://github.com/AndrewDoes"
  },
  {
    icon: LinkedIn,
    name: "linkedIn",
    link: "https://www.linkedin.com/in/nicholas-andrew-sutiono-258160299"
  },
  {
    icon: CV,
    name: "See my CV",
    link: "https://drive.google.com/file/d/1KbSd9fB5JS7SCePoAyshrxYRMftGAp8q/view?usp=drive_link"
  }
]


export default function Homesection({ onNavigate }) {
  return (
    <div className="flex w-screen h-screen">
      <div className="h-screen flex flex-col justify-evenly md:justify-center px-20 py-20 md:py-0 space-y-5 font-mono">
        <div className="h-30">
          <p className="text-lg md:text-3xl font-extralight text-white">Hello, I'm</p>
          <TypeAnimation
            sequence={[
              'Nicholas Andrew Sutiono',
              2000,
              'A Software Engineer',
              2000,
              'A Web Programmer',
              2000,
              'A Lifelong Learner',
              2000,
            ]}
            wrapper="span"
            speed={20}
            className="text-4xl md:text-5xl font-extrabold text-indigo-400"
            repeat={Infinity}
          />
        </div>

        <div className="flex flex-col  md:grid gap-5 mt-5">
          <div className="flex md:flex-col md:grid-cols-3 md:grid gap-5 mt-5">
            {pageChangeButton.map(button => (
              <button
                key={button.name}
                type="button"
                className="p-4 rounded-full w-fit md:px-8 md:py-4 gap-5 border-1 flex border-white text-gray-950 md:rounded-xl bg-white text-lg md:w-60 transition-all duration-200 hover:bg-indigo-400 hover:text-white"
                onClick={() => window.location.href = button.link}
              >
                <img src={button.icon} alt={button.name} className="w-8 h-8 md:mr-2 inline rounded-full overflow-hidden object-contain" />
                <p className="hidden w-0 md:inline md:w-fit">{button.name}</p>
              </button>
            ))}
          </div>
          <div className="flex flex-col space-y-5 mt-5">
            {buttons.map(button => (
              <button
                key={button.name}
                type="button"
                className="px-8 py-4 border-1 border-white text-white rounded-xl bg-transparent text-lg w-60 transition-all duration-200 hover:bg-white hover:text-gray-950"
                onClick={() => onNavigate(button.link)}
              >
                {button.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden flex-1 md:flex justify-center items-center px-20">
        <img src={Andrew} alt="Me" className="h-96 object-cover rounded-4xl border-3 border-gray-100" />
      </div>
    </div>

  )
}