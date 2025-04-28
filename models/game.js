const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  file_location: {
    type: String,
    required: true
  }
});

const Game = mongoose.model('game', gameSchema);
module.exports = Game;