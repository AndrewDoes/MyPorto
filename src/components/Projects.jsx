import hcilec from "../assets/HCIlec.png"
import hcilab from "../assets/HCIlab.png"
import cashierapp from "../assets/CashierApp.png"

const projects = [
    {
        id: 1,
        title: "Human Computer Interaction (LEC)",
        description: "A project that I made for Human Computer Interaction (LEC) course at Binus University to introduce myself to native web developing with HTML, CSS, and JS with a focus on user experience and user interface design.",
        image: hcilec,
        link: "https://hci-project-lec.vercel.app/"
    },
    {
        id: 2,
        title: "Human Computer Interaction (LAB)",
        description: "A project to further develop my understanding of web development with HTML, CSS, and JS with a focus on responsiveness and functionality",
        image: hcilab,
        link: "https://hci-project-lab.vercel.app/"
    },
    {
        id: 3,
        title: "Next.js Cashier Program",
        description: "Self-initiated cashier program with Next.js and Firebase",
        image: cashierapp,
        link: "https://nextjs-cashier-program.vercel.app/"
    }
]

const ProjectCards = ({ id, title, description, image, link }) => {
    return (
        <div className="w-80 h-80 rounded-xl p-5 flex flex-col gap-4 items-center group bg-gray-700 shadow-lg transition-transform duration-300 hover:scale-105" onClick={() => window.location.href = link}>
            <div className="relative w-full h-40 mb-2 rounded-md overflow-hidden">
                <img src={image} alt={title} className="w-full h-full" />
            </div>
            <h1 className="text-white text-xl font-bold text-center h-20 flex items-center">{title}</h1>
            <div
                className="absolute inset-0 flex items-center justify-center p-4 bg-gray-700 rounded-xl bg-opacity-70 
                               text-center text-white 
                               -z-100 opacity-0 group-hover:opacity-100 group-hover:z-10 
                               transition-opacity duration-300"
            >
                <p className="text-sm">{description}</p>
            </div>
            <p className=" text-sm font-extralight text-indigo-400">{id}</p>
        </div>
    )
}

export default function Projects() {
    return (
        <div className="flex flex-col w-screen">
            <h1 className="text-white text-4xl font-bold m-0 text-center mb-12">Projects</h1>
            <div className="flex w-screen h-full px-60 justify-between items-center">
                {projects.map(project => <ProjectCards key={project.id} id={project.id} title={project.title} description={project.description} image={project.image} link={project.link} />)}
            </div>
        </div>
    )
}