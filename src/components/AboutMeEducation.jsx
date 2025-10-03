const education = [
    {
        Image: "./src/assets/Binus-University.jpeg",
        Name: "Binus University (ALS), Tangerang, Banten",
        Description: "Bachelor of Computer Science (2023 - 2027)"
    }
]

const EduCard = ({ Image, Name, Description }) => {
    return (
        <div className="flex h-70 gap-10 border-2 border-white rounded-2xl py-4 px-10 items-center mt-10 mb-10 bg-gray-800">
            <img src="./src/assets/Binus-University.jpeg" alt="Binus University" className="rounded-full h-60 w-60" />
            <div className="flex h-full items-center">
                <p className="text-white">
                    Binus University (ALS), Tangerang, Banten
                    <br />
                    Bachelor of Computer Science (2023 - 2027)
                </p>
            </div>
        </div>
    )
}

export default function AboutMeEducation() {
    return (
        <div className="flex flex-col w-screen h-full px-30 space-y-4 justify-between items-center">
            <h1 className="text-white text-4xl font-bold m-0">Education</h1>
            {education.map((edu, index) => (
                <EduCard key={index} Image={edu.Image} Name={edu.Name} Description={edu.Description} />
            ))}
        </div>
    )
}
