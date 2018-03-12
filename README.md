# Marvelicious

This project is built with

* create-react-app
* react-router
* firebase
* formik
* unstated
  and some other utility libraries

## Feature Highlights

### User Account

Authentication and authorization (client side only) are built using firebase with local persitence and works across multiple instances of the application in the browser.

Gravatar is used with md5 hashed user email account.

### Routing

There are three types of routes currently exposed by the application, i.e. Route (public), UnauthorizedOnlyRoute and PrivateRoute.

* Currently, the only Route (public) available is the IndexPage (`/`), which determines where to reroute user based on their Authorization state.
* Pages under UnauthorizedOnlyRoute, e.g. `/login` and `/register` are only available for unauthorized users. If an authorized user tries to access them, they will get redirected to `/dashboard` page.
* DashboardPage which is the main application falls under PrivateRoute. Only authorized users can access the page.

### Searching

Application search state is persisted via URL query string, i.e. `/dashboard?search=[characterName]&page=[pageNo]`, hence it's sharable 🙌.

We applied two routing mechanism when user interacts with the character card from search results.

* The actual link of any character card is `/dashboard?view=[characterId]`.
* When clicking on the character card, the URL changes to `/dashboard?search=[characterName]&page=[pageNo]&view=[characterId]`. This is achieved through overriding of onClick event handler.
