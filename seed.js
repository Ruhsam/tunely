// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var albumsList =[
  // put data here!
  {
                //_id: //132,
                artistName: 'Nine Inch Nails',
                name: 'The Downward Spiral',
                releaseDate: '1994, March 8',
                genres: [ 'industrial', 'industrial metal' ]
             },
  {
                //_id: //133,
                artistName: 'Metallica',
                name: 'Metallica',
                releaseDate: '1991, August 12',
                genres: [ 'heavy metal' ]
             },
  {
                //_id: //134,
                artistName: 'Prodigy',
                name: 'Music for the Jilted Generation',
                releaseDate: '1994, July 4',
                genres: [ 'electronica', 'breakbeat hardcore', 'rave', 'jungle' ]
             },
  {
                //_id: //135,
                artistName: 'Johnny Cash',
                name: 'Unchained',
                releaseDate: '1996, November 5',
                genres: [ 'country', 'rock' ]
              }
];

db.Album.remove({}, function(err, albums){

  db.Album.create(albumsList, function(err, albums){
    if (err) { return console.log('ERROR', err); }
    console.log("all albums:", Album);
    console.log("created", Album.length, "albums");
    process.exit();
  });

});
