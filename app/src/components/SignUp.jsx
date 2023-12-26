import {useDispatch} from "react-redux";
// import {useHistory} from "react-router-dom";
import {Form} from "./Form";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {setUser} from "store/slices/userSlice";

const SignUp = () => {
    const dispatch = useDispatch();
    // const {push} = useHistory();

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
            // push('/');
        })
        .catch(console.error)
    }

    return (
        <Form 
        title="Log in" 
        handleClick={handleRegister}
        />
    )
}

export {SignUp};