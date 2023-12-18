import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCount, decreaseCount } from './redux/actions/actionCreator';

function App() {
  const count = useSelector(store => store?.counter?.count);
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(increaseCount());
  }

  const handleDecrease = () => {
    dispatch(decreaseCount());
  }
  // const store = useSelector(store => store);
  // console.log(store);
  return (
    <div className="App">
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
