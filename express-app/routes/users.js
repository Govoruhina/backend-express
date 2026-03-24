const express = require('express');
const router = express.Router();

const users = [];
let nextId = 4;

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

router.post('/', function(req, res, next) {
  const newUser = {
    id: nextId,
    name: req.body.name,
  }
  nextId++;
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
