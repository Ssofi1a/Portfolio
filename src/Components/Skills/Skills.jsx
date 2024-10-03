import { useState, useEffect } from 'react';
import styles from "../Skills/Skills.module.css";
import axios from 'axios';

const Skills = () => {
    const [skills, setSkills] = useState([]);

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

    if (skills.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div data-aos="fade-down" id="Skills" className={styles.skills_section}>
            <h1 className={styles.h1}>Skills</h1>
            <div className={styles.objects}>
                {skills.map((skill, index) => (
                    <h2 
                        key={index} 
                        data-aos={index % 2 === 0 ? "fade-up" : "fade-down"} 
                        className={styles.skills}
                    >
                        {skill["skills__skill_name"]}
                    </h2>
                ))}
            </div>
        </div>
    );
};

export default Skills;