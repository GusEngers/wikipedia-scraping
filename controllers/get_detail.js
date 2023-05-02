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
  const obj = {
    title: $('#firstHeading').text(),
    text: '',
  };

  $('p')
    .nextAll()
    .each(function (i, el) {
      obj.text =
        obj.text +
        $(this)
          .text()
          .replace(/\[\d+\]/g, '')
          .replace(/\d+\.\d+/g, '');
    });
  return obj;
}

/**
 * Obtiene el texto de los párrafos de la página
 * @param url Dirección url de la información detallada
 * @returns Objeto con el título y los párrafos
 */
async function getDetail(url) {
  if (!url) throw new Error('Error: Missing parameter!');
  const response = await axios
    .get(url)
    .then((d) => generateResults(d.data))
    .catch((e) => {
      e.message = 'Ups! An error has occurred!';
      throw new Error(e.message);
    });
  return response;
}

module.exports = getDetail;
