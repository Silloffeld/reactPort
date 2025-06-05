import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="hidden md:block w-64 bg-[#0F172A] text-white h-screen p-4 fixed top-0 left-0 z-50">
            <Image
                src="/groep.jpg"
                width={110}
                height={250}
                className="mb-5 rounded-full mx-auto mt-5"
                alt="Profile picture"
            />
            <nav className="space-y-4 h-full">
                <h1 className="text-xl font-bold">opleiding:</h1>
                <Link href="https://www.rocvantwente.nl/voor-jongeren/opleidingen/Software-developer-BOL-4" className="block hover:text-blue-400">
                    Software Developer bij het ROC van twente
                </Link>
                <p className="font-bold">Locatie</p>
                <a href="https://www.rocvantwente.nl/leslocaties/gieterij-200-hengelo" className="block hover:text-blue-400">
                    Gieterij 200
                </a>
                <p className="font-bold">Leerjaar</p>
                <p>Leerjaar 3</p>
                <div className="flex flex-col">
                    <p className="font-bold flex-1">contact:</p>
                    <ul className="text-white space-x-2 flex flex-row pt-2">
                        <li className="border-white border-2 w-1/2 my-auto p-1 rounded-xl active:bg-white">
                            <a href="mailto:Silloffeld@gmail.com">Email mij prive</a>
                        </li>
                        <li className="border-white border-2 w-1/2 my-auto p-1 rounded-xl active:bg-white">
                            <a href="mailto:0362067@student.rocvantwente.nl">mijn school mail</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    );
}