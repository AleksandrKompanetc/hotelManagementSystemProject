import styles from "./Banner.module.css";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className={styles.banner}>
                <div className={styles.banner__info}>
                    <h4>Enjoy Your Vacation</h4>
                    <h1>Let us plan you a perfect Holiday</h1>
                    <Button>
                        <Link to="/rooms">
                            Rooms
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="booking__div">

            </div>
        </div>
    )
}

export default Banner;