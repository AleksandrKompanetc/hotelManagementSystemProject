import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCount, decreaseCount } from './redux/actions/actionCreator';
import Header from './components/Header';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import RoomPage from 'pages/RoomPage';
import Home from 'components/Home';

function App() {
  // const count = useSelector(store => store?.counter?.count);
  // const dispatch = useDispatch();
  // const handleIncrease = () => {
  //   dispatch(increaseCount());
  // }

  // const handleDecrease = () => {
  //   dispatch(decreaseCount());
  // }
  // const store = useSelector(store => store);
  // console.log(store);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path= "/rooms/:id" element={<RoomPage />} />
      </Routes>
    </div>
  );
}

export default App;
