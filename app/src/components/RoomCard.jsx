import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const RoomCard = ({type, number, id, price, img}) => (
  <div>
  <Link to={`/rooms/${id}`}>
    <Card
        hoverable
        style={{
          width: 400,
        }}
        cover={<img alt="example" src={img[1]} />}
      >
      <div>Number: {number}</div>
      <div>Type: {type}</div>
      <div>Price: {price}</div>
      </Card>
    </Link>
  </div>
);
export default RoomCard;