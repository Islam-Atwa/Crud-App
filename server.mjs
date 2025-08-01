import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 9000;

// Middlewares
app.use(cors());
app.use(express.json());

// Dummy route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
