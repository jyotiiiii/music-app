import React from 'react';
// Styles
import './Track.css';


// TODO find another way of getting the album id
// Don't have access to the album id from the openwhyd API
// Some have album id and track id some have album id only
const BandCampTrack = ({ id }) => (
    <iframe frameborder="no" width="100%" height="120px" title={id} src={`https://bandcamp.com/EmbeddedPlayer/album=1308147662/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/track=${id}/transparent=true/`} seamless />
)

// "eId": "/dm/x1hszbm"
const DailyMotionTrack = ({ id }) => (
    <iframe width="100%" height="100%" position="absolute" left="0px" top="0px" overflow="hidden"
        frameborder="0" type="text/html" src={`https://www.dailymotion.com/embed/video/${id}`}
        allowfullscreen title={id} />

)

const DeezerTrack = ({ id }) => (
    <iframe scrolling="no"
        title={id}
        frameborder="0"
        allowTransparency="true"
        src={`https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=${id}&app_id=1`}
        width="700" height="350" />
)

// const Mp3Track = () => (
// "eId": "/fi/http://www.beggarspromo.com/PromoSecure/OkayKayaImStupidButILoveYou.mp3?_=1438377495593"
//     <>
//         <div>
//             <audio ref="audio_tag" src="http://www.beggarspromo.com/PromoSecure/OkayKayaImStupidButILoveYou.mp3?_=1438377495593" controls autoPlay />
//         </div>
//     </>

// )

const SoundCloudTrack = ({ id }) => {

    const src = `https://w.soundcloud.com/player/?url=${id}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`;
    return <iframe width="50%"
        height="166" title={id} scrolling="no" frameBorder="no" allow="autoplay"
        src={src} />
}

const VimeoTrack = ({ id }) => (
    <iframe src={`https://player.vimeo.com/video/${id}?color=c9ff23&title=0&byline=0&portrait=0`}
        position="absolute" top="0" left="0" width="100%" height="100%" frameborder="0" allow="autoplay" fullscreen
        allowfullscreen title={id}></iframe>
)

const YouTubeTrack = ({ id }) => (
    <iframe title={id}
        width="560" height="315"
        src={`https://www.youtube.com/embed/${id}`}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    />
)


const Track = ({ item }) => {
    // console.log(props);



    // looks for the platform identifier 
    const platformId = item.eId.substr(1, 2);
    let trackComponent;
    if (platformId === 'bc') {
        const idIndex = item.eId.indexOf('id=');
        const id = item.eId.substr(idIndex + 3, 10);
        trackComponent = <BandCampTrack id={id} />
    } else if (platformId === 'dz') {
        const id = item.eId.substr(4)
        trackComponent = <DeezerTrack id={id} />
    } else if (platformId === 'dm') {
        const id = item.eId.substr(4)
        trackComponent = <DailyMotionTrack id={id} />
    } else if (platformId === 'sc') {
        const hashIndex = item.eId.indexOf('#');
        const streamUrl = item.eId.substr(hashIndex + 1);
        const id = streamUrl.substr(0, streamUrl.length - '/stream'.length)
        trackComponent = <SoundCloudTrack id={id} />
    } else if (platformId === 'vi') {
        const id = item.eId.substr(4)
        trackComponent = <VimeoTrack id={id} />
    } else if (platformId === 'yt') {
        const id = item.eId.substr(4)
        trackComponent = <YouTubeTrack id={id} />
    } else {
        trackComponent = <p>Sorry this platform is not supported</p>
    }

    return (
        <>
            {trackComponent}


        </>
    )
};

export default Track;















