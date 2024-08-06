const { users } = require('../models');

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await users.findAll();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await users.findByPk(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await users.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.updateUser = async (req, res) => {
  try {
    const [updated] = await users.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedUser = await users.findByPk(req.params.id);
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleted = await users.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
        res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
