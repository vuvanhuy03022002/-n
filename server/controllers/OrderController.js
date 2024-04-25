import { OrderModel } from "../models/OrderModel.js";
import expressAsyncHandler from "express-async-handler";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const createOrder = expressAsyncHandler(async (req, res) => {
  if (req.body.orderItems.length === 0) {
    res.status(400).send({ message: "cart is emty" });
  } else {
    const order = new OrderModel({
      order_code: req.body.order_code,
      cancelOrder: false,

      orderItems: req.body.orderItems,
      shippingAddress: {
        province: req.body.shippingAddress.province,
        district: req.body.shippingAddress.district,
        ward: req.body.shippingAddress.ward,
        detail: req.body.shippingAddress.more,
        name: req.body.shippingAddress.name,
        phone: req.body.shippingAddress.phone,
      },
      paymentMethod: req.body.paymentMethod,
      paymentResult: req.body.paymentResult
        ? {
            id: req.body.paymentResult.id,
            status: req.body.paymentResult.status,
            update_time: req.body.paymentResult.update_time,
            email_address: req.body.paymentResult.payer.email_address,
          }
        : "",
      totalPrice: req.body.totalPrice,
      status: req.body.status ? req.body.status : "pendding",
      name: req.body.name,
      user: req.body.user,
    });

    const createOrder = await order.save();
    res.status(201).send({ message: "new order created", order: createOrder });
  }
});

export const clientCancelOrder = expressAsyncHandler(async (req, res) => {
  const updateOrder = await OrderModel.findById({_id: req.params.id})

   if(updateOrder){
    updateOrder.cancelOrder = true
    await updateOrder.save()
   }
   res.send(updateOrder)
});

export const updateOrder = expressAsyncHandler(async (req, res) => {
  let updateOrder = await OrderModel.findById({ _id: req.params.id });

  if (updateOrder) {
    let items = [];
    updateOrder.orderItems.map((x) => {
      let item = {};
      item.name = x.name;
      item.quantity = parseInt(x.qty);
      item.price = x.salePrice;

      items.push(item);
    });
    
  } else {
    res.send({ msg: "product not found" });
  }
});




export const GetAllOrder = expressAsyncHandler(async (req, res) => {
  //await OrderModel.remove()
  const Order = await OrderModel.find({}).sort({ createdAt: -1 });
  if (Order) {
    res.send(Order);
  } else {
    res.status(401).send({ message: "no order" });
  }
});
export const GetAllOrderUser = expressAsyncHandler(async (req, res) => {
  //await OrderModel.remove()
  const Order = await OrderModel.find({
    user: req.params.id,
  }).sort({ createdAt: -1 });
  if (Order) {
    res.send(Order);
  } else {
    res.status(401).send({ message: "no order by user" });
  }
});



export const GetAllOrderPendding = expressAsyncHandler(async (req, res) => {
  const Order = await OrderModel.find({
    $or: [{ status: "pendding" }, { paymentMethod: "payOnline" }],
  }).sort({
    createdAt: -1,
  });
  if (Order) {
    res.send(Order);
  } else {
    res.status(401).send({ message: "no order" });
  }
});

export const GetAllOrderShipping = expressAsyncHandler(async (req, res) => {
  const Order = await OrderModel.find({ status: "shipping" }).sort({
    createdAt: -1,
  });
  if (Order) {
    res.send(Order);
  } else {
    res.status(401).send({ message: "no order" });
  }
});

export const GetAllOrderPaid = expressAsyncHandler(async (req, res) => {
  const Order = await OrderModel.find({ status: "paid" }).sort({
    createdAt: -1,
  });
  if (Order) {
    res.send(Order);
  } else {
    res.status(401).send({ message: "no order" });
  }
});

export const DeleteOrder = expressAsyncHandler(async (req, res) => {
  const deleteOrder = await OrderModel.findById({_id: req.params.id});

  if (deleteOrder) {
    await deleteOrder.remove();
    res.send({ message: "product deleted" });
  } else {
    res.send("error in delete order");
  }
});

export const ShippingProduct = expressAsyncHandler(async (req, res) => {
  const status = "shipping";
  const Order = await OrderModel.findById({ _id: req.params.id });
  if (Order) {
    Order.status = status;
    await Order.save();
    res.send(Order);
  } else {
    res.status(401).send({ message: "no order" });
  }
});

export const PaidProduct = expressAsyncHandler(async (req, res) => {
  const status = "paid";
  const Order = await OrderModel.findByIdAndUpdate(
    { _id: req.params.id },
    { status: status }
  );
  if (Order) {
    res.send(Order);
  } else {
    res.status(401).send({ message: "no order" });
  }
});

// --------------------    user

export const GetOrderByUser = expressAsyncHandler(async (req, res) => {
  const Order = await OrderModel.find({ user: req.params.id }).sort({
    createdAt: -1,
  });
  if (Order) {
    res.send(Order);
  } else {
    res.status(401).send({ message: "no order by user" });
  }
});



export const GetOrderPenddingByUser = expressAsyncHandler(async (req, res) => {
  const Order = await OrderModel.find({
    user: req.params.id,
    status: "pendding",
  }).sort({ createdAt: -1 });
  if (Order) {
    res.send(Order);
  } else {
    res.status(401).send({ message: "no order by user" });
  }
});

export const GetOrderShippingByUser = expressAsyncHandler(async (req, res) => {
  const Order = await OrderModel.find({
    user: req.params.id,
    status: "shipping",
  }).sort({ createdAt: -1 });
  if (Order) {
    res.send(Order);
  } else {
    res.status(401).send({ message: "no order by user" });
  }
});

export const GetOrderPaidByUser = expressAsyncHandler(async (req, res) => {
  const Order = await OrderModel.find({
    user: req.params.id,
    status: "paid",
  }).sort({ createdAt: -1 });
  if (Order) {
    res.send(Order);
  } else {
    res.status(401).send({ message: "no order by user" });
  }
});

export const GetOrderById = expressAsyncHandler(async (req, res) => {
  const order = await OrderModel.findById(req.params.id);

  if (order) {
    res.send(order);
  } else {
    res.status(404).send({ message: 'Order not found' });
  }
});


