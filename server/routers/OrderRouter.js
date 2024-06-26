import express from 'express'
import {
  createOrder,
  GetAllOrder,
  DeleteOrder,
  ShippingProduct,
  GetAllOrderPendding,
  GetAllOrderShipping,
  GetAllOrderPaid,
  PaidProduct,
  GetOrderPenddingByUser,
  GetOrderShippingByUser,
  GetOrderPaidByUser,
  // GetAllOrderInAMonth,
  updateOrder,
  clientCancelOrder,
  GetOrderById,
  GetAllOrderUser,
} from "../controllers/OrderController.js";
import { isAuth, isAdmin } from "../untils/until.js";

const OrderRouter = express.Router();

OrderRouter.post("/create", createOrder);
OrderRouter.post("/update/:id", updateOrder);
OrderRouter.post("/cancel/:id", clientCancelOrder);
OrderRouter.put("/shipping/:id", ShippingProduct);
OrderRouter.put("/paid/:id", PaidProduct);
OrderRouter.delete('/delete/:id', DeleteOrder);

OrderRouter.get("/", GetAllOrder);
OrderRouter.get("/orderPendding", GetAllOrderPendding);
OrderRouter.get("/orderShipping", GetAllOrderShipping);
OrderRouter.get("/orderPaid", GetAllOrderPaid);
OrderRouter.get("/detail/:id", GetOrderById);
// OrderRouter.get("/allOrderInAMonth", GetAllOrderInAMonth);

// --- user
OrderRouter.get("/:id", GetAllOrder);
OrderRouter.get("/user/:id", GetAllOrderUser);
OrderRouter.get("/orderPendding/:id", GetOrderPenddingByUser);
OrderRouter.get("/orderShipping/:id", GetOrderShippingByUser);
OrderRouter.get("/orderpaid/:id", GetOrderPaidByUser);


export default OrderRouter