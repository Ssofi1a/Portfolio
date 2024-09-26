import { useState, useEffect } from 'react';
import styles from "../Skills/Skills.module.css"
import axios from 'axios';
import { PiNutFill } from 'react-icons/pi';

const Skills = () => {
    const [skills, setSkills] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:8000/skills/")
            .then((response) => {
                setSkills(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    if (!skills) {
        return <div>Loading...</div>;
    }
    return (
        <div data-aos="fade-down" id="Skills" className={styles.skills_section}>
            <h1 className={styles.h1}>Skills</h1>
            <div className={styles.objects}>
                <h2 data-aos="fade-up" className={styles.skills}>{skills.name1}</h2>
                <h2 data-aos="fade-down" className={styles.skills}>{skills.name2}</h2>
                <h2 data-aos="fade-up" className={styles.skills}>{skills.name3}</h2>
                <h2 data-aos="fade-down" className={styles.skills}>{skills.name4}</h2>
                <h2 data-aos="fade-up" className={styles.skills}>{skills.name5}</h2>
            </div>
        </div>
    );
}

export default Skills;