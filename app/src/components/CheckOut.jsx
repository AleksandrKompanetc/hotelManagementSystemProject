import React from 'react';
import styles from "./CheckIn.module.css";
import { Input } from "antd";
import { CloseOutlined, UserOutlined } from '@ant-design/icons';
import { DatePicker, Button } from 'antd';

const CheckOut = ({ number, closeModal }) => {
    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.header}>
                    <div className={styles.header_title}>Check Out</div>
                    <div className={styles.header_button}><CloseOutlined onClick={() => closeModal(false)} /></div>
                </div>
                <div className={styles.content}>
                    <p className={styles.text}>Do you confirm the check-out Room {number} ?</p>
                </div>
                <div className={styles.buttons}>
                    <Button className={styles.cancel_button} onClick={() => closeModal(false)}>Cancel</Button>
                    <Button className={styles.checkout_button}>Confirm</Button>
                </div>
            </div>
        </div>
    )
}

export default CheckOut;