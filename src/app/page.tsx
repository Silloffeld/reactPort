import Sidebar from "./ui/sidebar";
import SkillBar from "./ui/Skillbar";
import './globals.css'
import './ui/fonts.ts'
import { Alfa_Slab_One } from 'next/font/google';

export const alfa = Alfa_Slab_One({ subsets: ['latin'], weight: ['400'] });


export default function Home() {
  return (
    <div className="flex" id="mainDiv">
      <Sidebar />
      <main className="py-2 scroll-smooth ml-64 bg-white rounded ">
      <section id="mainpage" className="h-[98vh] p-8 bg-[#0F172A] m-3 mt-0 rounded-lg flex items-center justify-center">
  <div id="text" className="ms-17">
    <h1 className={`text-9xl mb-8 ${alfa.className} tracking-[0.04em]`}>Sil Loffeld</h1>
    <h1 className={`text-9xl mb-8 ${alfa.className} tracking-[0.04em]`}>Portfolio</h1>
    <h1 className={`text-9xl mb-8 ${alfa.className} tracking-[0.04em]`}>(fullstack)software</h1>
    <h1 className={`text-9xl mb-8 ${alfa.className} tracking-[0.04em]`}>developer in </h1>
    <h1 className={`text-9xl mb-8 ${alfa.className} tracking-[0.04em]`}>opleiding</h1>
  </div>
</section>

        <section id="home" className="h-[50vh] p-8 bg-[#0F172A] m-3 rounded-lg ">
          <h1 className="text-4xl text-white">skills</h1>
          <SkillBar label="HTML" percentage={90} color="bg-blue-500" />
          <SkillBar label="CSS" percentage={80} color="bg-green-500" />
          <SkillBar label="Tailwind CSS and Bootstrap" percentage={80} color="bg-purple-500" />
          <SkillBar label="JavaScript" percentage={75} color="bg-yellow-500" />
          <SkillBar label="React" percentage={40} color="bg-pink-500" />
          <SkillBar label="PHP" percentage={90} color="bg-red-500" />
          <SkillBar label="C#" percentage={80} color="bg-indigo-500" />
        </section>  

        <section id="about" className="h-[25vh] p-8 bg-[#0F172A] m-3 rounded-lg">
          <h1 className="text-4xl text-white mb-5">About Me</h1>
          <p className="text-white">
            Ik ben Sil Loffeld, ik ben Geboren op 7 Maart 2009 en ik zit in het versneltraject van de software developers opleiding.
            ik heb een erge passie voor het coderen omdat ik het Leuk vind om dingen te leren , mijn doorzettingsvermogen te testen , mijn doelen te behalen , hoe complex het coderen kan zijn en dat ik zelf zo veel kennis kan op doen als op het internet staat omdat dit zo een digitaal onderwerp is.
          </p>
        </section>

        <section id="projects" className="h-[25vh] p-8 bg-[#0F172A] m-3 rounded-lg">
          <h1 className="text-4xl text-white">Projects</h1>
          <ul className="list-disc text-white pl-5 pt-5">
            <li>dit portfolio als start/leerproject om react te leren.(next.js framework met tailwind)</li>
            <li>een webshop als leerjaar 1 eindproject(html,pdo,js,php,bootstrap en css).</li>
          </ul>
        </section>

        <section id="contact" className="h-fill p-8 bg-[#0F172A] m-3 rounded-lg ">
          <h1 className="text-4xl text-white">Contact</h1>
          <ul className="list-disc text-white pl-5 pt-5">
          <li className="m-3"><a href="mailto:Silloffeld@gmail.com" >Email mij prive</a></li>
          <li className="m-3"><a href="mailto:0362067@student.rocvantwente.nl">mijn school mail</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
}

