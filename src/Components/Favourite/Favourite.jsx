import { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import styles from '../Favourite/Favourite.module.css'

const Favourite = () => {
    const [favs, setFavs] = useState(null);

    useEffect(() => {
        fetchFavData();
    }, []);

    const fetchFavData = () => {
        axios.get("http://localhost:8000/favs/")
            .then((response) => {
                setFavs(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    if (!favs)
        return <div>Loading...</div>

    return (
        <div id="Favourite" className={styles.fav_section}>
            <h2 data-aos="fade-down" className={styles.h2}>My Favourites</h2>
            <div className="mb-12">
                <h3 className={styles.h3}>Favourite Music</h3>
                    <audio controls className={styles.music}>
                        <source src={`http://localhost:8000${favs.fav_music}`}  type="audio/mpeg"/>
                    </audio>
            </div>
            <div data-aos="fade-down" className="mb-12">
                <h3 className={styles.h3}>Favourite Quote</h3>
                    <blockquote className={styles.blockquote}>
                        {favs.fav_quote}
                    </blockquote>
            </div>
            <div data-aos="fade-down" className="mb-12">
                <h3 className={styles.h3}>Favourite TV-Series</h3>
                <div className={styles.fav_video}>
                    <video controls className={styles.video}>
                        <source src={`http://localhost:8000${favs.fav_video}`}  type="video/mp4" />
                    </video>
                </div>
                <p className="text-center text-gray-600 mt-4">The "Game of Thrones" intro is one of my favorite parts of the show. As soon as the iconic music begins, I get swept up into the world of Westeros.</p>
            </div>
            <div data-aos="fade-down" className="mb-12">
                <h3 className={styles.h3}>Favourite Book</h3>
                <div className={styles.fav_book}>
                <p className="text-black"><strong>Title:</strong>{favs.fav_book}</p>
                <p className="text-black mt-2">A book that changed my perspective on life.</p>
            </div>
            </div>
        </div>
    );
}
export default Favourite;