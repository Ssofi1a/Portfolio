import img from '../../assets/sof.jpg'
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../About/About.module.css'

const About = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchdata()
    }, []);

    const fetchdata = () => {
        axios.get("http://localhost:8000/about/").then((response) => {
            setData(response.data);
        }).catch((error) => {console.log(error);});

    }

    console.log(data)
    return (
            <div id='About' className={styles.about_section}>
                <h1 data_aos="fade_left" className={styles.about_title}>
                    About Me
                </h1>
                <div className={styles.about_content}>
                    <img data-aos="fade-up" src={img} width={390} height={390} className={styles.about_image} alt=""/>
                        <div className={styles.about_text_cont}>
                            <div className={styles.about_text}>
                                <p data-aos="fade-left" class={styles.about_description}>
                                    I am a highly motivated 21-year-old Computer Science student with a strong sense of responsibility and a passion for continuous learning. I thrive on improving my skills every day and am committed to contributing effectively to any team or project I am part of.
                                </p>
                            </div>
                            <div class={styles.button_container}>
                                <a href="/Sofi'sCV.pdf" download>
                                     <button class={styles.cv_button}>CV</button>
                                </a>
                            </div>
                        </div>
                </div>
            </div>
    );
}

export default About;