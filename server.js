const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const avatarDirectory = path.join(__dirname, 'media');

app.use('/media', express.static(avatarDirectory));

app.get('/api/avatars', (req, res) => {
  const files = fs.readdirSync(avatarDirectory).map(file => ({
    username: path.basename(file, path.extname(file)),
    url: `/media/${file}`,
  }));
  res.json(files);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Website running at http://localhost:${PORT}`));