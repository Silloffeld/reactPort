import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaSchool, FaMapMarkerAlt } from "react-icons/fa";

export default function Sidebar() {
    return (
        <aside className="hidden md:flex flex-col items-center w-56 rounded-2xl mt-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white h-[98vh] p-6 fixed left-4 z-50 shadow-xl">
            <Image
                src="/groep.jpg"
                width={110}
                height={110}
                className="mb-5 rounded-full shadow-lg"
                alt="Profile picture"
                priority
            />
            <div className="w-full flex-1 flex flex-col justify-between">
                <div>
                    <h2 className="text-lg font-semibold mb-2">Opleiding</h2>
                    <Link
                        href="https://www.rocvantwente.nl/voor-jongeren/opleidingen/Software-developer-BOL-4"
                        className="block hover:text-blue-400 transition-colors"
                        target="_blank"
                    >
                        <FaSchool className="inline mr-2" />
                        Software Developer, ROC van Twente
                    </Link>
                    <div className="mt-4">
                        <p className="font-semibold flex items-center">
                            <FaMapMarkerAlt className="mr-2" /> Locatie
                        </p>
                        <Link
                            href="https://www.rocvantwente.nl/leslocaties/gieterij-200-hengelo"
                            className="hover:text-blue-400 transition-colors"
                            target="_blank"
                        >
                            Gieterij 200, Hengelo
                        </Link>
                    </div>
                    <div className="mt-4">
                        <p className="font-semibold">Leerjaar</p>
                        <p>3 (Versneld traject)</p>
                    </div>
                </div>
                <div className="mt-8 w-full">
                    <p className="font-semibold mb-2">Contact</p>
                    <ul className="flex flex-col space-y-2">
                        <li>
                            <a
                                href="mailto:Silloffeld@gmail.com"
                                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white hover:bg-white hover:text-slate-800 transition-colors"
                            >
                                <FaEnvelope /> Email privé
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:0362067@student.rocvantwente.nl"
                                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white hover:bg-white hover:text-slate-800 transition-colors"
                            >
                                <FaEnvelope /> School mail
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}