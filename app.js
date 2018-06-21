// Configuration
// -----------------------------------------------------------------------------
const express = require("express");
const hbs = require("hbs");

const app = express();

// make files in "public/" available through locahost:3000
app.use(express.static(__dirname + "/public"));

// use the "hbs" npm package for our templates
app.set("view engine", "hbs");

// make files in "views/partials/" available as partials
hbs.registerPartials(__dirname + "/views/partials")

// uncomment this if you want to change the name of the "views/" folder
// app.set("views", __dirname + "/othername");


// Routes
// -----------------------------------------------------------------------------
app.get("/", (request, response, next) => {
  const randomIndex = Math.floor(Math.random() * songs.length);

  // send data to the hbs file
  const data = {
    featured: songs[randomIndex]
  };
  response.render("home-page.hbs", data);
});

app.get("/playlist", (request, response, next) => {
  // send data to the hbs file
  response.locals.songList = songs;
  response.render("playlist-page.hbs");
});


app.listen(3000, () => {
  console.log("Server started!");
});


// Fake Database
// -----------------------------------------------------------------------------
const songs = [
  {
    title: "Dreams",
    artist: "Fleetwood Mac",
    photoUrl: "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG",
    comment: "From one of the greatest albums of all time"
  },
  {
    title: "Kokomo",
    artist: "The Beach Boys",
    photoUrl: "https://upload.wikimedia.org/wikipedia/en/4/4c/Kokomo.jpg"
  },
  {
    title: "Stayin' Alive",
    artist: "Bee Gees",
    photoUrl: "https://m.media-amazon.com/images/M/MV5BZjRiMjdlNjItYmQxOC00ZDI4LWExMjctOWRjMTA1NWU2MjMwXkEyXkFqcGdeQXVyNzA5MzkyOTM@._V1_.jpg",
    comment: "Good song for strutting"
  },
  {
    title: "Fools",
    artist: "Lauren Aquilina",
    photoUrl: "https://images.genius.com/af0257c9d12c4eea24103daba3ea08e4.960x960x1.jpg"
  },
  {
    title: "Hardcore Melancholia",
    artist: "La Vague",
    photoUrl: "http://radio.x-track.net/media/post/img/25d81eb798671c1fcb5624acc70d595f35e13167.jpeg"
  }
];
