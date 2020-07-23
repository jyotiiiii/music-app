import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import data from '../sampledata.json';
import Track from './Track';

function Card() {
    const [music, setMusic] = useState([]);

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

    const renderItems = () =>
        music.map((item) => <Track key={item._id} item={item} />)
    return (
        <ul>
            {renderItems()}
        </ul>
    );
}

export default Card;
