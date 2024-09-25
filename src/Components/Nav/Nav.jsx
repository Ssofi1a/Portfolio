import { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../Nav/Nav.module.css';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.icon} onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" /> {/* Use FontAwesome icons */}
            </div>
            <ul className={`${styles.menu} ${isOpen ? styles.responsive : ''}`}>
                <Link spy={true} smooth={true} to="Home">
                    <li className={styles.menu_item}>Home</li>
                </Link>
                <Link spy={true} smooth={true} to="About">
                    <li className={styles.menu_item}>About</li>
                </Link>
                <Link spy={true} smooth={true} to="Skills">
                    <li className={styles.menu_item}>Skills</li>
                </Link>
                <Link spy={true} smooth={true} to="Projects">
                    <li className={styles.menu_item}>Projects</li>
                </Link>
                <Link spy={true} smooth={true} to="Favourite">
                    <li className={styles.menu_item}>Favourite</li>
                </Link>
                <Link spy={true} smooth={true} to="Contact">
                    <li className={styles.menu_item}>Contact</li>
                </Link>
            </ul>
        </div>
    );
}

export default Nav;
