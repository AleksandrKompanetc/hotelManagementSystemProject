import styles from "./Banner.module.css";
import Rooms from "./Rooms";

const Banner = () => {
    return (
        <div className={styles.banner_background}>
            <div className={styles.banner}>
                <Rooms />
            </div>
        </div>
    )
}

export default Banner;