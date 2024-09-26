import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../About/About.module.css';

const About = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:8000/about/")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div id='About' className={styles.about_section}>
            <h1 data_aos="fade_left" className={styles.about_title}>
                About Me
            </h1>
            <div className={styles.about_content}>
                <img data-aos="fade-up" 
                    src={`http://localhost:8000${data.img}`} 
                    width={390} height={390} 
                    className={styles.about_image} 
                    alt="About Me" 
                />
                <div className={styles.about_text_cont}>
                    <div className={styles.about_text}>
                        <p data-aos="fade-left" className={styles.about_description}>
                            {data.desc}
                        </p>
                    </div>
                    <div className={styles.button_container}>
                        <a href={`http://localhost:8000${data.cv}`} download>
                            <button className={styles.cv_button}>CV</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
