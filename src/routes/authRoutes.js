import express from "express";
import { login, createUser } from "../controllers/authController.js";
import {
  getAllUsers,
  updateUser,
  deleteUser,
  getUserById,
} from "../controllers/userController.js";
import { verifyToken, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Rute Publik
router.post("/login", login);

// Rute hanya untuk Admin
router.post("/users", verifyToken, isAdmin, createUser);
router.get("/users", verifyToken, isAdmin, getAllUsers);
router.get("/users/:id", verifyToken, isAdmin, getUserById);
router.put("/users/:id", verifyToken, isAdmin, updateUser);
router.delete("/users/:id", verifyToken, isAdmin, deleteUser);

export default router;
