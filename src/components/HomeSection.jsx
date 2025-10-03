import Andrew from "../assets/Andrew2.jpeg"

export default function Homesection() {
  return (
    <div className="flex w-screen h-screen">
      <div className="h-screen flex flex-col justify-center px-20 py-0 space-y-5 font-mono">
        <p className="text-3xl font-extralight text-white">Hello, I'm Nicholas Andrew Sutiono</p>
        <p className="text-7xl font-extrabold text-indigo-400 text-shadow-gray-950 text-shadow-lg">Software Engineer</p>
        <div className="flex justify-start space-x-5 mt-5">
          <button className="px-8 py-4 border-2 border-white rounded-xl text-white bg-transparent text-md w-50 transition-all duration-200 hover:bg-white hover:text-gray-800">Contact Me</button>
          <button className="px-8 py-4 border-2 border-white rounded-xl text-white bg-transparent text-md w-50 transition-all duration-200 hover:bg-white hover:text-gray-800">See my projects</button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={Andrew} alt="Me" className="h-100  rounded-full"/>
      </div>
    </div>

  )
}