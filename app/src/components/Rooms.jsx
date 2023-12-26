import React from 'react';
import { useState, useEffect } from 'react';
import Room from './Room';
import styles from "./Rooms.module.css";
import {default as data} from "../data.json"

const Rooms = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setPosts(data);
    }, []);

    return (
        <div className={styles.rooms_wrapper}>
            {
                posts.map((item) => (
                    <Room title={item.title} id={item.id} description={item.description} />
                ))
            }
        </div>
    )
}

export default Rooms;


{/* <div className={styles.rooms_wrapper}>
            Rooms
            <h1 className={styles.postPageTitle}>{selectedElement.id}</h1>
            <img className={styles.postPageImg} src={selectedElement.imageUrl} alt="..." />
            <div className={styles.postPageDescription}>{selectedElement.description}</div>
            <div className={styles.type}>
                <h3>Experts Comment</h3>
                <div className={styles.postPageComment}>{selectedElement.expertComment}</div>
            </div>
        </div> */}