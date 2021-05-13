const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app.js');

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

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('Unhandled Rejection Shutting down');
  server.close(() => {
    process.exit(1);
  });
});
