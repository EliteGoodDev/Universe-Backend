const express = require('express');
const router = express.Router();
const nftCreatorSignController = require('../controllers/nftCreatorSignController');

// NFT Creator Sign route
router.post('/sign', nftCreatorSignController);

module.exports = router; 