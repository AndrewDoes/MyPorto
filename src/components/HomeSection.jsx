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
      <div className="h-screen w-screen flex flex-col justify-evenly md:justify-center px-20 py-20 md:py-0 space-y-5 font-mono">
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

        <div className="flex flex-col  mt-5">
          <div className="flex gap-5 mt-5">
            {pageChangeButton.map(button => (
              <button
                key={button.name}
                type="button"
                className="p-4 rounded-full w-fit lg:px-8 lg:py-4 gap-5 border-1 flex border-white text-gray-950 lg:rounded-xl bg-white text-lg lg:w-60 transition-all duration-200 hover:bg-indigo-400 hover:text-white"
                onClick={() => window.location.href = button.link}
              >
                <img src={button.icon} alt={button.name} className="w-8 h-8 lg:mr-2 inline rounded-full overflow-hidden object-contain" />
                <p className="hidden w-0 lg:inline lg:w-fit">{button.name}</p>
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-5 items-center md:flex-row md:justify-start md:space-x-5 mt-5">
            {buttons.map(button => (
              <button
                key={button.name}
                type="button"
                className="px-8 py-4 border-1 m-0 border-white text-white rounded-xl bg-transparent text-lg w-60 transition-all duration-200 hover:bg-white hover:text-gray-950"
                onClick={() => onNavigate(button.link)}
              >
                {button.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden xl:h-screen xl:w-screen xl:flex justify-center items-center">
        <img className="w-60 h-60 md:w-96 md:h-96 rounded-full object-cover" src={Andrew} alt="Profile Picture" />
      </div>
    </div>

  )
}