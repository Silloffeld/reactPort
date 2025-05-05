import Image  from "next/image";
import Link from "next/link";
export default function Sidebar() {
    return (
      <aside className="w-64 bg-[#0F172A] text-white h-screen p-4  fixed top-0 left-0 z-50 align-items-center">
       <Image 
            src="/groep.jpg"
            width={110}
            height={250}
            className="hidden md:block mb-5 rounded-full mx-auto mt-5"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        <nav className="space-y-4 text-center">
            <h1 className = "text-xl font-bold">opleiding:</h1>
          <Link href="https://www.rocvantwente.nl/voor-jongeren/opleidingen/Software-developer-BOL-4" className="block hover:text-blue-400">Software Developer bij het ROC van twente</Link>
          <p className = "font-bold">Locatie</p>
          <a href="https://www.rocvantwente.nl/leslocaties/gieterij-200-hengelo" className="block hover:text-blue-400">Gieterij 200</a>
          <p className="font-bold">Leerjaar</p>
          <p>Leerjaar 3</p>
          <a href="#contact" className="block hover:text-blue-400">Contact</a>
        </nav>
      </aside>
    );    
  }
  
