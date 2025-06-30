import headerLogo from "../assets/images/header-logo.svg";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";


// Use src/constants to keep seperate business logic and links
const Nav = () => {

    return (
        <header className="padding-x py-8 absolute z-10 w-full">
     

            <nav className="flex items-center justify-between max-container">
                <a href="">
                    <img src={headerLogo}
                        alt="Logo"
                        width={130}
                        height={29}
                    />
                </a>

                {/* visible on Web devices  opposite that div below  */}
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}
                                className="font-montserrat loading-normal text-lg text-slate-gray">
                                {item.label}

                            </a>

                        </li>
                    ))}
                </ul>

                    {/* visible on mobile devices only opposite that of we did to make nav elements visible above */}
                <div className="hidden max-lg:block">
                 
                    <img src={hamburger}
                     alt="hamburger"
                     width={25}
                     height={25}
                     />
            
                </div>
            </nav>

          
        </header>
    )
}

export default Nav;


