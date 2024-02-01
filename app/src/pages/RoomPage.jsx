import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from "./RoomPage.module.css";
import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import CheckIn from 'components/CheckIn';
import CheckOut from 'components/CheckOut';
import db from 'firebaseConfig';


const RoomPage = () => {
    const {id} = useParams();

    const [openCheckin, setOpenCheckin] = useState(false);
    const [openCheckout, setOpenCheckout] = useState(false);
    const [rooms, setRooms] = useState([]);
    console.log(rooms, 'rooms', id)

    const articles = rooms.find(el => el.id == id) || {};
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await db.ref('Rooms').once('value');
                const dataFromFirebase = snapshot.val();
                setRooms(dataFromFirebase);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.room_page}>
            {openCheckin && <CheckIn closeModal={setOpenCheckin}/>}
            {openCheckout && <CheckOut number={articles.number} closeModal={setOpenCheckout}/>}
            <Link to="/">
                <div className={styles.room_button}>
                    <button className={styles.back_button}><HomeOutlined /> Back Home</button>
                </div>
            </Link>
            <div className={styles.room_content}>
                <div className={styles.room_image}>
                    <img className={styles.room_img} src={articles.gallery?.[1]} alt="" />
                </div>
                <div className={styles.room_info}>
                    <p className={styles.room_text}>
                            <p className={styles.room_number}>Room {articles.number}</p>
                            <ul className={styles.text_list}>
                                <li className={styles.list_item}><strong>Type:</strong> {articles.type}</li>
                                <li className={styles.list_item}><strong>Occupancy:</strong> {articles.occupancy}</li>
                                <li className={styles.list_item}><strong>Price:</strong> {articles.price}</li>
                                <li className={styles.list_item}><strong>Guest:</strong> {articles.guest}</li>
                            </ul>
                    </p>
                    <div className={styles.room_check}>
                        <div className={styles.room_buttons}>
                        <Button className={styles.check_button} 
                        onClick={() => {setOpenCheckin(true)}}>
                            Check In
                        </Button>
                        <Button className={styles.check_button}
                        onClick={() => {setOpenCheckout(true)}}>
                            Check Out
                        </Button>
                        </div>
                        <div>
                            <div className={styles.feature_title}>Features:</div>
                            <p className={styles.feature_text}>{articles.features}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.description}>
                <div className={styles.description_title}>Description:</div>
                <div className={styles.description_text}>{articles.description}</div>
            </div>
        </div>
    )
}

export default RoomPage;