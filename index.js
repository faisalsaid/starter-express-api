// const express = require('express')
// const app = express()
// app.all('/', (req, res) => {
//     console.log("Just got a request!")
//     res.send('Upadate')
// })


const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./server/db.json');
const middlewares = jsonServer.defaults({
  static: './build',
});

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  }),
);

server.use(router);


app.listen(process.env.PORT || 3000)