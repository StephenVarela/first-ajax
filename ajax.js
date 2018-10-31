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
      "url": 'http://intro-ajax-api.herokuapp.com/pong',
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

  var countAJAXButton = document.getElementById('AJAXtoCount');

  var section7 = document.getElementById('step7');

  countAJAXButton.addEventListener('click', function(e){
    console.log('AJAX Count ');
    axios({
      "url": 'http://intro-ajax-api.herokuapp.com/count',
      "dataType": 'text'
    }).then(function(response){
      section7.append(response.data);
    });
  })

  var requestTotTime = document.getElementById('RequestToTime');
  var section8 = document.getElementById('step8');

  requestTotTime.addEventListener('click', function(e){
    console.log('clicked request tot time');
    axios({
      "url": 'http://intro-ajax-api.herokuapp.com/time',
      "dataType": 'text',
      params: {timezone: 'Europe/Sofia'}
    }).then(function(response){
      console.log(response);
      section8.append(response.data);
    })
  });



});
