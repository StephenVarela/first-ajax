document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
  var rootAJAXGet = document.getElementById('AJAXToRoot');
  rootAJAXGet.addEventListener('click', function(e){
    var response = axios({
      "url": 'http://intro-ajax-api.herokuapp.com/',
      "dataType": 'text'
    });
  });

  var pingPongAJAX = document.getElementById('AJAXToPingPong');

  pingPongAJAX.addEventListener('click', function(e){
    axios({
      "url": 'http://intro-ajax-api.herokuapp.com/ping',
      "dataType": 'text'
    }).then(function (response) {
      console.log(response.data)
      pingPongAJAX.parentElement.append(response.data);
    });
  });



});
