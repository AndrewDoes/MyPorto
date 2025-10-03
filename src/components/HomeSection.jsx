import Andrew from "../assets/Andrew2.jpeg"

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
    name: "See my CV",
    link: "https://drive.google.com/file/d/1KbSd9fB5JS7SCePoAyshrxYRMftGAp8q/view?usp=drive_link"
  }
]


export default function Homesection({ onNavigate }) {
  return (
    <div className="flex w-screen h-screen">
      <div className="h-screen flex flex-col justify-center px-20 py-0 space-y-5 font-mono">
        <p className="text-3xl font-extralight text-white">Hello, I'm</p>
        <p className="text-6xl font-extrabold text-indigo-400 text-shadow-gray-950 text-shadow-lg">Nicholas Andrew Sutiono</p>
        <p className="text-lg w-200 text-white">Software Engineer Major and Analyst Enthusiast</p>
        <div className="grid-cols-3 grid gap-5 mt-5">
          {buttons.map(button => (
            <button
              key={button.name}
              type="button"
              className="px-8 py-4 border-2 border-white text-white rounded-xl bg-transparent text-lg w-60 transition-all duration-200 hover:bg-white hover:text-gray-950"
              onClick={() => onNavigate(button.link)}
            >
              {button.name}
            </button>
          ))}
          {pageChangeButton.map(button => (
            <button
              key={button.name}
              type="button"
              className="px-5 py-2 border-2 border-white text-white rounded-xl bg-transparent text-lg w-60 transition-all duration-200 hover:bg-white hover:text-gray-950"
              onClick={() => window.location.href = button.link}
            >
              {button.name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center px-20">
        <img src={Andrew} alt="Me" className="h-96 object-cover rounded-full border-5 border-gray-100" />
      </div>
    </div>

  )
}