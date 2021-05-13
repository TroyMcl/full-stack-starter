const dotenv = require('dotenv');
const app = require('./server/app');

dotenv.config({ path: './config.env' });
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App server is running on ${port}`);
});

process.on('uncaughtException', (err) => {
  console.log('UNHANDLED EXCEPTION! Shutting down...');
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
