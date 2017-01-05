# Apts react on rails

## Environment / gems

- Ruby 2.3.1
- Rails 5.0.0
- Devise
- [React on Rails](shakacode/react_on_rails)
- etc


---

## Models

![](erd/erd.jpg)

---

## Get started

```bash
bundle install
npm install
rake db:setup
rake db:seed
foreman start -f Procfile.dev
```

Start [react on rails](https://github.com/shakacode/react_on_rails#getting-started)

---

## Some useful techniques

#### React wild card Redirecting

```js
import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

// ...

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomeContainer} />
    <Route path="/about" component={AboutContainer} />

    <Redirect from="*" to="/" />
  </Route>
)

export default routes
```
