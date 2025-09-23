const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello World! This app is running via Docker + Jenkins CI/CD');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

