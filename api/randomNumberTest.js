const express = require('express');
const app = express();
const port = 3000;

app.get('/api/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // generates a random number between 1 and 100
    res.json({ number: randomNumber });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
