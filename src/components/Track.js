import React, { useState } from 'react';

const YouTubeTrack = ({ id }) => (
    <iframe title={id}
        width="560" height="315"
        src={`https://www.youtube.com/embed/${id}`}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"

    />
)


const VimeoTrack = ({ id }) => (
    <iframe src={`https://player.vimeo.com/video/${id}?color=c9ff23&title=0&byline=0&portrait=0`}
        position="absolute" top="0" left="0" width="100%" height="100%" frameborder="0" allow="autoplay" fullscreen
        allowfullscreen title={id}></iframe>
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


const DeezerTrack = ({ id }) => (
    <iframe scrolling="no"
        title={id}
        frameborder="0"
        allowTransparency="true"
        src={`https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=${id}&app_id=1`}
        width="700" height="350" />
)
// TODO find another way of getting the album id
// Don't have access to the album id from the openwhyd API
// Some have album id and track id some have album id only
const BandCampTrack = ({ eId }) => {

    const idIndex = eId.indexOf('id=');
    const embedUrl = eId.substr(idIndex + 3, 10);

    return <iframe frameborder="no" width="100%" height="120px" title={eId} src={`https://bandcamp.com/EmbeddedPlayer/album=1308147662/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/track=${embedUrl}/transparent=true/`} seamless />
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
    } else if (platformId === 'dz') {
        const id = item.eId.substr(4)
        trackComponent = <DeezerTrack id={id} />
    } else if (platformId === 'bc') {
        trackComponent = <BandCampTrack eId={item.eId} />
    } else if (platformId === 'vi') {
        const id = item.eId.substr(4)
        trackComponent = <VimeoTrack id={id} />
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