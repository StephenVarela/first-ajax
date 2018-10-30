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
    }).catch(function (error) {
      console.log(error)
      pingPongAJAX.parentElement.append('Oops I did it again, I played with your heart... got lost in the game');
    }).then(function(){
      console.log('Hey the request finished!');
    });
  });



});
