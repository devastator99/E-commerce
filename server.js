const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json');
const middlewares = jsonServer.defaults();
const fs = require('fs');
const path = require('path');

server.use(middlewares);

// Custom route to serve the entire JSON content at a single endpoint
server.get('/products', (req, res) => {
  const dataPath = path.join(__dirname, 'data.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  res.json(data);
});

server.use(router);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
