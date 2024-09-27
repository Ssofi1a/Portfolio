import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from 'react';

const Footer = () => {
    const [footer, setFooterData] = useState(null);

    useEffect(() => 
    {
        fetchFooterData();
    }, []);

    const fetchFooterData = () => {
        axios.get("http://localhost:8000/footer/")
            .then((response) => {
                setFooterData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    if (!footer)
        return <div>Loading...</div>
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
                <span className="font-semibold">Phone: </span> {footer.phone}
            </p>
            <p className="text-[16px] my-4">
                <span className="font-semibold">Email: </span> 
            <a href="mailto:{footer.email}" className="underline hover:text-black">{footer.email}</a>
            </p>
        </div>
        <div className="md:col-span-2">
            <div className="text-center">
            <h2 className="text-[22px] uppercase font-semibold text-red-100 mb-4">Follow Me On</h2>
            <div className="flex justify-center gap-4">
                <a className="bg-red-100 hover:bg-red-300 rounded-full glow p-2 cursor-pointer" href={footer.link1} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-black" />
                </a>
                <a className="bg-red-100 hover:bg-red-300 rounded-full glow p-2 cursor-pointer" href={footer.link2} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-black" />
                </a>
                <a className="bg-red-100 hover:bg-red-300 rounded-full glow p-2 cursor-pointer" href={footer.link3} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-black" />
                </a>
                <a className="bg-red-100 hover:bg-red-300 rounded-full glow p-2 cursor-pointer" href={footer.link4} target="_blank" rel="noopener noreferrer">
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