import { useState } from "react";
import SearchBar from "./SearchBar";

export const Navbar = ({ searchTerm, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="bg-sky-700 text-white shadow-md">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo Avengers à gauche */}
                        <div className="flex items-center space-x-2">
                            <img />
                            <span className="text-2xl font-extrabold tracking-wide select-none">Avengers API</span>
                        </div>

                        {/* Menu centré, caché sur mobile */}
                        <div className="hidden space-x-10 text-lg font-semibold text-white md:flex">
                            <a href="#" className="transition hover:text-gray-300">
                                Accueil
                            </a>
                            <a href="#ajouter" className="transition hover:text-gray-300">
                                Ajouter
                            </a>
                            <a href="#about" className="transition hover:text-gray-300">
                                À propos
                            </a>
                        </div>

                        {/* SearchBar à droite, cachée sur mobile */}
                        <div className="hidden w-72 items-center md:flex">
                            <div className="relative w-full">
                                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <circle cx="11" cy="11" r="7" />
                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    </svg>
                                </span>
                                <SearchBar searchTerm={searchTerm} onChange={onChange} className="w-full rounded-md py-2 pr-3 pl-10 text-gray-800 focus:ring-2 focus:ring-sky-400 focus:outline-none" />
                            </div>
                        </div>

                        {/* Burger menu mobile */}
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none" aria-label="Menu mobile">
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M4 5h16M4 12h16M4 19h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Menu mobile */}
                {isOpen && (
                    <div className="space-y-3 bg-sky-600 px-4 pb-4 font-semibold text-white md:hidden">
                        <a href="#" className="block hover:text-gray-300">
                            Accueil
                        </a>
                        <a href="#ajouter" className="block hover:text-gray-300">
                            Ajouter
                        </a>
                        <a href="#about" className="block hover:text-gray-300">
                            À propos
                        </a>

                        {/* Barre de recherche mobile (optionnelle) */}
                        <div className="pt-3">
                            <SearchBar searchTerm={searchTerm} onChange={onChange} className="w-full rounded-md px-3 py-2 text-gray-800 focus:ring-2 focus:ring-sky-400 focus:outline-none" />
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};
