import Banner from './Banner';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <Banner />
        </div>
    )
}

export default Home;