import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Server is ready');
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running at localhost:${port}`)
});