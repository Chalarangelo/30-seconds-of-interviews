### What is REST?

#### Answer

REST (REpresentational State Transfer) is a software design pattern for network architecture. A RESTful web application exposes data in the form of information about its resources.

Generally, this concept is used in web applications to manage state. With most applications, there is a common theme of reading, creating, updating, and destroying data. Data is modularized into separate tables like `posts`, `users`, `comments`, and a RESTful API exposes access to this data with:

* An identifier for the resource. This is known as the endpoint or URL for the resource.
* The operation the server should perform on that resource in the form of an HTTP method or verb. The common HTTP methods are GET, POST, PUT, and DELETE.

Here is an example of the URL and HTTP method with a `posts` resource:

* Reading: `/posts/` => GET
* Creating: `/posts/new` => POST
* Updating: `/posts/:id` => PUT
* Destroying: `/posts/:id` => DELETE

#### Good to hear

* Alternatives to this pattern like GraphQL

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [What is REST — A Simple Explanation for Beginners, Part 1: Introduction
  ](https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f)

<!-- tags: (node) -->

<!-- expertise: (1) -->
