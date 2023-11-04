const router = require('express').Router();
const axios = require('axios');
const cheerio = require('cheerio');

const URL = 'https://www.wikipedia.org';

router.route('/').get(async (req, res) => {
  try {
    const response = await axios(URL);
    const $ = cheerio.load(response.data);
    const results = []
    const data =  $('#searchLanguage')
    .children()
    .each((i, el) => {
      console.log({nose: el.children})
      results[i] = { name: el.children[0].data, value: el.attribs.value };
    });
    res.json(results);
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;
