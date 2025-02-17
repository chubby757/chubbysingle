import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

// Send Paystack Public Key to Frontend
router.get('/get-public-key', (req, res) => {
  res.json({ publicKey: process.env.PAYSTACK_PUBLIC_KEY });
});

export default router;
