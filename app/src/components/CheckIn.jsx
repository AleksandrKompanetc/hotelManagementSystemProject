import React from 'react';
import styles from "./CheckIn.module.css";
import { Input } from "antd";
import { CloseOutlined, UserOutlined } from '@ant-design/icons';
import { DatePicker, Button } from 'antd';

const CheckIn = ({ closeModal }) => {
    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.header}>
                    <div className={styles.header_title}>Check In</div>
                    <div className={styles.header_button}><CloseOutlined onClick={() => closeModal(false)} /></div>
                </div>
                <div className={styles.checkin}>
                        <div className={styles.checkin_name}>
                            <p>Please, enter the guest's name:</p>
                            <Input className={styles.checkin_input} placeholder="Guest's Name" prefix={<UserOutlined />} />
                        </div>
                        <div className={styles.checkin_date}>
                            <p>Please, enter the approximate date of guest checkout:</p>
                            <DatePicker className={styles.checkin_datepicker} />
                        </div>
                </div>
                <div className={styles.buttons}>
                    <Button className={styles.cancel_button} onClick={() => closeModal(false)}>Cancel</Button>
                    <Button className={styles.checkin_button}>Check In</Button>
                </div>
            </div>
        </div>
    )
}

export default CheckIn;