const { Router } = require('express');
const router = Router();
const getLanguages = require('../controllers/get_languages');
const getSearch = require('../controllers/get_search');
const getDetail = require('../controllers/get_detail');

router.get('/languages', async (req, res) => {
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

router.get('/detail', async (req, res) => {
  const { url } = req.body;
  try {
    let data = await getDetail(url);
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
