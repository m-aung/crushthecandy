/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
/* eslint-disable no-console */
/* eslint-disable implicit-arrow-linebreak */
const path = require('path');
const express = require('express');

const PORT = 3210;

const app = express();

// app.use('/build', express.static(path.resolve(__dirname, '../build')));
// app.use('/build', express.static('assets'));

app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'))
);

app.listen(PORT, () => {
  console.log(`listening to port : ${PORT}`);
});
