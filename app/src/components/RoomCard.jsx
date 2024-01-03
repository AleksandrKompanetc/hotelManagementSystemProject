import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
// const { Meta } = Card;
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



{/* <Link to={`/posts/${id}`}>
  
  </Link> */}








// import React from 'react';
// import { Link } from "react-router-dom";

// const Room = ({type, id, price}) => {
//     return (
//             <>
//                 <div>{type}</div>
//                 <div>{price}</div>
//             </>
//         )
// }

// export default Room;