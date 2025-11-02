require('dotenv').config();
const { connectDB } = require('./src/config/db');
const app = require('./src/app');

const PORT = process.env.PORT || 4000;

(async () => {
  try {
    await connectDB();
  } catch (err) {
    console.warn('DB connection skipped or failed:', err.message);
  }
  app.listen(PORT, () => {
    console.log(`GameTracker API corriendo en http://localhost:${PORT}`);
  });
})();
