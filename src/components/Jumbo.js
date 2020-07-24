import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Track from './Track'

import './App.css';

const Jumbo = (props) => {

    const {
        name,
        onClick,
        showing,
        item
    } = props;

    return (
        <Jumbotron className="centre">
            <Container fluid>
                <h1>{name}</h1>
                {item &&
                    <Track item={item} showing={showing} onClick={onClick} />}
            </Container>
        </Jumbotron>

    )
}

export default Jumbo;