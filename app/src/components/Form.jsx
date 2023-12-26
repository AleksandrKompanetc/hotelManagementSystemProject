import { useState } from "react";
import styles from "./Form.module.css";
import { Button, Checkbox } from "antd";

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
                <input type="email"
                name="Username"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className={styles.box}>
                <label for="Password">Password</label>
                <input type="password"
                name="Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                />
            </div>

            <div className={styles.text}>
                <Checkbox /> Remember me
            </div>

            <Button
                className={styles.button}
                onClick={() => handleClick(email, pass)}>
                {title}
            </Button>
        </div>
        </>
    )
}

export {Form};