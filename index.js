const app = require('./src/app');
require('dotenv').config();

(function main() {
  try {
    const PORT = process.env.PORT ?? 3000;
    app.listen(PORT, () => {
      console.log('[INFO] Server starting on port:', PORT);
    });
  } catch (error) {
    console.log('[ERROR] Error on starting server:', error);
  }
})();
