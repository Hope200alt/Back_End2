const express = require('express');
const itemController = require('../controllers/itemController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/items', itemController.getAllItems);
router.get('/items/:id', itemController.getItemById);

// Protected routes (require authentication)
router.post('/items', authenticateToken, itemController.createItem);
router.put('/items/:id', authenticateToken, itemController.updateItem);
router.delete('/items/:id', authenticateToken, itemController.deleteItem);
router.post('/items/add-user', authenticateToken, itemController.addUserToItem);
router.get('/items/:id/users', authenticateToken, itemController.getUsersInItem);

module.exports = router;