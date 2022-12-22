const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, res, callback) {
    callback(null, './puplic/img');
  },
  filename(req, file, callback) {
    callback(null, `${new Date().toISOString()}-${file.originalname}`);
  },
});

const types = ['image/png', 'image/jpeg', 'image/jpg'];

const fileFilter = (req, file, callback) => {
  if (types.includes(file.mimetype)) callback(null, true);
  else {
    callback(null, false);
  }
};

module.exports = multer({ storage, fileFilter });
