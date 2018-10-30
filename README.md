# Your First (Several) Asynchronous Requests

[See assignment in Alexa.](https://alexa.bitmaker.co/wdi/67/assignments/2055/latest)

knowledge check
1)Request method = GET
2)192.11ms
3)Status code: 200 - OK
4)initiator: other type: DOC

Step1
1) Request Method = GET
2) 120.32ms
3) Status Code 200 - OK
4) initiator: spread.js:25 type:XHR

Step 3
content of response: Wow what a ride! I came all the way from the server!

Step 4
status code: 500 internal server error
content: I'm sorry, Dave. I'm afraid I can't do that.

Step 6
console from pong url:
Error: Request failed with status code 500
    at e.exports (spread.js:25)
    at e.exports (spread.js:25)
    at XMLHttpRequest.l.(anonymous function) (https://unpkg.com/axios@0.18.0/dist/axios.min.js:8:3278)
ajax.js:25 Hey the request finished!

console from ping url:
ajax.js:19 Wow what a ride! I came all the way from the server!
ajax.js:25 Hey the request finished!
