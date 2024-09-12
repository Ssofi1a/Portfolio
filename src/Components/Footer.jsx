import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
    <div>
    <footer className="bg-red-200 text-black lg:px-48 px-4 py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="mb-4 md:mb-0">
            <span className="text-[35px] font-semibold text-black py-2 uppercase">Get in Touch</span>
        </div>
        <div>
            <h2 className="text-[22px] uppercase font-semibold text-red-100">Contact</h2>
            <p className="text-[16px] my-4">
                <span className="font-semibold">Phone: </span> (+374) 96-222-872
            </p>
            <p className="text-[16px] my-4">
                <span className="font-semibold">Email: </span> 
            <a href="mailto:sofiiabovyan@gmail.com" className="underline hover:text-black">sofiiabovyan@gmail.com</a>
            </p>
        </div>
        <div className="md:col-span-2">
            <div className="text-center">
            <h2 className="text-[22px] uppercase font-semibold text-red-100 mb-4">Follow Me On</h2>
            <div className="flex justify-center gap-4">
                <a className="bg-red-100 hover:bg-red-300 rounded-full glow p-2 cursor-pointer" href="https://github.com/Ssofi1a" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-black" />
                </a>
                <a className="bg-red-100 hover:bg-red-300 rounded-full glow p-2 cursor-pointer" href="https://www.linkedin.com/in/sofi-abovyan-a9557025a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-black" />
                </a>
                <a className="bg-red-100 hover:bg-red-300 rounded-full glow p-2 cursor-pointer" href="https://www.instagram.com/__sofi1a__/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-black" />
                </a>
                <a className="bg-red-100 hover:bg-red-300 rounded-full glow p-2 cursor-pointer" href="https://www.facebook.com/sofulikabovyan2003" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-black" />
                </a>
            </div>
            </div>
        </div>
        </div>
    </footer>
    </div>
    );
}

export default Footer;