const db = require('../config/db');

const Item = {
  create: (name, description) => {
    const query = 'INSERT INTO items (name, description) VALUES (?, ?)';
    return db.promise().query(query, [name, description]);
  },

  getAll: () => {
    const query = 'SELECT * FROM items';
    return db.promise().query(query);
  },

  getById: (id) => {
    const query = 'SELECT * FROM items WHERE id = ?';
    return db.promise().query(query, [id]);
  },

  update: (id, name, description) => {
    const query = 'UPDATE items SET name = ?, description = ? WHERE id = ?';
    return db.promise().query(query, [name, description, id]);
  },

  delete: (id) => {
    const query = 'DELETE FROM items WHERE id = ?';
    return db.promise().query(query, [id]);
  },

  addUserToItem: (userId, itemId) => {
    const query = 'INSERT INTO user_items (user_id, item_id) VALUES (?, ?)';
    return db.promise().query(query, [userId, itemId]);
  },

  getUsersInItem: (itemId) => {
    const query = `
      SELECT users.id, users.username, users.email 
      FROM users 
      JOIN user_items ON users.id = user_items.user_id 
      WHERE user_items.item_id = ?
    `;
    return db.promise().query(query, [itemId]);
  },
};

module.exports = Item;