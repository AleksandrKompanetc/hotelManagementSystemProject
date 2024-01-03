import { useParams } from 'react-router-dom';
import { useState } from 'react';
import data from "../firebase-data.json";
import styles from "./RoomPage.module.css";
import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import CheckIn from 'components/CheckIn';
import CheckOut from 'components/CheckOut';


const RoomPage = () => {
    const {id} = useParams();
    const selectedElement = data.Rooms.find(el => el.id == id);

    const [openCheckin, setOpenCheckin] = useState(false);
    const [openCheckout, setOpenCheckout] = useState(false);

    return (
        <div className={styles.room_page}>
            {openCheckin && <CheckIn closeModal={setOpenCheckin}/>}
            {openCheckout && <CheckOut number={selectedElement.number} closeModal={setOpenCheckout}/>}
            <Link to="/">
                <div className={styles.room_button}>
                    <button className={styles.back_button}><HomeOutlined /> Back Home</button>
                </div>
            </Link>
            <div className={styles.room_content}>
                <div className={styles.room_image}>
                    <img className={styles.room_img} src={selectedElement.gallery[1]} alt="" />
                </div>
                <div className={styles.room_info}>
                    <p className={styles.room_text}>
                            <p className={styles.room_number}>Room {selectedElement.number}</p>
                            <ul className={styles.text_list}>
                                <li className={styles.list_item}><strong>Type:</strong> {selectedElement.type}</li>
                                <li className={styles.list_item}><strong>Occupancy:</strong> {selectedElement.occupancy}</li>
                                <li className={styles.list_item}><strong>Price:</strong> {selectedElement.price}</li>
                                <li className={styles.list_item}><strong>Guest:</strong> {selectedElement.guest}</li>
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
                            <p className={styles.feature_text}>{selectedElement.features}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.description}>
                <div className={styles.description_title}>Description:</div>
                <div className={styles.description_text}>{selectedElement.description}</div>
            </div>
        </div>
    )
}

export default RoomPage;