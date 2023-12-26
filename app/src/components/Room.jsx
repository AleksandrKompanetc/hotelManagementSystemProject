import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Room.module.css";

const Room = ({title, id, description}) => {
    return (
        <div className={styles.room_wrapper}>
            <Link to={`/posts/${id}`}>
                Room
                <h5 className={styles.room_title}>{title}</h5>
                <p className={styles.room_description}>{description}</p>
            </Link>
        </div>
    )
}

export default Room;