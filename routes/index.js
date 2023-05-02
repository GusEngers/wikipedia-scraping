const { Router } = require('express');
const router = Router();
const getLanguages = require('../controllers/get_languages');
const getSearch = require('../controllers/get_search');

router.get('/language', async (req, res) => {
  try {
    let data = await getLanguages();
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/search', async (req, res) => {
  const { language, query } = req.body;
  try {
    let data = await getSearch(language, query);
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
