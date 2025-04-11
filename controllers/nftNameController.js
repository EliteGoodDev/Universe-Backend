const { insertNFTName, getAllNFTNames, getNFTNameByMintAddress } = require('../db/operations');

// Create new NFT name
const createNFTName = async (req, res) => {
  try {
    const { nft_mint_address, nft_name } = req.body;
    
    // Basic validation
    if (!nft_mint_address || !nft_name) {
      return res.status(400).json({ 
        error: "Missing required fields: nft_mint_address and nft_name are required" 
      });
    }

    const result = await insertNFTName(nft_mint_address, nft_name);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error in createNFTName:', error);
    res.status(500).json({ error: error.message });
  }
};

// Get all NFT names
const getAllNames = async (req, res) => {
  try {
    const names = await getAllNFTNames();
    res.json(names);
  } catch (error) {
    console.error('Error in getAllNames:', error);
    res.status(500).json({ error: error.message });
  }
};

// Get NFT name by mint address
const getNameByMintAddress = async (req, res) => {
  try {
    const { mint_address } = req.params;
    const name = await getNFTNameByMintAddress(mint_address);
    
    if (!name) {
      return res.status(404).json({ error: "NFT name not found" });
    }
    
    res.json(name);
  } catch (error) {
    console.error('Error in getNameByMintAddress:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createNFTName,
  getAllNames,
  getNameByMintAddress
}; 