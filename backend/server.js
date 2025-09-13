const express = require('express');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const app = express();
const PORT = 5000;

// Path to frontend folder (inside backend now)
const frontendPath = path.join(__dirname, 'frontend');

// Serve static files (CSS/JS) if needed
app.use(express.static(frontendPath));

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'name.html'));
});

// API route to fetch name from HTML
app.get('/api/name', (req, res) => {
  fs.readFile(path.join(frontendPath, 'name.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Could not read HTML file" });
    }

    const dom = new JSDOM(data);
    const name = dom.window.document.getElementById("name").textContent;

    res.json({ name: name });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
