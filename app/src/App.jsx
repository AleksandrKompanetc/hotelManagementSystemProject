import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import RoomPage from 'pages/RoomPage';
import Rooms from 'components/Rooms';
import { Layout } from 'antd';

const { Footer, Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%',
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
    </Layout>

  </>
);

export default App;

