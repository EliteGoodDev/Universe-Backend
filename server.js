const express = require("express");
const cors = require("cors");
require("dotenv").config();

const nftSystemRoutes = require('./routes/nftSystemRoutes');
const nftNameRoutes = require('./routes/nftNameRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Universe-Solana Backend" });
});

// API Routes
app.use('/api/nftsystem', nftSystemRoutes);
app.use('/api/nftname', nftNameRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
