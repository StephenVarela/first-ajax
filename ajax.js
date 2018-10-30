document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
  var rootAJAXGet = document.getElementById('AJAXToRoot');
  rootAJAXGet.addEventListener('click', function(e){
    var response = axios({
      "url": 'http://intro-ajax-api.herokuapp.com/',
      "dataType": 'text'
    });
  });



});
