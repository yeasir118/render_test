const express = require('express');
const router = express.Router();
const { getAllGames } = require('../controllers/gamesController');

router.get('/', getAllGames);

module.exports = router;