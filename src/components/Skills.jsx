import React from 'react';

import htmlIcon from '../assets/HTML.png';
import cssIcon from '../assets/CSS.svg';
import reactIcon from '../assets/react.svg';
import cIcon from '../assets/C.png';
import javaIcon from '../assets/Java.png';
import jsIcon from '../assets/JS.png';
import csharpIcon from '../assets/Csharp.png';
import firebaseIcon from '../assets/Firebase.png';
import mysqlIcon from '../assets/MySQL.png';
import nextIcon from '../assets/Next.png';


const webSkill = [
    { image: htmlIcon, name: 'HTML', level: "Proficient" },
    { image: cssIcon, name: 'CSS', level: "Proficient" },
    { image: reactIcon, name: 'React', level: "Learning" },
    { image: nextIcon, name: 'Next.js', level: "Learning" },
];

const languageSkill = [
    { image: cIcon, name: 'C', level: "Proficient" },
    { image: javaIcon, name: 'Java', level: "Proficient" },
    { image: jsIcon, name: 'JavaScript', level: "Proficient" },
    { image: csharpIcon, name: 'C#', level: "Learning" }
];

const dbManagementSkill = [
    { image: firebaseIcon, name: 'Firebase', level: "Learning" },
    { image: mysqlIcon, name: 'MySQL', level: "Intermediate" }
];

const SkillCard = ({ image, name, level }) => {
    return(
        <div className="flex flex-col items-center justify-center bg-gray-700 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <img src={image} alt={`${name} logo`} className="w-16 h-16 mb-4 object-contain"/>
            <p className="text-white font-bold text-lg">{name}</p>
            <p className="text-indigo-400 text-sm">{level}</p>
        </div>
    );
}

export default function SkillsPage(){
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-10 py-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">My Tech Stack</h1>

            <div className="w-full max-w-5xl space-y-12">
                <div>
                    <h2 className="text-2xl font-semibold text-indigo-400 mb-6 text-center md:text-left">Web Development</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {webSkill.map(skill => (
                            <SkillCard key={skill.name} image={skill.image} name={skill.name} level={skill.level} />
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-indigo-400 mb-6 text-center md:text-left">Programming Languages</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {languageSkill.map(skill => (
                            <SkillCard key={skill.name} image={skill.image} name={skill.name} level={skill.level} />
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-indigo-400 mb-6 text-center md:text-left">Database & Backend</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {dbManagementSkill.map(skill => (
                            <SkillCard key={skill.name} image={skill.image} name={skill.name} level={skill.level} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
