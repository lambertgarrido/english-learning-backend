// routes/userRoutes.js
const express = require("express");
const { getUsers, getUserById, createUser } = require("../controllers/userController");

const router = express.Router();

// GET /api/users
router.get("/", getUsers);

// GET /api/users/:id
router.get("/:id", getUserById);

// POST /api/users
router.post("/", createUser);

module.exports = router;
