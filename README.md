# Quote PWA


<br />

## Branches

- ### [`master`](https://github.com/sec8/quote-pwa)

      Client Side Rendering 

  - ### [`SSR`](https://github.com/sec8/quote-pwa/tree/SSR)

        Initial Server Side Rendering

    - ### [`SSR-with-content`](https://github.com/sec8/quote-pwa/tree/SSR-with-content))

          Initial Server Side Rendering with content
          This is the final branch, there are some comments in the relevant files:
          server.js, app.js, db.js, index.js and randomquote.js

## Setup

### Make sure Node is installed

  node v8.9.3

### 1. Get the source code

Just clone one of the [branches](#branches):
```sh
$ git clone -b master https://github.com/sec8/quote-pwa
$ cd quote-pwa
```

### 2. Install dependencies

```sh
$ npm install
```

### 3. Run the app

```sh
$ npm run build
$ npm run start
```
or for the SSR Variants
```sh
$ npm run build
$ npm run now-start
```


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
