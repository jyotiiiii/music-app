import React, { useState } from 'react';

const YouTubeTrack = ({ id }) => (
    <iframe title={id}
        width="560" height="315"
        src={`https://www.youtube.com/embed/${id}`}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    />
)

const VimeoTrack = () => (
    <p>Vimeo</p>
)

const SoundCloudTrack = ({ eId }) => {

    const hashIndex = eId.indexOf('#');
    const streamUrl = eId.substr(hashIndex + 1);
    const embedUrl = streamUrl.substr(0, streamUrl.length - '/stream'.length)

    const src = `https://w.soundcloud.com/player/?url=${embedUrl}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`;
    return <iframe width="50%"
        height="166" title={eId} scrolling="no" frameborder="no" allow="autoplay"
        src={src} />
}







const Track = ({ item }) => {
    const [showing, setShowing] = useState(false);



    const platformId = item.eId.substr(1, 2);
    let trackComponent;
    if (platformId === 'yt') {
        const id = item.eId.substr(4)
        trackComponent = <YouTubeTrack id={id} />
    } else if (platformId === 'sc') {
        trackComponent = <SoundCloudTrack eId={item.eId} />
    } else {
        trackComponent = <p>Sorry this platform is not supported</p>
    }

    return (
        <div>
            <img onClick={() => { setShowing(!showing) }} src={item.img} alt={item.name} height="100px" />
            <p>{item.name}</p>
            {showing && trackComponent}
        </div>
    )
};

export default Track;