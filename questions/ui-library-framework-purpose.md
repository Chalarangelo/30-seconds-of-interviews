### What is the purpose of JavaScript UI libraries/frameworks like React, Vue, Angular, Hyperapp, etc?

#### Answer

The main purpose is to avoid manipulating the DOM directly and keep the state of an application
in sync with the UI easily. Additionally, they provide the ability to create components that can be reused when they have similar functionality with minor differences, avoiding duplication which would require multiple changes whenever the structure of a component which is reused in multiple places needs to be updated.

When working with the DOM manipulation libraries like jQuery, the data of an application is generally kept in the DOM itself, often as class names or `data` attributes. Manipulating the DOM to update the UI involves many extra steps and can introduce subtle bugs over time. Keeping the state separate and letting a framework handle the UI updates when the state changes reduces cognitive load, i.e. saying you want the UI to look a certain way when the state is a certain value is the declarative way of creating an application, instead of manually updating the UI to reflect the new state (imperative).

#### Good to hear

* Explanation of templating languages and JSX

<!-- tags: (js) -->

<!-- expertise: (2) -->
