import Andrew from "../assets/Andrew.jpeg"

const data = [{
    Name: "Nicholas Andrew Sutiono",
    Image: Andrew
}]

export default function AboutMeCard({onNavigate}) {

    return (
        <>
            <div className="h-full w-screen flex flex-col p-0 mt-15">
                <div className="flex w-parent justify-between px-30 items-center">
                    <div className="flex flex-col">
                        <img className="w-100 h-100 rounded-full" src={data[0].Image} alt="Profile Picture" />
                    </div>
                    <div className="flex flex-col p-0 h-full space-y-20">
                        <h1 className="text-2xl font-bold text-white">About Me</h1>
                        <p className="text-xl w-200 text-white">I am a Binus University undergraduate majoring in Computer Science since 2023 and plan to graduate in 2027. I am passionate about programming and web developing. In my major, I took a specialization in Software Development in pursue of my dream to become a project manager or analyst.</p>
                        <button 
                        type="button" 
                        className="px-8 py-4 border-2 border-white rounded-xl bg-white text-lg w-80 transition-all duration-200 hover:bg-gray-950 hover:text-white"
                        onClick={() => onNavigate("projects")}>See my projects</button>
                    </div>
                </div>
            </div>
        </>
    )
}