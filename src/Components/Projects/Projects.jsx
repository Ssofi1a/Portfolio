// import img1 from '../../assets/ft_libft.png';
// import img2 from '../../assets/ft_printf.png';
// import img3 from '../../assets/get.png';
// import img4 from '../../assets/crud.png';
// import img5 from '../../assets/building.png';
import { useState, useEffect } from 'react';
import styles from '../Projects/Projects.module.css'
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState(null);

    useEffect(() => 
    {
        fetchProjectData();
    }, []);

    const fetchProjectData = () => {
        axios.get("http://localhost:8000/projects/")
            .then((response) => {
                setProjects(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    if (!projects)
        return <div>Loading...</div>

    return (
        <div data-aos="fade-down" id="Projects" className={styles.projects_section}>
            <h1 className={styles.h1}>Projects</h1>
            <div className={styles.prs}>
                <img height={600} width={250} data-aos="fade-down" className={styles.pro_pictures} src={`http://localhost:8000${projects.project1}`} alt="Project 1" />
                <img height={600} width={250} data-aos="fade-up" className={styles.pro_pictures} src={`http://localhost:8000${projects.project2}`} alt="Project 2" />
                <img height={600} width={250} data-aos="fade-down" className={styles.pro_pictures} src={`http://localhost:8000${projects.project3}`} alt="Project 3" />
                <img height={600} width={250} data-aos="fade-up" className={styles.pro_pictures} src={`http://localhost:8000${projects.project4}`} alt="Project 4" />
                <img height={600} width={250} data-aos="fade-down" className={styles.pro_pictures} src={`http://localhost:8000${projects.project5}`} alt="Project 4" />
            </div>
        </div>
    );
}

export default Projects;
