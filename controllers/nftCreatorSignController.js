const bs58 = require('bs58');
const { Keypair, Transaction } = require('@solana/web3.js');
require('dotenv').config();

const nftCreatorSignController = async (req, res) => {
    try {
        const { data } = req.body;
        
        // Basic validation
        if (!data) {
            return res.status(400).json({
                error: "Missing transaction data"
            });
        }

        // Clean the data string
        const cleanedData = data.trim();

        try {
            // Deserialize the transaction
            const serializedTransaction = Buffer.from(cleanedData, 'base64');
            const transaction = Transaction.from(serializedTransaction);

            // Get creator keypair from environment variable
            const creatorPrivateKey = bs58.default.decode(process.env.CREATOR_PRIVATE_KEY);
            const creatorKeypair = Keypair.fromSecretKey(creatorPrivateKey);

            // Sign the transaction
            transaction.partialSign(creatorKeypair);

            // Serialize the signed transaction
            const serializedSignedTransaction = transaction.serialize({
                requireAllSignatures: false
            });

            // Convert to base64 for transmission
            const signedTransaction = serializedSignedTransaction.toString('base64');

            res.status(200).json({ 
                signedTransaction,
                message: "Transaction signed successfully" 
            });
        } catch (deserializeError) {
            console.error('Transaction deserialization error:', deserializeError);
            return res.status(400).json({
                error: "Invalid transaction data format",
                details: deserializeError.message
            });
        }
    } catch (error) {
        console.error('Error in nftCreatorSignController:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = nftCreatorSignController;
