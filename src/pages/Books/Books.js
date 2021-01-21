import React from 'react';
import { Button } from 'antd';
import {Card, Col, Row} from 'antd';


const BookCard = () => {
    const {Meta} = Card;

    return (
    <>
    <div className="site-card-wrapper">
        <Row gutter={3,3}>
            <Col span={3}>
            <Card title="card" bordered={true}
                cover={<img alt="example" src="https://i.pinimg.com/originals/a5/b5/24/a5b5245385f97b06238c7051b3fd1586.jpg" />}>
            </Card>
            </Col>
        </Row>
    </div>
    
    </>
    )
}


const Books = () => {
           
    return (
        <div>
        <center><Button type="primary">Tambah</Button></center>
        <center><Button type="primary">Kurang</Button></center>
        {/* <p onClick={() => gantiJudul()}>{title}</p>     */}
        <BookCard/>
        </div>
    )
}


export default Books;