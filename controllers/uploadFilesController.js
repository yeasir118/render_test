const Game = require('../models/game');

const handleFileUpload = async (req, res) => {
  const { name, description } = req.body;
  const fileName = req.files[0].originalname;
  const savedFilePath = `uploads/${fileName}`;

  console.log(name, description, savedFilePath);

  const game = new Game({ name, description, file_location: savedFilePath });
  try{
    await game.save();
    return res.json({
      msg: "File Upload Successful"
    });
  }catch(err){
    console.log(`Error inside file upload controller: ${err}`);
    return res.status(500).json({
      msg: "Internal Server Error"
    });
  }
};

module.exports = {
  handleFileUpload
};