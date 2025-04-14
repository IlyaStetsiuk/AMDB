const { users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        const existingMail = await users.findOne({ where: { email } });
        if (existingMail) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const existingPhone = await users.findOne({ where: { phone } });
        if (existingPhone) {
            return res.status(400).json({ message: "This phone number already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await users.create({
            username,
            email,
            phone,
            password_hash: hashedPassword,
        });

        if (!process.env.JWT_SECRET) {
            return res.status(500).json({ message: "JWT_SECRET is missing" });
        }

        const token = jwt.sign(
            { id: newUser.id, username: newUser.username },
            process.env.JWT_SECRET,
            { expiresIn: "10d" }
        );

        res.status(201).json({ token });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await users.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "10d" }
        );

        res.json({ token });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await users.findByPk(userId, {
            attributes: ["id", "username", "email", "phone", "createdAt"],
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const { username, email, phone, password } = req.body;


        const user = await users.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        let updatedPassword = user.password_hash;
        if (password) {
            updatedPassword = await bcrypt.hash(password, 10);
        }

        await user.update({
            username: username || user.username,
            email: email || user.email,
            phone: phone || user.phone,
            password_hash: updatedPassword,
        });

        res.json({ message: "User updated successfully" });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await users.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        await user.destroy();
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};