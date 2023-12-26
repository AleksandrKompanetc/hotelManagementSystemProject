import React from 'react';
import styles from "./Header.module.css";
import Logo from "../assets/FE-2-design_favicon.png";
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { SignUp } from './SignUp';

const Header = () => {
    return (
        <div className={styles.header}>
            <Link to="/">
                <img className={styles.header__logo} src={Logo} alt="" />
            </Link>
            <div className={styles.header__right}>
                <div className={styles.header__img}>
                    <Button className={styles.header__button}>
                        <Link to="/register">
                            Log In
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Header;