import React, {useState} from 'react';
import { Button } from 'antd';
import {Col, Row} from 'antd';
import imgKodok from '../../assets/images/keropi.png';
import Card2 from '../BPCard/Card2';
import {Book} from '../utility/constant';

const Books = () => {
    const [data, setData] = useState(Book);

    const handleAdd = () => {
        const newData = {
            id: data.length + 1,
            name: 'Book',
            img: imgKodok,
            }
        const newArr = [...data]
        let result = newArr.concat(newData);
        setData(result);
    };

    const handleRemove = () => {
        const newArr = [...data];
        // let result = newArr.slice(0,newArr.length - 1);
        let result = newArr.slice(0, -1);
        setData(result);
    };


    return (
    <>
        <h1>Ini Tambah Buku</h1>
        <Button type="primary" onClick={handleRemove}>Kurang</Button>
        <Button type="primary" onClick={handleAdd}>Tambah</Button>
        <Row justify = "space-between">
           {data.map((list, index) => (
           <ul key = {index}>
               <li key = {index}>
                <Col>
                    <Card2
                         name={list.name}
                         id={list.id}
                         img={list.img}
                    />
                </Col>
               </li>
            </ul>
           ))}     
        </Row>
    </>
    )
}

export default Books;