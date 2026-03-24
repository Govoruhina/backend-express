const express = require('express');
const router = express.Router();

let nextId = 4;
const users = [
  { id: 1, name: 'Дюха' },
  { id: 2, name: 'Яна' },
  { id: 3, name: 'Арсланчик' }
];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    items: users
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

router.get('/:id', function(req, res, next) {
  const id = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === id);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
