import styles from "./Banner.module.css";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Rooms from "./Rooms";

const Banner = () => {
    return (
        <div className={styles.banner_background}>
            <div className={styles.banner}>
                <Rooms />
            </div>
            <div className="booking__div">

            </div>
        </div>
    )
}

export default Banner;