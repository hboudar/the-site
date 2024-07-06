const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('./confirmations.db');

app.use(bodyParser.json());

app.post('/submit-confirmation', (req, res) => {
  const { name, email, status } = req.body;

  // Server-side validation
  if (!name || !email || !status) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email address.' });
  }

  // Insert into the database
  db.run(`INSERT INTO confirmations (name, email, status) VALUES (?, ?, ?)`, [name, email, status], function (err) {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json({ message: 'Confirmation saved successfully' });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});