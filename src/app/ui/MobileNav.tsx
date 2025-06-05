"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="md:hidden">
            {/* Mobile menu button */}
            <button
                onClick={toggleMenu}
                className="fixed top-4 right-4 z-50 p-2 rounded-md bg-[#1E293B] text-white focus:outline-none"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>

            {/* Mobile menu overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-[#0F172A] z-40 p-5 flex flex-col">
                    <div className="flex justify-end">
                        <button
                            onClick={toggleMenu}
                            className="p-2 text-white"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-col items-center mt-8">
                        <Image
                            src="/groep.jpg"
                            width={80}
                            height={80}
                            className="mb-5 rounded-full"
                            alt="Profile"
                        />

                        <nav className="space-y-4 w-full text-center">
                            <h1 className="text-xl font-bold text-white">opleiding:</h1>
                            <Link href="https://www.rocvantwente.nl/voor-jongeren/opleidingen/Software-developer-BOL-4"
                                  className="block py-2 hover:text-blue-400 text-white">
                                Software Developer bij het ROC van twente
                            </Link>

                            <p className="font-bold text-white">Locatie</p>
                            <a href="https://www.rocvantwente.nl/leslocaties/gieterij-200-hengelo"
                               className="block py-2 hover:text-blue-400 text-white">
                                Gieterij 200
                            </a>

                            <p className="font-bold text-white">Leerjaar</p>
                            <p className="text-white">Leerjaar 3</p>

                            <div className="mt-4">
                                <p className="font-bold text-white">contact:</p>
                                <div className="flex flex-col space-y-2 mt-2">
                                    <a href="mailto:Silloffeld@gmail.com"
                                       className="border-white border-2 p-2 rounded-xl active:bg-white text-white">
                                        Email mij prive
                                    </a>
                                    <a href="mailto:0362067@student.rocvantwente.nl"
                                       className="border-white border-2 p-2 rounded-xl active:bg-white text-white">
                                        Mijn school mail
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
}