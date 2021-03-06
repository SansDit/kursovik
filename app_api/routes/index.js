var express = require('express');
var router = express.Router();
let ctrlNumbers = require('../controllers/numbers');
let ctrlAuth = require('../controllers/auth');
router.get('/Numbers', ctrlNumbers.getAll);
router.get('/Numbers/:id', ctrlNumbers.getOne);
router.post('/Numbers', ctrlNumbers.create);
router.put('/Numbers/:id', ctrlNumbers.update);
router.delete('/Numbers/:id', ctrlNumbers.delete);
router.post('/signup', ctrlAuth.signup);
router.post('/login', ctrlAuth.login);
router.get('/logout/:login', ctrlAuth.logout);
router.delete('/selfremove/:login', ctrlAuth.selfremove);
module.exports = router;