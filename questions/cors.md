### What is CORS?

#### Answer

Cross-Origin Resource Sharing or CORS is a mechanism that uses additional HTTP headers to grant a browser permission to access resources from a server at an origin different from the website origin.

An example of a cross-origin request is a web application served from `http://mydomain.com` that uses AJAX to make a request for `http://yourdomain.com`.

For security reasons, browsers restrict cross-origin HTTP requests initiated by JavaScript. `XMLHttpRequest` and `fetch` follow the same-origin policy, meaning a web application using those APIs can only request HTTP resources from the same origin the application was accessed, unless the response from the other origin includes the correct CORS headers.

#### Good to hear

* CORS behavior is not an error,  it’s a security mechanism to protect users.
* CORS is designed to prevent a malicious website that a user may unintentionally visit from making a request to a legitimate website to read their personal data or perform actions against their will.

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [MDN docs for CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
