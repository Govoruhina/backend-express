const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    items: [
      { id: 1, name: 'Андрей' },
      { id: 2, name: 'Яна' },
      { id: 3, name: 'Дмитрий' }
    ]
  });
});

module.exports = router;
