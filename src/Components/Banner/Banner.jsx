import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {
    useEffect(() => {
        AOS.init({
                easing: 'ease-out-quart',
                delay: 0,
                duration: 750
            })
    },[])
    return (
        <div data-aos="fade-down" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text">
                <h1 data-aos="fade-down" className="text-[52px] font-semibold mb-8 leading-normal"><span className="text-gray-900 uppercase">Welcome to my Personal Website</span></h1>
                <p className="font-serif text-2xl">Hi! Here, you’ll not only explore my programming journey, skills, and projects but also discover some of my favorite things that inspire me every day. From coding challenges to my favorite books, music, and quotes, this portfolio is a reflection of both my technical growth and personal interests.</p>
                <div className="flex items-center justify-center">
                    <div className="flex mt-8 gap-2">
                        <a href="https://github.com/Ssofi1a" className="bg-red-100 hover:bg-red-300 rounded-full glow p-2 cursor-pointer" target="_blank" rel="noopener noreferrer">
                            <AiFillGithub className="text-[38px]"/>
                        </a>
                        <a href="https://www.linkedin.com/in/sofi-abovyan-a9557025a/" className="bg-red-100 hover:bg-red-300 rounded-full glow p-2 cursor-pointer" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-[38px]"/>
                        </a>
                        <a href="https://www.instagram.com/__sofi1a__/" className="bg-red-100 hover:bg-red-300 rounded-full glow p-2 cursor-pointer" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-[38px]"/>
                        </a>
                        <a href="https://www.facebook.com/sofulikabovyan2003" className="bg-red-100 hover:bg-red-300 rounded-full glow p-2 cursor-pointer" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-[38px]"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;