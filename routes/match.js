const express = require('express');
const router = express.Router();
const data = require('../data/neighborhoods.json');

router.post('/', (req, res) => {
  const { preferences } = req.body;
  const results = data.map(n => {
    let score = 0;
    if (n.walkability >= preferences.walkability) score++;
    if (n.safety >= preferences.safety) score++;
    if (n.affordability >= preferences.affordability) score++;
    return { ...n, score };
  });

  const sorted = results.sort((a, b) => b.score - a.score);
  res.json(sorted.slice(0, 5));
});

module.exports = router;
