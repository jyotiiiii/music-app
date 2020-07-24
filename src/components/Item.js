import React from 'react';
import play from '../images/play.png';

import { Card, Col, Row } from 'react-bootstrap';

const Item = (props) => {

    const {
        name,
        img,
        onClick,
    } = props;

    return (
        <>
            <Row>
                <Col md={4} className="right middle">
                    <img onClick={onClick} src={img} alt={name} height="90px" width="100px" objectfit="cover" />
                </Col>
                <Col md={8}>
                    <Card style={{ width: '80%' }}>
                        <Card.Body className="grey">
                            <img onClick={onClick} className="inline" src={play} width="30px" alt={name} />
                            <Card.Text className="mb-2 text-muted padleft inline" >{name}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Item;