import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import styles from '../Banner/Banner.module.css'

const Banner = () => {
    useEffect(() => {
        AOS.init({
                easing: 'ease-out-quart',
                delay: 0,
                duration: 750
            })
    },[])
    return (
        <div data-aos="fade-down" className={styles.home_section}>
            <div className={styles.text_section}>
                <h1 data-aos="fade-down" className={styles.greeting}>Welcome to my Personal Website</h1>
                <p data-aos="fade-down" className={styles.text}>Hi! I'm <span className={styles.name}>Sofi Abovyan</span>. Here, you’ll not only explore my programming journey, skills, and projects but also discover some of my favorite things that inspire me every day. From coding challenges to my favorite books, music, and quotes, this portfolio is a reflection of both my technical growth and personal interests.</p>
                <div className={styles.home_content}>
                    <div className={styles.profiles}>
                        <a href="https://github.com/Ssofi1a" className={styles.links} target="_blank" rel="noopener noreferrer">
                            <AiFillGithub className="text-[38px]"/>
                        </a>
                        <a href="https://www.linkedin.com/in/sofi-abovyan-a9557025a/" className={styles.links} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-[38px]"/>
                        </a>
                        <a href="https://www.instagram.com/__sofi1a__/" className={styles.links} target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-[38px]"/>
                        </a>
                        <a href="https://www.facebook.com/sofulikabovyan2003" className={styles.links} target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-[38px]"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;