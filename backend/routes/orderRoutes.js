import express from "express";
import { admin, protect } from "../middleware/authMiddleware.js";
import {
  addOrdeItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered
} from "../controllers/orderContoller.js";

const router = express.Router();

router.route("/").post(protect, addOrdeItems).get(protect, admin, getOrders);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

export default router;
