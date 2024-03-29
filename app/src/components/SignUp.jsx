import {useDispatch} from "react-redux";
import {Form} from "./Form";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {setUser} from "store/slices/userSlice";
import styles from "./SignUp.module.css";

const SignUp = () => {
    const dispatch = useDispatch();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.id,
                token: user.accessToken,
            }));
        })
        .catch(console.error)
    }

    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <Form
                title="Log in" 
                handleClick={handleRegister}
                />
            </div>
        </div>
    )
}

export {SignUp};