import React, { useState } from 'react';
import Track from './Track';

function Card() {
    const [music, setMusic] = useState([]);

    const renderItems = () =>
        music.map((item) => <Track key={item._id} item={item} />)
    return (
        <ul>
            {renderItems()}
        </ul>
    );
}

export default Card;
