import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const content = <> 
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-red-100 transition ">
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth={true} to="Home">
                <li className="my-4 py-4 border-b bg-red-100 hover:bg-red-300 hover:border">Home</li>
                </Link>
                <Link spy={true} smooth={true} to="About">
                <li className="my-4 py-4 border-b bg-red-100 hover:bg-red-300 hover:border">About</li>
                </Link>
                <Link spy={true} smooth={true} to="Skills">
                <li className="my-4 py-4 border-b bg-red-100 hover:bg-red-300 hover:border">Skills</li>
                </Link>
                <Link spy={true} smooth={true} to="Projects">
                <li className="my-4 py-4 border-b bg-red-100 hover:bg-red-300 hover:border">Projects</li>
                </Link>
                <Link spy={true} smooth={true} to="Favourite">
                <li className="my-4 py-4 border-b bg-red-100 hover:bg-red-300 hover:border">Favourite</li>
                </Link>
                <Link spy={true} smooth={true} to="Contact">
                <li className="my-4 py-4 border-b bg-red-100 hover:bg-red-300 hover:border">Contact</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4">
                <div className="flex items center flex-1">
                    <span className="text-2xl font-bold">Sofi Abovyan</span>
                </div>
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