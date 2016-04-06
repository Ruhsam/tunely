/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
// var sampleAlbums = [];
// // sampleAlbums.push({
//              artistName: 'Ladyhawke',
//              name: 'Ladyhawke',
//              releaseDate: '2008, November 18',
//              genres: [ 'new wave', 'indie rock', 'synth pop' ]
//            });
// sampleAlbums.push({
//              artistName: 'The Knife',
//              name: 'Silent Shout',
//              releaseDate: '2006, February 17',
//              genres: [ 'synth pop', 'electronica', 'experimental' ]
//            });
// sampleAlbums.push({
//              artistName: 'Juno Reactor',
//              name: 'Shango',
//              releaseDate: '2000, October 9',
//              genres: [ 'electronic', 'goa trance', 'tribal house' ]
//            });
// sampleAlbums.push({
//              artistName: 'Philip Wesley',
//              name: 'Dark Night of the Soul',
//              releaseDate: '2008, September 12',
//              genres: [ 'piano' ]
//            });
/* end of hard-coded data */


function handleSuccess(json){
console.log(json);
json.forEach(renderAlbum);
}

function handleError(e) {
  console.log('uh oh');
  $('#albums').text('Something went wrong.');
}


$(document).ready(function() {
  console.log('app.js loaded!');
  $.ajax({
    url: '/api/albums',
    method: 'GET',
    success: handleSuccess,
    error: handleError
  });

  $('#album-form form').on ('submit', handleAlbumSubmit);
 });

function handleAlbumSubmit(e) {
  e.preventDefault();
  var formData =$(this).serialize();
  // $.post('/api/albums', formData, handleFormSubmitResponse);
  $.ajax({
  method: 'POST',
  url: '/api/albums',
  data: formData,
  success: handleFormSubmitResponse
});

$(this).trigger('reset');
}

function handleFormSubmitResponse(json) {
  console.log("success", json);
  renderAlbum(json);
}

  $( "#album-form" ).on( "submit", function( event ) {
  event.preventDefault();
  console.log( $( this ).serialize() );
  $(this).trigger('reset');
});

function renderAlbum(album) {
  console.log('rendering albums', album);
  var templateHtml = $('#albumTemplate').html();
  var templateFun = Handlebars.compile(templateHtml);
  var newHtml= templateFun(album);
  $('#albums').prepend(newHtml);
}
