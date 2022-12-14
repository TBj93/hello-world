## ChatPro

## Description

This is a basic chat app. It runs on expo using React native and hosts files sent via the chat app on google firebase. It uses Gitlibrary as an UI.

Here you can download a demo video: 

[Demo Video](https://youtu.be/7Qg4VieA6qw)


![This is an image](https://github.com/TBj93/hello-world/blob/master/screenshots/photo_2022-08-22_05-29-25.jpg?raw=true)




## Features and Requirements
### User Stories
● As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my
friends and family.

● As a user, I want to be able to send messages to my friends and family members to exchange
the latest news.

● As a user, I want to send images to my friends to show them what I’m currently doing.

● As a user, I want to share my location with my friends to show them where I am.

● As a user, I want to be able to read my messages offline so I can reread conversations at any
time.

● As a user with a visual impairment, I want to use a chat app that is compatible with a screen
reader so that I can engage with a chat interface.
Key Features

● A page where users can enter their name and choose a background color for the chat screen
before joining the chat.

● A page displaying the conversation, as well as an input field and submit button.

● The chat must provide users with two additional communication features: sending images

and location data.

● Data gets stored online and offline.

![This is an image](https://github.com/TBj93/hello-world/blob/master/screenshots/photo_2022-08-22_05-29-59.jpg?raw=true)

### Technical Requirements


● The app must be written in React Native.
● The app must be developed using Expo.
● The app must be styled according to the given screen design.
● Chat conversations must be stored in Google Firestore Database.
● The app must authenticate users anonymously via Google Firebase authentication.
● Chat conversations must be stored locally.
● The app must let users pick and send images from the phone’s image library.
● The app must let users take pictures with the device’s camera app, and send them.
● The app must store images in Firebase Cloud Storage.
● The app must be able to read the user’s location data.
● Location data must be sent via the chat in a map view.
● The chat interface and functionality must be created using the Gifted Chat library.
● The app’s codebase must contain comments.

## Technology used

● Html, Css, JS
● React Native
● Bootstrap
● Gitlibrary
● Expo


## Challenges I faced

The firebase security rules weren't automatically fitting for my needs to upload pictures to the database. I first checked for problems with cors in general, later found a good thread on stackoverflow describing my problem and solving it.

## Install

1. npm install --global expo-cli

2. clone repo with package.json file and run npm install

3. run on phone or android studio emulator

4. type npm start in project folder and follow the instructions

5. choose to run on phone or android studio emulator