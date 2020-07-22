import React, { useState, useEffect } from 'react';
import Track from './Track';

function Card() {
    const [music, setMusic] = useState([]);

    useEffect(() => {
        // blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
        const url = 'https://openwhyd.org/hot/electro?format=json';

        fetch(url).then((response) => {
            return response.json()
        }).then((data) => {

            setMusic(data.tracks);
        })
            .catch((error) => console.error(error));
    }, [])


    const renderItems = () =>
        music.map((item) => <Track key={item._id} item={item} />)
    return (
        <ul>
            {renderItems()}
        </ul>
    );
}

export default Card;
