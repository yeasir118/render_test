const mongoose = require('mongoose');

const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log('mongodb connected');
  }catch(e){
    console.error(`mongodb connection failed: ${e.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;