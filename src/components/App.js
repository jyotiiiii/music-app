import React from 'react';
import Card from './Card';
import { Container, Navbar } from 'react-bootstrap';

function App() {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">
					<img
						alt=""
						src="/logo.svg"
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>{' '}
      Music App
    </Navbar.Brand>
			</Navbar>
			<Container fluid>
				<h1>What's hot:</h1>
				<Card />
			</Container>
		</>
	);
}

export default App;
