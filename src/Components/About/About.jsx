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
                <img data-aos="fade-up" src={img} width={390} height={390} className={styles.about_section} alt=""/>
            <div data-aos="fade-left" className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text">
                <h1 data-aos="fade-right" className="text-[62px] text-right font-semibold mb-8 leading-normal uppercase"><span className="text-gray-900 text-right">About Me</span></h1>
                <p data-aos="fade-left" className="font-serif text-2xl text ">I am a highly motivated 21-year-old Computer Science student with a strong sense of responsibility and a passion for continuous learning. I thrive on improving my skills every day and am committed to contributing effectively to any team or project I am part of.</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2 ">
                            <a href="/Sofi'sCV.pdf" download>
                            <button className="neno-button shadow-x1 hover:shadow-red-300 text-black border-2 hover:bg-red-200 border-red-200 rounded-lg py-4 px-8 uppercase relative overflow-hidden ">CV</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;