const express = require('express');
const router = express.Router();
const { handleFileUpload } = require('../controllers/uploadFilesController');
const authenticateToken = require('../middlewares/authenticateToken');
const upload = require('../middlewares/saveFileMiddleware');

router.post('/', authenticateToken, upload.array("files"), handleFileUpload);

module.exports = router;