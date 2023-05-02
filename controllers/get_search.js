const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Genera los objetos con los datos necesarios seleccionados del DOM obtenido de la solicitud
 * @param data HTML obtenido de la solicitud
 * @returns Array con los datos generados
 */
function generateResults(data, language = 'es') {
  const URL = `https://${language}.wikipedia.org`;
  const $ = cheerio.load(data);
  let results = [];
  $('.mw-search-result-heading')
    .children()
    .each((i, el) => {
      results[i] = { name: el.attribs.title, value: URL + el.attribs.href };
    });
  return results;
}

/**
 * Obtiene los resultados de luego de efectuar una búsqueda en Wikipedia
 * @param language Idioma en el cual se efectúa la búsqueda
 * @param query Palabra u oración a buscar en Wikipedia
 * @returns Array con los datos obtenidos
 */
async function getSearch(language, query) {
  if (!language || !query) throw new Error('Error: Missing parameters!');

  const _query = query.replace(/ /g, '+');
  const URL = `https://${language}.wikipedia.org/w/index.php?search=${_query}&profile=advanced&fulltext=1&ns0=1&ns100=1&ns104=1`;
  const response = await axios
    .get(URL)
    .then((d) => generateResults(d.data, language))
    .catch((e) => e);
  return response;
}

module.exports = getSearch;
