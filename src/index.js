import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Gunakan Rute
app.use("/v1/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`User Service berjalan di port ${PORT}`);
});
