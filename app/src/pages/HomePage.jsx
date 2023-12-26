import { useEffect } from "react";
import Header from "components/Header";
import Home from "components/Home";

const HomePage = () => {
    return (
        <div>
            <Home />
        </div>
    )
}

export default HomePage;



// useEffect(() => {
//     window.location.replace('/register')
// }, [])

// return (
//      <div>
//         <h1>Welcome</h1>
//      </div>
// )