const express = require('express');
const router = express.Router();

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
