-- Create nftsystem table
CREATE TABLE IF NOT EXISTS nftsystem (
    id SERIAL PRIMARY KEY,
    wallet_address VARCHAR(44) NOT NULL UNIQUE,  -- Solana addresses are 44 characters
    system_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index on wallet_address for faster lookups
CREATE INDEX IF NOT EXISTS idx_nftsystem_wallet_address ON nftsystem(wallet_address);

-- Create nft_name table
CREATE TABLE IF NOT EXISTS nft_name (
    id SERIAL PRIMARY KEY,
    nft_mint_address VARCHAR(44) NOT NULL UNIQUE,  -- Solana addresses are 44 characters
    nft_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index on nft_mint_address for faster lookups
CREATE INDEX IF NOT EXISTS idx_nft_name_mint_address ON nft_name(nft_mint_address); 