import img1 from '../../assets/ft_libft.png';
import img2 from '../../assets/ft_printf.png';
import img3 from '../../assets/get.png';
import img4 from '../../assets/crud.png';
import img5 from '../../assets/building.png';
import styles from '../Projects/Projects.module.css'

const Projects = () => {
    return (
        <div data-aos="fade-down" id="Projects" className={styles.projects_section}>
            <h1 className={styles.h1}>Projects</h1>
            <div className={styles.prs}>
                <img height={600} width={250} data-aos="fade-down" className={styles.pro_pictures} src={img1} alt="Project 1" />
                <img height={600} width={250} data-aos="fade-up" className={styles.pro_pictures} src={img2} alt="Project 2" />
                <img height={600} width={250} data-aos="fade-down" className={styles.pro_pictures} src={img3} alt="Project 3" />
                <img height={600} width={250} data-aos="fade-up" className={styles.pro_pictures} src={img4} alt="Project 4" />
                <img height={600} width={250} data-aos="fade-down" className={styles.pro_pictures} src={img5} alt="Project 4" />
            </div>
        </div>
    );
}

export default Projects;
