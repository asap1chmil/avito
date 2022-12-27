const { Router } = require('express');
const fileMiddleware = require('../middlewares/upload');

const router = Router();

router.post('/upload', fileMiddleware.single('House Photo'), (req, res) => {
  try {
    if (req.file) {
      res.json(req.file);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
