### What is HTML5 Web Storage? Explain `localStorage` and `sessionStorage`.

#### Answer

With HTML5, web pages can store data locally within the user’s browser.
The data is stored in name/value pairs, and a web page can only access data stored by itself.

**Differences between `localStorage` and `sessionStorage` regarding lifetime:**

* Data stored through `localStorage` is permanent: it does not expire and remains stored on the user’s computer until a web app deletes it or the user asks the browser to delete it.
* `sessionStorage` has the same lifetime as the top-level window or browser tab in which the data got stored. When the tab is permanently closed, any data stored through `sessionStorage` is deleted.

**Differences between `localStorage` and `sessionStorage` regarding storage scope:**
Both forms of storage are scoped to the document origin so that documents with different origins will never share the stored objects.

* `sessionStorage` is also scoped on a per-window basis. Two browser tabs with documents from the same origin have separate `sessionStorage` data.
* Unlike in `localStorage`, the same scripts from the same origin can't access each other's `sessionStorage` when opened in different tabs.

#### Good to hear

* Earlier, this was done with cookies.
* The storage limit is far larger (at least 5MB) than with cookies and its faster.
* The data is never transferred to the server and can only be used if the client specifically asks for it.

##### Additional links

* [W3Schools - HTML5 Webstorage](https://www.w3schools.com/html/html5_webstorage.asp)

<!-- tags: (html) -->

<!-- expertise: (2) -->
