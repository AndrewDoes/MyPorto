import Binus from "../assets/Binus-University.jpeg"

const education = [
    {
        Image: Binus,
        Name: "Binus University (ALS), Tangerang, Banten",
        Description: "Bachelor of Computer Science (2023 - 2027), pursued my dream here and learned a lot about programming and web development."
    }
]

const EduCard = ({ Image, Name, Description }) => {
    return (
        <div className="relative flex flex-col h-fit w-fit gap-4 border-2 border-white rounded-2xl py-5 px-10 items-center mt-10 mb-10 bg-gray-800 group">
            <img src={Image} alt="Binus University" className="relative rounded-full h-60 w-60" />
            <div className="flex h-full items-center justify-center">
                <p className="text-white text-center">
                    {Name}
                </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-4 px-20 bg-gray-700 rounded-xl bg-opacity-70 
                               text-center text-white 
                               -z-100 opacity-0 group-hover:opacity-100 group-hover:z-10 
                               transition-opacity duration-300">
                <p className="text-white">
                    {Description}
                </p>
            </div>
        </div>
    )
}

export default function AboutMeEducation() {
    return (
        <div className="flex flex-col p-5 w-screen h-full space-y-4 justify-between items-center xl:px-30 xl:py-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Education</h1>
            {education.map((edu, index) => (
                <EduCard key={index} Image={edu.Image} Name={edu.Name} Description={edu.Description} />

            ))}
        </div>
    )
}
