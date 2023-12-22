# Assignment 2 - Web API.

Name: Mark Hogan 20098168

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + extended the endpoints in the api
 + Added actors endpoint
 + actors credits endpoint{paramitorized}
 + actor details {paramitorized}
 + movies top rated endpoint
 + movies popular endpoint
 + movies by id {paramitorized}
 + movies now playing endpoint
 + tv shows discover endpoint
 + tv show endpoint {paramitorized}

 + log in page on app
 + sign up page
 + error message with unathorized users

## Setup requirements.

all standerd

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:
i added my own tmdb key
______________________
TMDB_KEY=my key
NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/upcoming | GET | gets upcoming movies
- /api/movies/top_rated | GET | gets top rated movies
- /api/movies/popular | GET | gets most popular movies
- /api/movies/now_playing | GET | gets movies now plaing 
- /api/actors  | GET | gets all the actors
- /api/actors/person/:{name} | GET | gets specific acter by name
- /api/actors/person/credits/{name} | GET | gets a actors credits by name 
- /api/tvShows/discover | GET | gets all tv shows relavant
- /api/tvShows/tv/{id} | GET | gets tv show with id

## Security and Authentication
There is a password type that makes the password have to be 8 characters using numbers and symbols;

## Integrating with React App

using the login and sign up set up in the api i created a login and signup page which uses localhost:8080 where the api server is running.
then i used localhost:8080 again to fetch data from the server for all the endpoints to be displayed on the frontend

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.   