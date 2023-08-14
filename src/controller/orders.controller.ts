import { Request, Response } from "express";
import Order from "../model/Order.ts";

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    // const db = getDb();
    // const orders = await db.collection("orders").find().toArray();
    // res.status(200).send({ success: true, data: orders });
  } catch (error) {
    console.log(error);
  }
};

export const getOrderDetail = async (req: Request, res: Response) => {
  try {
    // const db = getDb();
    // const { id } = req.params;
    // if (!ObjectId.isValid(id))
    //   return res
    //     .send(400)
    //     .send({ success: false, error: "Not a valid order id." });
    // const order = await db.collection("orders").findOne({ _id: ObjectId(id) });
    // if (!order)
    //   return res
    //     .status(400)
    //     .send({ success: false, error: "Couldn't find a order with this ID" });
    // res.status(200).send({ success: true, data: order });
  } catch (error) {
    console.log(error);
  }
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await Order.create(order);
    res.status(200).send({
      success: true,
      messages: `Order added with id: ${result._id}`,
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error instanceof Error ? error.message : String(error),
    });
  }
};

export const updateAOrder = async (req: Request, res: Response) => {
  try {
    // const db = getDb();
    // const { id } = req.params;
    // if (!ObjectId.isValid(id))
    //   return res
    //     .send(400)
    //     .send({ success: false, error: "Not a valid order id." });
    // const order = await db
    //   .collection("orders")
    //   .updateOne({ _id: ObjectId(id) }, { $set: req.body });
    // if (!order.modifiedCount)
    //   return res
    //     .status(400)
    //     .send({ success: false, error: "Couldn't find a order with this ID" });
    // res.status(200).send({
    //   success: true,
    //   data: order,
    //   message: "Successfully updated the order",
    // });
  } catch (error) {
    console.log(error);
  }
};
