const handleFileUpload = (req, res) => {
  console.log(req.body);
  console.log(req.files);
  return res.json({
    msg: "File Upload Successful"
  });
};

module.exports = {
  handleFileUpload
};