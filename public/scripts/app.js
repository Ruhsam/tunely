$(document).ready(function() {
  console.log('app.js loaded!');


  $.ajax({
    method: 'GET',
    url: '/api/albums',
    success: handleSuccess,
    error: handleError
  });

  function handleSuccess(album) {
    //allAlbums = json;
    album.forEach(function(element){
      renderAlbums(element);
    });
  }
  function handleError() {
    console.log('error');
    $('#albumTemplate').text('Failed to load, is the server working?');
  }



}); //ends doc.ready

function renderAlbums(album) {
  console.log('rendering albums', album);
  var templateHtml = $('#albumTemplate').html();
  var templateFun = Handlebars.compile(templateHtml);
  var newHtml= templateFun(album);
  $('#albums').append(newHtml);
}
