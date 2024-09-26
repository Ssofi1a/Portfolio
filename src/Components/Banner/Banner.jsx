import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import styles from '../Banner/Banner.module.css';
import axios from 'axios';

const Banner = () => {
    const [bannerData, setBannerData] = useState(null);

    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750
        });
        fetchBannerData();
    }, []);

    const fetchBannerData = () => {
        axios.get("http://localhost:8000/banner/")
            .then((response) => {
                setBannerData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    if (!bannerData) {
        return <div>Loading...</div>;
    }

    return (
        <div data-aos="fade-down" className={styles.home_section}>
            <div className={styles.text_section}>
                <h1 data-aos="fade-down" className={styles.greeting}>
                    {bannerData.welcome_text}
                </h1>
                <p data-aos="fade-down" className={styles.text}>
                    {bannerData.description}
                </p>
                <div className={styles.home_content}>
                    <div className={styles.profiles}>
                        <a href={bannerData.github_link} className={styles.links} target="_blank" rel="noopener noreferrer">
                            <AiFillGithub className="text-[38px]" />
                        </a>
                        <a href={bannerData.linkedin_link} className={styles.links} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-[38px]" />
                        </a>
                        <a href={bannerData.instagram_link} className={styles.links} target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-[38px]" />
                        </a>
                        <a href={bannerData.facebook_link} className={styles.links} target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-[38px]" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
