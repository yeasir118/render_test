const Game = require('../models/game');

const getAllGames = async (req, res) => {
  try{
    const games = await Game.find();
    console.log(games);
    return res.status(200).json({
      games: games
    });
  }catch(err){
    console.log(`Error while fetching games: ${err}`);
    return res.status(500).json({
      msg: "Internal Server Error"
    });
  }
};

module.exports = {
  getAllGames
};