### What is ARIA and when should you use it?

#### Answer

ARIA stands for "Accessible Rich Internet Applications". ARIA code is HTML. It provides additional attributes in the development of web applications to offer screen reader users more context about dynamic components, including the component's role, name, and state. It should only be used when an HTML element equivalent is not available or lacks full support. ARIA is semantic, and doesn't actually make your component dynamic.

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
* Benefits screen reader users
* Provides role, name, and state
* Semantic HTML that doesn't produce interaction by itself

##### Additional links

* [WAI-ARIA Overview](https://www.w3.org/WAI/standards-guidelines/aria/)
* [WAI-ARIA Spec](https://www.w3.org/TR/wai-aria/)
* [ARIA Serious? Eric Eggert presentation](https://youtu.be/4bH57rWPnYo)

tags: accessibility, web applications, aria

expertise: 1