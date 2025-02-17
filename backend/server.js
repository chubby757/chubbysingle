import express from "express";
import path from "path";
import cron from "node-cron";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import userRouter from "./routes/userRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";
import paystackRoutes from './routes/paystackRoutes.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

// Cron job to reset `isPaid` status after 30 days
cron.schedule('0 0 * * *', async () => {
  console.log('Running cron job to reset expired payments...');
  const now = new Date();
  const expiryDate = new Date();
  expiryDate.setDate(now.getDate() - 30);

  try {
    await User.updateMany(
      { isPaid: true, paidAt: { $lte: expiryDate } },
      { $set: { isPaid: false, paidAt: null } }
    );
    console.log('Expired payments reset successfully.');
  } catch (error) {
    console.error('Error resetting payments:', error.message);
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/upload", uploadRouter);
app.use("/api/seed", seedRouter);

app.use('/api/paystack', paystackRoutes);
app.use("/api/users", userRouter);


const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) =>
 res.sendFile(path.join(__dirname, "../frontend/build/index.html"))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
