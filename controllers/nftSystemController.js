const { insertNFTSystem, getAllNFTSystems, getNFTSystemByWallet } = require('../db/operations');

// Create new NFT system
const createNFTSystem = async (req, res) => {
  try {
    const { wallet_address, system_name } = req.body;
    
    // Basic validation
    if (!wallet_address || !system_name) {
      return res.status(400).json({ 
        error: "Missing required fields: wallet_address and system_name are required" 
      });
    }

    const result = await insertNFTSystem(wallet_address, system_name);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error in createNFTSystem:', error);
    res.status(500).json({ error: error.message });
  }
};

// Get all NFT systems
const getAllSystems = async (req, res) => {
  try {
    const systems = await getAllNFTSystems();
    res.json(systems);
  } catch (error) {
    console.error('Error in getAllSystems:', error);
    res.status(500).json({ error: error.message });
  }
};

// Get NFT system by wallet address
const getSystemByWallet = async (req, res) => {
  try {
    const { wallet_address } = req.params;
    const system = await getNFTSystemByWallet(wallet_address);
    
    if (!system) {
      return res.status(404).json({ error: "NFT system not found" });
    }
    
    res.json(system);
  } catch (error) {
    console.error('Error in getSystemByWallet:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createNFTSystem,
  getAllSystems,
  getSystemByWallet
}; 