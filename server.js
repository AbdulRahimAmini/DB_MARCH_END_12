const express = require('express');
const path    = require('path');
const app     = express();

// Serve everything in /public as static files
app.use(express.static(path.join(__dirname, 'public')));

// All other routes return index.html (single-page app)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log('Orphan Prosperity running on port ' + PORT);
});
