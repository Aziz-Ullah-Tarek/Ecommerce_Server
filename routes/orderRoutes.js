const express = require('express');
const router = express.Router();
const {
  createOrder,
  getOrderById,
  getUserOrders,
  getAllOrders,
  updateOrderStatus
} = require('../controllers/orderController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, createOrder)
  .get(protect, admin, getAllOrders);

router.get('/myorders', protect, getUserOrders);

router.route('/:id')
  .get(protect, getOrderById)
  .put(protect, admin, updateOrderStatus);

module.exports = router;
