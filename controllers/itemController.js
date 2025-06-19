const Item = require('../models/itemModel');

const createItem = async (req, res) => {
  const { name, description } = req.body;
  try {
    await Item.create(name, description);
    res.status(201).json({ message: 'Item created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllItems = async (req, res) => {
  try {
    const [results] = await Item.getAll();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getItemById = async (req, res) => {
  const itemId = req.params.id;
  try {
    const [results] = await item.getById(itemId);
    if (results.length === 0) return res.status(404).json({ error: 'Item not found' });
    res.json(results[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateItem = async (req, res) => {
  const itemId = req.params.id;
  const { name, description } = req.body;
  try {
    await Item.update(itemId, name, description);
    res.json({ message: 'Item updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteItem = async (req, res) => {
  const itemId = req.params.id;
  try {
    await Item.delete(itemId);
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addUserToItem = async (req, res) => {
  const { userId, itemId } = req.body;
  try {
    await Item.addUserToItem(userId, itemId);
    res.status(201).json({ message: 'User added to item successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUsersInItem = async (req, res) => {
  const itemId = req.params.id;
  try {
    const [results] = await Item.getUsersInItem(itemId);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
  addUserToItem,
  getUsersInItem,
};