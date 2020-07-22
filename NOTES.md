<!-- TODO
wireframe app
set up file structure
fetch data from API
 -->

## Contents

#### Planning the application

###### Wireframe

<img src="https://github.com/jyotiiiii/music-app/blob/master/src/wireframe.jpg?raw=true" alt="Wireframe" width="450"/>

#### Organising the project

Components

```
App
|__Header
| |__Logo
| |__Genre
|__Card
| |__Track
|   |__Image
|   |__Title
|   |__Artist
|   |__Favourite //not MVP
|__Footer
| |__Logo
```

This is the structure I'm proposing for the app although all the Track components might not be neccesary

#### Building the application

###### Source Platforms

Syntax of “eId” identifiers

The “eId” field contains the unique identifier of the track/video on its hosting source. (e.g. youtube/soundcloud/vimeo):

/yt/xxx is a YouTube identifier
(i.e. it translates to https://youtube.com/watch?v=xxx)

/sc/xxx#http://yyy is the SoundCloud URI of a track, followed by the URL of its audio stream

/bc/xxx#http://yyy is the BandCamp identifier of a track, followed by the URL of its audio stream

/vi/xxx is a Vimeo track identifier

/dz/xxx is a Deezer track identifier

/dm/xxx is a Dailymotion video identifier

/fi/http... is the URL of a MP3 / audio file

#### Design resources
