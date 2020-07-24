import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Track from './Track'

const Jumbo = ({ item, showing, onClick }) => {



    return (
        <> {showing && <Jumbotron>
            <Container fluid>
                <h1>{item.name}</h1>
                <Track onClick={onClick} />

            </Container>
        </Jumbotron>
        }
        </>)
}



export default Jumbo;