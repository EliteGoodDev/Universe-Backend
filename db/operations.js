const supabase = require('../config/supabase');

// Insert a new record into nftsystem table
async function insertNFTSystem(walletAddress, systemName) {
  try {
    const { data, error } = await supabase
      .from('nftsystem')
      .insert([
        { 
          wallet_address: walletAddress,
          system_name: systemName
        }
      ])
      .select();

    if (error) throw error;
    return data[0];
  } catch (error) {
    console.error('Error inserting NFT system:', error);
    throw error;
  }
}

// Get all records from nftsystem table
async function getAllNFTSystems() {
  try {
    const { data, error } = await supabase
      .from('nftsystem')
      .select('*');

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching NFT systems:', error);
    throw error;
  }
}

// Get a specific record by wallet address
async function getNFTSystemByWallet(walletAddress) {
  try {
    const { data, error } = await supabase
      .from('nftsystem')
      .select('*')
      .eq('wallet_address', walletAddress)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching NFT system by wallet:', error);
    throw error;
  }
}

// NFT Name operations
async function insertNFTName(mintAddress, name) {
  try {
    const { data, error } = await supabase
      .from('nft_name')
      .insert([
        { 
          nft_mint_address: mintAddress,
          nft_name: name
        }
      ])
      .select();

    if (error) throw error;
    return data[0];
  } catch (error) {
    console.error('Error inserting NFT name:', error);
    throw error;
  }
}

async function getAllNFTNames() {
  try {
    const { data, error } = await supabase
      .from('nft_name')
      .select('*');

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching NFT names:', error);
    throw error;
  }
}

async function getNFTNameByMintAddress(mintAddress) {
  try {
    const { data, error } = await supabase
      .from('nft_name')
      .select('*')
      .eq('nft_mint_address', mintAddress)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching NFT name by mint address:', error);
    throw error;
  }
}

module.exports = {
  insertNFTSystem,
  getAllNFTSystems,
  getNFTSystemByWallet,
  insertNFTName,
  getAllNFTNames,
  getNFTNameByMintAddress
};