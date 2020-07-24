import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Track from './Track'

const Jumbo = (props) => {
    // console.log(props);
    const {
        name,
        onClick,
        showing,
        item
    } = props;

    console.log('Jumbo', item)
    return (
        <Jumbotron>
            <Container fluid>
                <h1>{name}</h1>
                {item &&
                    <Track item={item} showing={showing} onClick={onClick} />}

            </Container>
        </Jumbotron>

    )
}



export default Jumbo;