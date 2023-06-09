require('dotenv').config();
const server = require('./server');

const { PORT = 3333, NODE_ENV = 'development' } = process.env;

server.listen(PORT, () => {
  console.log(`Server listening on https://localhost:${PORT}`);
});
