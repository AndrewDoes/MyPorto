const data = [{
    Name: "Nicholas Andrew Sutiono",
    Age: 19,
    Image: "./src/assets/Andrew.jpeg",
    University: "Binus University",
    Email: "sutionoandrew@gmail.com",
    Phone: "08989180888",
    Github: "github.com/AndrewDoes"
}]

export default function AboutMe() {
    return (
        <>
            <div className="h-full w-screen flex flex-col p-0">
                <h1 className="text-2xl font-bold text-white p-5 m-auto">About Me</h1>
                <div className="flex">
                    <div className="flex flex-col">
                        <img className="w-48 h-48 rounded-full" src={data[0].Image} alt="Profile Picture" />
                        <p className="text-2xl">Name: {data[0].Name}</p>
                    </div>
                    <p className="text-2xl">This is a website showcasing my skills and projects.</p>
                </div>
            </div>
        </>
    )
}