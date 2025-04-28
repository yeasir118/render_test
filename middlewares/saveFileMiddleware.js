const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  const fileType = /.html/;
  const extname = fileType.test(path.extname(file.originalname).toLowerCase());
  if(extname){
    return cb(null, true);
  }else{
    cb(new Error('Error: html files only!'));
  }
};

const upload = multer({
  storage,
  fileFilter
});

module.exports = upload;