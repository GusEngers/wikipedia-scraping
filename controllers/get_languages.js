const axios = require('axios');
const cheerio = require('cheerio');

const URL = 'https://www.wikipedia.org';

/**
 * Genera los objetos con los datos necesarios seleccionados del DOM obtenido de la solicitud
 * @param data HTML obtenido de la solicitud
 * @returns Array con los datos generados
 */
function generateResults(data) {
  const $ = cheerio.load(data);
  let results = [];
  $('#searchLanguage')
    .children()
    .each((i, el) => {
      results[i] = { name: el.children[0].data, value: el.attribs.value };
    });
  return results;
}

/**
 * Obtiene los distintos lenguajes disponibles en Wikipedia
 * @returns Array con nombre del lenguaje y su valor, o un error
 */
async function getLanguages() {
  let response = await axios
    .get(URL)
    .then((d) => generateResults(d.data))
    .catch((e) => e);
  return response;
}

module.exports = getLanguages;
