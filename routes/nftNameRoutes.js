const express = require('express');
const router = express.Router();
const { createNFTName, getAllNames, getNameByMintAddress } = require('../controllers/nftNameController');

// NFT Name routes
router.post('/', createNFTName);
router.get('/', getAllNames);
router.get('/:mint_address', getNameByMintAddress);

module.exports = router; 