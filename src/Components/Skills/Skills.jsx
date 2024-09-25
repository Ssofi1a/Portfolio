import styles from "../Skills/Skills.module.css"

const Skills = () => {
    return (
        <div data-aos="fade-down" id="Skills" className={styles.skills_section}>
            <h1 className={styles.h1}>Skills</h1>
            <div className={styles.objects}>
                <h2 data-aos="fade-up" className={styles.skills}>Python</h2>
                <h2 data-aos="fade-down" className={styles.skills}>C</h2>
                <h2 data-aos="fade-up" className={styles.skills}>JavaScript</h2>
                <h2 data-aos="fade-down" className={styles.skills}>HTML</h2>
                <h2 data-aos="fade-up" className={styles.skills}>CSS</h2>
            </div>
        </div>
    );
}

export default Skills;