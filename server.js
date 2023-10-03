const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public'));
app.get('/download', (req, res) => {
  const pdfFilePath = path.join(__dirname, 'public', 'resume2023October02.pdf');
  res.download(pdfFilePath, 'resume.pdf', (err) => {
    if (err) {
      console.error('Error downloading file:', err);
      res.status(500).send('Internal Server Error');
    }
  });
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/projects', (req, res) => {
  res.render('projects');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(port);
console.log('Server running at http://localhost:3000/');
