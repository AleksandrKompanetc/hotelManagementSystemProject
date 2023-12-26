import React from 'react';
import data from "../";
import { useParams } from 'react-router-dom';


const RoomPage = () => {
    const {id} = useParams();
    const selectedElement = data.find(el => el.id == id);

    return (
        <div>
            Room
            <h1 className={styles.postPageTitle}>{selectedElement.id}</h1>
            <img className={styles.postPageImg} src={selectedElement.imageUrl} alt="..." />
            <div className={styles.postPageDescription}>{selectedElement.description}</div>
            <div className={styles.type}>
                <h3>Experts Comment</h3>
                <div className={styles.postPageComment}>{selectedElement.expertComment}</div>
            </div>
        </div>
    )
}

export default RoomPage;