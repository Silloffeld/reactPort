import SkillBar from "./ui/Skillbar";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaPhp, FaPython, FaLaravel } from "react-icons/fa";
import { SiTailwindcss, SiSharp } from "react-icons/si";

export default function Home() {
    return (
        <div className="flex" id="mainDiv">
            <main className="py-6 px-0 scroll-smooth md:ml-72 w-full bg-gradient-to-br from-blue-50 to-white min-h-screen rounded transition-colors duration-300">
                {/* Hero */}
                <section id="home" className="p-6 md:p-12 flex flex-col md:flex-row items-center bg-gradient-to-r from-slate-900 to-gray-700 m-3 rounded-2xl shadow-lg">
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-5xl text-white font-bold mb-3">Sil Loffeld</h1>
                        <p className="text-lg text-blue-200 mb-2">
                            Software Developer (Versneld traject) - ROC van Twente
                        </p>
                        <p className="text-white mb-6">
                            Gepassioneerd door coderen, altijd op zoek naar nieuwe uitdagingen.<br/>
                            Focus op webdevelopment, security en persoonlijke groei.
                        </p>
                    </div>
                    <div className="flex-shrink-0 mt-4 md:mt-0 hidden md:block">
                        {/* Optionally add a profile image here for desktop */}
                    </div>
                </section>

                {/* Skills */}
                <section id="skills" className="p-6 md:p-12 bg-white m-3 rounded-2xl shadow">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <SkillBar label={<span className="flex items-center gap-2"><FaHtml5 />HTML</span>} percentage={90} color="bg-blue-500" />
                        <SkillBar label={<span className="flex items-center gap-2"><FaCss3Alt />CSS</span>} percentage={80} color="bg-green-500" />
                        <SkillBar label={<span className="flex items-center gap-2"><SiTailwindcss />Tailwind CSS & <FaBootstrap />Bootstrap</span>} percentage={80} color="bg-purple-500" />
                        <SkillBar label={<span className="flex items-center gap-2"><FaJs />JavaScript</span>} percentage={75} color="bg-yellow-500" />
                        <SkillBar label={<span className="flex items-center gap-2"><FaReact />React</span>} percentage={60} color="bg-pink-500" />
                        <SkillBar label={<span className="flex items-center gap-2"><FaPhp />PHP</span>} percentage={90} color="bg-red-500" />
                        <SkillBar label={<span className="flex items-center gap-2"><SiSharp />C#</span>} percentage={80} color="bg-indigo-500" />
                        <SkillBar label={<span className="flex items-center gap-2"><FaPython />Python</span>} percentage={80} color="bg-orange-500" />
                        <SkillBar label={<span className="flex items-center gap-2"><FaLaravel />Laravel</span>} percentage={70} color="bg-red-900" />
                    </div>
                </section>

                {/* About Me */}
                <section id="about" className="min-h-[20vh] p-6 md:p-12 bg-gradient-to-r from-gray-700 to-slate-900 m-3 rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-bold text-white mb-5">About Me</h2>
                    <p className="text-blue-100 text-lg leading-relaxed">
                        Ik ben Sil Loffeld (2009), een enthousiaste software developer in het versnelde traject bij het ROC van Twente. Mijn passie voor programmeren komt voort uit mijn nieuwsgierigheid, het plezier in leren, en de uitdaging om steeds complexere problemen op te lossen. Ik vind het geweldig om mijn grenzen te verleggen en mezelf elke dag te verbeteren.<br/><br/>
                        Naast mijn studie werk ik graag aan eigen projecten, waarbij ik zowel frontend als backend technieken toepas. Mijn interesses liggen bij webapplicaties, security, en het ontdekken van nieuwe technologieën.
                    </p>
                </section>

                {/* Projects */}
                <section id="projects" className="min-h-[20vh] p-6 md:p-12 bg-white m-3 rounded-2xl shadow">
                    <h2 className="text-3xl font-bold text-slate-900 mb-5">Projects</h2>
                    <ul className="list-disc text-slate-800 pl-8 space-y-2">
                        <li>
                            <strong>Portfolio Website:</strong> Dit portfolio als startproject om React en Next.js te leren, met Tailwind CSS voor styling.
                        </li>
                        <li>
                            <strong>Webshop Eindproject:</strong> Een webshop gebouwd als eindopdracht in leerjaar 1, met HTML, PDO, JavaScript, PHP, Bootstrap en CSS.
                        </li>
                        <li>
                            <strong>Password Manager:</strong> Een veilige wachtwoordmanager met een Laravel backend en een React frontend.
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
}