import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCount, decreaseCount } from './redux/actions/actionCreator';
import Header from './components/Header';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import RoomPage from 'pages/RoomPage';
import Rooms from 'components/Rooms';
import Home from 'components/Home';

import { Layout, Flex } from 'antd';
const { Footer, Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
// const footerStyle = {
//   textAlign: 'center',
//   color: '#fff',
//   backgroundColor: '#4096ff',
// };
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%',
  // height: '100vh'
};
const App = () => (
  <>
    <Layout>
      <Header></Header>
      <Content>
        <Routes>
           <Route exact path="/" element={<HomePage />} />
           <Route path="/register" element={<RegisterPage />} />
           <Route path="/rooms" element={<Rooms />} />
           <Route path= "/rooms/:id" element={<RoomPage />} />
       </Routes>
      </Content>
      {/* <Footer style={footerStyle}>Footer</Footer> */}
    </Layout>

  </>
);
export default App;




// function App() {
//                   const count = useSelector(store => store?.counter?.count);
//                   const dispatch = useDispatch();
//                   const handleIncrease = () => {
//                     dispatch(increaseCount());
//                   }

//                   const handleDecrease = () => {
//                     dispatch(decreaseCount());
//                   }
//                   const store = useSelector(store => store);
//                   console.log(store);
//   return (
//     <div className="App">
//       <Header />
//       <Routes>
//         <Route exact path="/" element={<HomePage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/rooms" element={<Rooms />} />
//         <Route path= "/roompage" element={<RoomPage />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
