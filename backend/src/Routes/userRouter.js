const express = require('express');
const router = express.Router();

const {login,createClient, getUsers} = require('../Services/userService');

router.post('/login', login);
router.post('/createClient', createClient);
router.get('/getUsers', getUsers);

module.exports = router;

