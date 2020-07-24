import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import data from '../sa./MusicCardta.json';

import NavBar from './NavBar';
import Jumbo from './Jumbo';
import Item from './Item';

import { Container } from 'react-bootstrap';

function App() {
	const [music, setMusic] = useState([]);
	const [showing, setShowing] = useState(false);
	const [currentItem, setCurrentItem] = useState(false);

	useEffect(() => {
		// Wrapped the API call with a temporary cors-anywhere request in order to add the required CORS headers
		// Future implementation would utilise a dedicated backend API that we call (which in turn called the OpenWhyd API) 
		const url = 'https://cors-anywhere.herokuapp.com/https://openwhyd.org/hot/all?format=json';
		// const url = 'https://openwhyd.org/hot/all?format=json';
		axios.get(url).then((response) => {
			console.log(response.data);
			return response.data;
		})
			.then((data) => {
				setMusic(data.tracks);
			})
			.catch((error) => {
				console.error("Failed to fetch hot electro tracks", error)
			});
	}, [])


	// Using sample data array to work on all 7 possible platforms
	// useEffect(() => {
	//     // TODO this using sample data

	//     setMusic(data.tracks)
	// }, [])

	console.log({ currentItem })
	return (
		<>
			<NavBar />

			<Jumbo item={currentItem} showing={showing} onClick={() => { setShowing(!showing) }} />

			<Container fluid>
				<h1>What's hot:</h1>
				{/* <Item showing={showing} item={music} onClick={() => { setShowing(!showing) }} /> */}

				{music.length > 0 ? (
					music.map((item) => (
						<Item
							onClick={() => {
								setCurrentItem(item);
								window.scrollTo(0, 0);
							}}
							{...item}
							key={item.eId}
						/>
					))
				) : (
						<p>No results found</p>
					)}

			</Container>
		</>
	);
}

export default App;
