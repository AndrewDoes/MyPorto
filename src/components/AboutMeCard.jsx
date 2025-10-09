import Andrew from "../assets/Andrew.jpeg"

const data = [{
    Name: "Nicholas Andrew Sutiono",
    Image: Andrew
}]

export default function AboutMeCard({ onNavigate }) {
    return (
        <>
            <div className="h-full w-screen flex flex-col p-0 mt-15 py-20">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">About Me</h1>
                <div className="flex flex-col md:flexrow w-parent justify-between md:px-30 items-center">
                    <div className="flex flex-col">
                        <img className="w-60 h-60 md:w-100 md:h-100 rounded-full" src={data[0].Image} alt="Profile Picture" />
                    </div>
                    <div className="flex flex-col space-y-10 mt-10 items-center justify-center md:mt-0 md:p-0 h-full md:space-y-20 ">
                        <p className="text-md text-center w-full md:text-xl md:w-200 text-white">I am a Binus University undergraduate majoring in Computer Science since 2023 and plan to graduate in 2027. I am passionate about programming and web developing. In my major, I took a specialization in Software Development in pursue of my dream to become a project manager or analyst.</p>
                        <button
                            type="button"
                            className="px-8 py-4 border-2 border-white rounded-xl bg-white text-lg w-80 transition-all duration-200 hover:scale-105 hover:bg-indigo-400 hover:text-white"
                            onClick={() => onNavigate("project")}>See my projects</button>
                    </div>
                </div>
            </div>
        </>
    )
}