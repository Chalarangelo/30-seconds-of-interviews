### What is a cross-site scripting attack (XSS) and how do you prevent it?

#### Answer

XSS refers to client-side code injection where the attacker injects malicious scripts into a legitimate website or web application. This is often achieved when the application does not validate user input and freely injects dynamic HTML content.

For example, a comment system will be at risk if it does not validate or escape user input. If the comment contains unescaped HTML, the comment can inject a `<script>` tag into the website that other users will execute against their knowledge.

* The malicious script has access to cookies which are often used to store session tokens. If an attacker can obtain a user’s session cookie, they can impersonate the user.
* The script can arbitrarily manipulate the DOM of the page the script is executing in, allowing the attacker to insert pieces of content that appear to be a real part of the website.
* The script can use AJAX to send HTTP requests with arbitrary content to arbitrary destinations.

#### Good to hear

* On the client, using `textContent` instead of `innerHTML` prevents the browser from running the string through the HTML parser which would execute scripts in it.
* On the server, escaping HTML tags will prevent the browser from parsing the user input as actual HTML and therefore won't execute the script.

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [Cross-Site Scripting Attack (XSS)](https://www.acunetix.com/websitesecurity/cross-site-scripting/)

<!-- tags: (security,javascript) -->

<!-- expertise: (1) -->
