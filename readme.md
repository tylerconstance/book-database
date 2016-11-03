# Book Database.

I followed [this](http://mph-web.de/build-a-restful-api-using-hapi-js-and-mongodb/) tutorial to refresh myself on writing an API with Hapi.js.

## Usage
* Run `mongod` in one terminal window
* Run `node server.js` in another
* Navigate to `localhost:3000` in a web browser
* Fill in all fields and press the button to add an item to the database.
* Navigate to `localhost:3000/books` to see all books in the database.

## Notes

This did a pretty good job of setting up the API, but didn't really get into using it, so I added the Inert package, set up an unstyled front end, and used AJAX to send POST requests to the API.

There's plenty more I could do, especially in the realm of preventing duplicate entries. It would also be nice to use the other endpoints for patching and deleting items. But I got it all working and gave myself a refresher on full-stack javascript, and that was really my objective.

Tutorials are great, but my aim is for my next project on here to be original; I'll need to test myself to really learn this stuff.
