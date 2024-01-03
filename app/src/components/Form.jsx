import { useState } from "react";
import styles from "./Form.module.css";
import { Button, Checkbox, Input } from 'antd';

const Form = ({title, handleClick}) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.header}>
                    <h3>Authentication</h3>
                </div>
                <div className={styles.box}>
                    <label for="Username">Username</label>
                    <Input type="email"
                    name="Username"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className={styles.box}>
                    <label for="Password">Password</label>
                    <Input type="password"
                    name="Password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    />
                </div>

                <div className={styles.checkbox}>
                    <Checkbox /> Remember me
                </div>

                <div className={styles.button_container}>
                <Button
                    className={styles.button}
                    onClick={() => handleClick(email, pass)}>
                    {title}
                </Button>
                </div>
            </div>
        </>
    )
}

export {Form};