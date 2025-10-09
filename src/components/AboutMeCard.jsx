import Andrew from "../assets/Andrew.jpeg"

const data = [{
    Name: "Nicholas Andrew Sutiono",
    Image: Andrew
}]

export default function AboutMeCard({ onNavigate }) {
    return (
        <>
            <div className="h-full w-screen flex flex-col p-0 my-15 py-20">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">About Me</h1>
                <div className="flex flex-col gap-10 xl:flex-row w-parent justify-between xl:px-30 items-center">
                    <div className="flex flex-col">
                        <img className="w-60 h-60 flex-1 md:w-100 md:h-100 rounded-full" src={data[0].Image} alt="Profile Picture" />
                    </div>
                    <div className="flex flex-col max-w-5/6 space-y-10 items-center justify-center xl:max-w-200 xl:items-start md:mt-15 md:p-0 h-full md:space-y-20 ">
                        <p className="text-md text-center w-full md:text-2xl lg:w-200 lg:text-left text-white">I am a Binus University undergraduate majoring in Computer Science since 2023 and plan to graduate in 2027. I am passionate about programming and web developing. In my major, I took a specialization in Software Development in pursue of my dream to become a project manager or analyst.</p>
                        <button
                            type="button"
                            className="px-4 py-3 max-w-5/6 md:px-8 md:py-4 border-2 border-white rounded-xl bg-white text-lg w-80 transition-all duration-200 hover:scale-105 hover:bg-indigo-400 hover:text-white"
                            onClick={() => onNavigate("project")}>See my projects</button>
                    </div>
                </div>
            </div>
        </>
    )
}