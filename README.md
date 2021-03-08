## To run project
### `npm install`
### `npm start`

Project is hosted [here](https://swym-typing-test.netlify.app)

## About
Typing test is a basic React js project which uses Redux and React Router for some usual functionalities.

## Redux
Have used Redux for managing state between 3 different pages and all the components.
Props could have been used to communicate between components but that would have made code bit complicated, so this added some boilerplate but kept the code clean no props were required.

## React Router
To manage routing between pages I have used React Router.

When web app is deployed on server, it generally don't get the page after refresh on routes other than './', so have used Hashrouter.
The reason being when ever browser hits the server its gets index.html file, but server is probably only configured to send index.html upon GET '/'. The idea is by appending a # to the end of the root of your URL, anything after that # won’t be sent to the server.