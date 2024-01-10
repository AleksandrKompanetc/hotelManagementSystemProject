import React from 'react';
import RoomCard from './RoomCard';
import data from "../firebase-data.json";
import styles from "./Rooms.module.css"
import { Table, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';

const Rooms = () => {
    const columns = [
      {
        title: 'Number',
        dataIndex: 'number',
        key: 'number',
        width: '10%',
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        filters: [
          {
            text: 'Standard',
            value: 'Standard',
          },
          {
            text: 'Suite',
            value: 'Suite',
          },
          {
            text: 'Deluxe',
            value: 'Deluxe',
          },
        ],
        filterMode: 'tree',
        filterSearch: true,
        onFilter: (value, record) => record.name.startsWith(value),
        width: '10%',
      },
      {
        title: 'Occupancy',
        dataIndex: 'occupancy',
        key: 'occupancy',
        filters: [
          {
            text: '2',
            value: '2',
          },
          {
            text: '3',
            value: '3',
          },
          {
            text: '4',
            value: '4',
          },
        ],
        filterMode: 'tree',
        filterSearch: true,
        onFilter: (value, record) => record.name.startsWith(value),
        width: '20%',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        sorter: (a, b) => a.age - b.age,
        width: '10%',
      },
      {
        title: 'Guest',
        dataIndex: 'guest',
        filters: [
          {
            text: 'Golden Branch',
            value: 'Golden Branch',
          },
          {
            text: 'Ratliff Schwartz',
            value: 'Ratliff Schwartz',
          },
          {
            text: 'Merritt Page',
            value: 'Merritt Page',
          },
          {
            text: 'Maggie Rollins',
            value: 'Maggie Rollins',
          },
          {
            text: 'Barker Frost',
            value: 'Barker Frost',
          },
          {
            text: 'Macias Nash',
            value: 'Macias Nash',
          },
          {
            text: 'Natalia Soto',
            value: 'Natalia Soto',
          },
          {
            text: 'Page Walton',
            value: 'Page Walton',
          },
          {
            text: 'Shelia Sanders',
            value: 'Shelia Sanders',
          },
          {
            text: 'Morgan Reed',
            value: 'Morgan Reed',
          },
          {
            text: 'Delgado Santana',
            value: 'Delgado Santana',
          },
          {
            text: 'Horne Downs',
            value: 'Horne Downs',
          },
        ],
        onFilter: (value, record) => record.address.startsWith(value),
        filterSearch: true,
        width: '20%',
      },
      { 
        title: '',
        dataIndex: 'id',
        key: 'x',
        width: '10%',
        render: (id) => (
          <Link to={`/rooms/${id}`}>
            <Button type="primary">More information</Button>
          </Link>),
      }
    ];
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };

    return (
        <div className={styles.table_background}>
          <div className={styles.room_buttons}>
          <Button type="primary" className={styles.clear_button}>Clear all filters</Button>
          <Checkbox>Free rooms only</Checkbox>
          </div>
          <div className={styles.room_table}>
            <Table columns={columns} dataSource={data.Rooms} onChange={onChange} />
          </div>
        </div>
    )
}

export default Rooms;
