(function() {
  'use strict';

  var steps = 0;
  
  var HOSTNAME = '10.196.33.167';
  var PORT = '4000';
  var PROTOCOL = 'http://';
  var PATH = '/api/contract/submit';

  Pebble.addEventListener('ready', function(event) {
    console.log('ready');
  });

  Pebble.addEventListener('appmessage', function(event) {
    steps += 25;
   // var message = "{\"publicKey\" : \"fasivnoi30-32\",\"exerciseId\" : 100,\"data\" : {\"steps\" : " + steps + "}}";
    var message = JSON.stringify({
      "publicKey" : "fasivnoi30-32",
      "exerciseId" : 100,
      "data" : {"steps" : steps}
    });
    
    var xhr = new XMLHttpRequest();

    var HOST = PROTOCOL + HOSTNAME + ':' + PORT + PATH;

    xhr.open('POST', HOST);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('Content-length', message.length);
    xhr.setRequestHeader('Connection', 'close');
    xhr.send(message);
  });
})();
