import { useState } from "react";
import headerLogo from "../assets/images/header-logo.svg";
import { hamburger, close } from "../assets/icons";
import { navLinks } from "../constants";
import github  from "../assets/icons/github.svg"; // or "../assets/images" if it's in images

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        // remove absolute and add top-0, shadow-md to make bg visible and not transparent
        <header className="padding-x py-6 absolute z-50 w-full ">
            <nav className="flex items-center justify-between max-container">

                {/* Comment this if headerLogo not using..in another app */}
                <a href="#home">
                    <img src={headerLogo} alt="Logo" width={130} height={29} />
                </a>

                {/* Desktop Menu */}
                {/* <ul className="hidden lg:flex justify-center items-center gap-12"> */}
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-montserrat font-medium text-lg text-slate-gray hover:text-black transition"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger for Mobile */}
                {/* <div className="lg:hidden"> */}
                <div className="hidden max-lg:block absolute right-6 top-6">
                    <button onClick={() => setMenuOpen(true)}>
                        <img src={hamburger} alt="menu" width={25} height={25} />
                    </button>
                </div>
            </nav>

            {/* Fullscreen Mobile Menu */}
            <div
                className={`fixed top-0 right-0 w-full h-screen bg-white text-black flex flex-col items-center justify-center transition-transform duration-300 z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Close Button */}
                <button
                    className="absolute top-6 right-6"
                    onClick={() => setMenuOpen(false)}
                >
                    <img src={close} alt="close" width={30} height={30} />
                </button>

                <ul className="flex flex-col gap-6 text-xl text-center">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="hover:underline"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Github */}
                <a
                    href="https://github.com/yash-bandal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-6 right-6"
                >
                    <img src={github} alt="GitHub" width={25} height={25} className="invert" />
                </a>
            </div>
        </header>
    );
};

export default Nav;
