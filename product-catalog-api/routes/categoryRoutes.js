const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Category route placeholder');
});

module.exports = router;
