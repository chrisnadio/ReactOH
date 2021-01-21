import React from 'react';
import {Card, Col, Row} from 'antd';


const BPCard = () => {
    const {Meta} = Card;

    return (
         (
    <div className="site-card-wrapper">
        
        {/* <Link to="./bpcard">
            <center><Button type="primary">BP CARD</Button></center>
        </Link> */}

        <Row gutter={16,16}>
            <Col span={6}>
            <Card title="Max Verstappen" bordered={true}
                cover={<img alt="example" src="https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.320.medium.jpg/1584012927837.jpg" />}>
            </Card>
            </Col>
            <Col span={6}>
            <Card title="Sebastian Vettel" bordered={true}
                cover={<img alt="example" src="https://www.formula1.com/content/fom-website/en/drivers/sebastian-vettel/_jcr_content/image.img.640.medium.jpg/1602844457605.jpg" />}>
            </Card>
            </Col>
            <Col span={6}>
            <Card title="Carlos Sainz" bordered={true}
                cover={<img alt="example" src="https://www.formula1.com/content/fom-website/en/drivers/carlos-sainz/_jcr_content/image.img.640.medium.jpg/1602844694634.jpg" />}>
            </Card>
            </Col>
            <Col span={6}>
            <Card title="Daniel Ricciardo" bordered={true}
                cover={<img alt="example" src="https://www.formula1.com/content/fom-website/en/drivers/daniel-ricciardo/_jcr_content/image.img.320.medium.jpg/1602844653480.jpg" />}>
            </Card>
            </Col>
        </Row>
    </div>
        )
    )
}

export default BPCard;