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

	useEffect(() => {
		// TODO this cors-anywhere url is a workaround for dev stage MVP only
		const url = 'https://cors-anywhere.herokuapp.com/https://openwhyd.org/hot/all?format=json';
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

	return (
		<>
			<NavBar />
			<Jumbo showing={showing} onClick={() => { setShowing(!showing) }} />
			<Container fluid>
				<h1>What's hot:</h1>
				{/* <Item showing={showing} item={music} onClick={() => { setShowing(!showing) }} /> */}



				{music.length > 0 ? (
					music.map((item) => (
						<Item

							onClick={() => { setShowing(!showing) }}
							{...item}
							key={item.eId}
						/>
					))
				) : (
						<small>
							No results found
							<span role="img" aria-label="sad face">
								😢
                </span>
						</small>
					)}











			</Container>
		</>
	);
}

export default App;
