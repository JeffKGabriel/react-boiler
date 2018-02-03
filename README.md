# react-redux-boiler

**Setup**

```shell
git clone https://github.com/JeffKGabriel/react-boiler
```

```shell
npm i -g yarn pm2
yarn install
npm start
npm run watch
```

**FireBase**
Replace app/config/constants.js with firebase creds
```
apiKey: "#################",
authDomain: "#################.firebaseapp.com",
databaseURL: "https://#################.firebaseio.com",
projectId: "#################",
storageBucket: "#################.appspot.com",
messagingSenderId: "#################"
```

**Server**
Express & Express.Router :8888 for REST
- Optional letsencrypt options 443
- Optional mongo connections and models

~~ optional graphql server ~~ w/ apollo

**Testing**
- Optional Mocha & Chai test server 
