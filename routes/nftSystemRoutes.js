const express = require('express');
const router = express.Router();
const { createNFTSystem, getAllSystems, getSystemByWallet } = require('../controllers/nftSystemController');

// NFT System routes
router.post('/', createNFTSystem);
router.get('/', getAllSystems);
router.get('/:wallet_address', getSystemByWallet);

module.exports = router; 