import React from 'react';
import styles from "./Header.module.css";
import Logo from "../assets/FE-2-design_favicon.png";
import { Button, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

const {Header: PureHeader} = Layout;

const Header = () => {
    return (
        <PureHeader className={styles.header}>
            <Link to="/">
                <img className={styles.header__logo} src={Logo} alt="" />
            </Link>
            <div className={styles.header__right}>
                <div className={styles.header__img}>
                    <Button className={styles.header__button}>  
                        <Link to="/register">
                        <UserOutlined />
                            Log Out
                        </Link>
                    </Button>
                </div>
            </div>
        </PureHeader>
    )
}

export default Header;