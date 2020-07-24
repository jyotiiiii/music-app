# Multi-platform Music App

## Get the app running

Clone this project and navigate to the directory

```
git clone https://github.com/jyotiiiii/music-app.git
cd music-app
npm start
```

## Using the app

Scroll down to browse titles
Click on thumbnail or play icon to play the media at the top of the browser

## Development Notes

#### Planning the application

###### Wireframe

<img src="https://github.com/jyotiiiii/music-app/blob/master/src/wireframe.jpg?raw=true" alt="Wireframe" width="600"/>

###### Components

<img src="https://github.com/jyotiiiii/music-app/blob/master/src/components.jpg?raw=true" alt="Wireframe" width="600"/>

#### Organising the project

Components

```
App
|__NavBar
|
|__Jumbo
| |__Track
|   |__BandCampTrack
|   |__DailyMotionTrack
|   |__DeezerTrack
|   |__Mp3Track
|   |__SoundCloudTrack
|   |__VimeoTrack
|   |__YouTubeTrack
|__Item

```

This is the structure I'm proposing for the app although all the Track components might not be neccesary

#### Building the application

###### Source Platforms

Syntax of “eId” identifiers

The “eId” field contains the unique identifier of the track/video on its hosting source. (e.g. youtube/soundcloud/vimeo):

1. /bc/xxx#http://yyy is the **BandCamp** identifier of a track, followed by the URL of its audio stream

2. /dm/xxx is a **Dailymotion** video identifier

3. /dz/xxx is a **Deezer** track identifier

4. /fi/http... is the URL of a **MP3** / audio file

5. /sc/xxx#http://yyy is the **SoundCloud** URI of a track, followed by the URL of its audio stream

6. /vi/xxx is a **Vimeo track** identifier

7. /yt/xxx is a **YouTube** identifier (i.e. it translates to https://youtube.com/watch?v=xxx)

###### Genres

For MVP I will pull from 'All' but would further implement user choice of genre

**All**
Electro
Hip hop
Pop
Indie
Folk
Rock
Punk
Metal
Blues
R&B
Soul
Jazz
Classical
Reggae
Latin
World

## Brief

### BBC interview task – Software Engineer

Being a frontend developer brings a lot of freedom, so we’ll often give you a problem
to solve, some frameworks to use, but allow you to do some creative thinking. This
test is all about showing your technical skills - but at the same time we’d like to see
some of your original thinking too!
Before we get on to the task itself, here’s a little bit about what we’re looking for.
How we’ll mark your work.

**So we can be completely transparent with you, here is the scheme we will be using to mark your work:**

 Must be fully operational. Any data not sourced from the API can be random, but the app must work.

 Must contain ReadMe file with clear instructions on how to get the app running.

 Must use React for front-end.

 Must use components with styling.

 Must look like a finished product.

 Must demonstrate workings; either commented out code, or a Read-Me file.

 Functional MVP

**We don’t want to see:**

 JQuery, or other outdated libraries.

 Patchwork code that has been copied and pasted.

**Extra marks if you have time for:**

 Creativity

 Code quality

 Browser compatibility (some thought to IE 11+ Support)

 Following the brief, and where needed, adding to it

 Unit Tests

 Responsive

 Accessibility of finished front end.

 Any other notes you feel relevant in your ReadMe file.

**Top tips:**

Describe any problems or issues as you go by adding them directly into your code,
commented out. This helps us understand your process and see where you may
have tried things that didn’t work, or really enjoyed something.
Styling libraries are welcome but not required.

### So, what’s the task?

Use React.js and Openwhyd API to create a little web based media browser.

(openwhyd.org – API on github : https://openwhyd.github.io/openwhyd/API )

- Use the API to pull track data from the Hot Tracks API
  https://openwhyd.github.io/openwhyd/API#hot-tracks

- A front end that displays the media playlists

- Show media information if possible

- Allows the user to consume/play the media

Great, what’s the deadline?
Submit your code by Friday 24thth July 2020. Email recruitment any attachments, a
link to your GitHub repo, and anything else you think we need to run your project.
We’d suggest spending at least 3 hours on this, but no longer than 7 or 8.

Remember we’re looking for an MVP here, we’ll be discussing part of this work at
interview, if there are additions or future extensions you can bring them up then.
You can spend a little longer on it if you really want to though, we can’t stop you!
