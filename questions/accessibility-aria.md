### What is ARIA and when should you use it?

#### Answer

ARIA stands for "Accessible Rich Internet Applications", and is a technical specification created by the World Wide Web Consortium (W3C). Better known as WAI-ARIA, it provides additional HTML attributes in the development of web applications to offer people who use assistive technologies (AT) a more robust and interoperable experience with dynamic components. By providing the component's role, name, and state, AT users can better understand how to interact with the component. WAI-ARIA should only be used when an HTML element equivalent is not available or lacks full browser or AT support. WAI-ARIA's semantic markup coupled with JavaScript works to provide an understandable and interactive experience for people who use AT.

An example using ARIA:

```
<div 
  role="combobox"
  aria-expanded="false"
  aria-owns="ex1-grid"
  aria-haspopup="grid"
  id="ex1-combobox">
  ...
</div>
```
Credit: W3C's [ARIA 1.1 Combobox with Grid Popup Example](https://w3c.github.io/aria-practices/examples/combobox/aria1.1pattern/grid-combo.html)

#### Good to hear

* Accessible Rich Internet Applications
* Benefits people who use assistive technologies (AT)
* Provides role, name, and state
* Semantic HTML coupled with JavaScript

##### Additional links

* [WAI-ARIA Overview](https://www.w3.org/WAI/standards-guidelines/aria/)
* [WAI-ARIA Spec](https://www.w3.org/TR/wai-aria/)
* [ARIA Serious? Eric Eggert presentation](https://youtu.be/4bH57rWPnYo)

<!-- tags: (accessibility) -->

<!-- expertise: (1) -->
