### Describe your thoughts on how a single page web app should handle focus when changing routes

#### Answer

Single page applications make use of client-side rendering. This means that 'examplesite.com' and 'examplesite.com/page2' are actually the same HTML web page, but the client app decides what content to drop into that single page at runtime. Your user never actually "leaves" the page, and this causes some accessibility issues in terms of focus.

Unless focus is explicitly managed in the app, a scenario like this may happen:

1. User visits 'examplesite.com'
2. User clicks a link to go to another route: 'examplesite.com/product1'
3. Client app changes the visible content to show the details for this new route (e.g. some info about Product 1)
4. Focus is still on the link that was clicked in step 2
5. If a user uses the keyboard or screen reader to now try and read the content, the focused starting point is in the middle of the page on an element no longer visible

Many strategies have been proposed in handling this situation, all involving explicitly managing the focus when the new page content is rendered. [Recent research by GatsbyJS](https://www.gatsbyjs.org/blog/2019-07-11-user-testing-accessible-client-routing/) suggests the best approach is:

1. User visits 'examplesite.com'
2. User clicks a link to go to another route: 'examplesite.com/product1'
3. Client app changes the visible content to show the details for this new route (e.g. some info about Product 1)
4. Client app manually places focus on the main header at the top of the page (almost always this will be the H1 element)

By doing so, focus is reset to the top of the page, ready for the user to begin exploring the new content. This solution requires inserting the main heading into the start of tabbing order with `tabindex="-1"`.

#### Good to hear

- Focus issues caused by client-side rendering, instead of server-side
- Focus should not be left on elements no longer visible on the page
- Challenges faced by screen reader users and users utilising keyboard navigation
- Careful manual focus management required

##### Additional links

- [Handling Focus on Route Change: Up Your A11y](https://www.upyoura11y.com/handling-focus/)

<!-- tags: (accessibility) -->

<!-- expertise: (1) -->
