const { Router } = require('express');
const router = Router();
const getLanguages = require('../controllers/get_languages');

router.get('/language', async (req, res) => {
  try {
    let data = await getLanguages();
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
