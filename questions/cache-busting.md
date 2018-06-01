### What is the purpose of cache busting and how can you achieve it?

#### Answer

Browsers have a cache to temporarily store files on websites so they don't need to be re-downloaded again when switching between pages or reloading the same page. The server is set up to send headers that tell the browser to store the file for a given amount of time. This greatly increases website speed and preserves bandwidth.

However, it can cause problems when the website has been changed by developers because the user's cache still references old files. This can either leave them with old functionality or break a website if the cached CSS and JavaScript files are referencing elements that no longer exist, have moved or have been renamed.

Cache busting is the process of forcing the browser to download the new files. This is done by naming the file something different to the old file.

A common technique to force the browser to re-download the file is to append a query string to the end of the file.

* `src="js/script.js"` => `src="js/script.js?v=2"`

The browser considers it a different file but prevents the need to change the file name.

#### Good to hear

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

* [Strategies for cache-busting CSS](https://css-tricks.com/strategies-for-cache-busting-css/)

<!-- tags: (html) -->

<!-- expertise: (0) -->
