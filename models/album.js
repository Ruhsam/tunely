var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var song = require('./song.js');

//models/album.js
var AlbumSchema = new Schema({
  artistName: String,
  name: String,
  song: {type: Schema.Types.ObjectId, ref: 'song'},
  releaseDate: String,
  genres: [ String ]
});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;

//module.exports.Album = require("./album.js");
