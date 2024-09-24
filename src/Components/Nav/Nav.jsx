import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import styles from '../Nav/Nav.module.css'

const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const content = <> 
        <div className={styles.navbar}>
            <div className={styles.menu}>
                <ul>
                <Link spy={true} smooth={true} to="Home">
                            <li className="menu-item">Home</li>
                        </Link>
                        <Link spy={true} smooth={true} to="About">
                            <li className="menu-item">About</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Skills">
                            <li className="menu-item">Skills</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Projects">
                            <li className="menu-item">Projects</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Favourite">
                            <li className="menu-item">Favourite</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Contact">
                            <li className="menu-item">Contact</li>
                        </Link>
                </ul>
            </div>

        </div>
    </>
    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4">
                <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <Link spy={true} smooth={true} to="Home">
                            <li className="bg-red-100 transition border-b-2 border-red-300	 hover:border-transparent cursor-pointer">Home</li>
                            </Link>
                            <Link spy={true} smooth={true} to="About">
                            <li className="bg-red-100 transition border-b-2 border-red-300	 hover:border-transparent	 cursor-pointer">About</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Skills">
                            <li className="bg-red-100 transition border-b-2 border-red-300	 hover:border-transparent cursor-pointer">Skills</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Projects">
                            <li className="bg-red-100 transition border-b-2 border-red-300	 hover:border-transparent cursor-pointer">Projects</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Favourite">
                            <li className="bg-red-100 transition border-b-2 border-red-300	 hover:border-transparent cursor-pointer">Favourite</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Contact">
                            <li className="bg-red-100 transition border-b-2 border-red-300	 hover:border-transparent cursor-pointer">Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            <div>
                {click && content}
            </div>
            <button className="block sm:hidden transition" onClick={handleClick}>
                {click ? <FaTimes/> : <CiMenuFries/>}
            </button>
            </div>
        </nav>
    )
}

export default Nav;