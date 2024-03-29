import { Request, Response } from "express";

import {
  createProductService,
  getAllProductsService,
  getProductDetailService,
  updateProductService,
} from "../services/products.service.js";

import mongoose from "mongoose";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const categories = req.query.categories as string;
    const brands = req.query.brands as string;

    const products = await getAllProductsService(categories, brands);

    if (!products) {
      return res.status(400).send({
        success: false,
        messages: "Internal server error",
      });
    }

    if (products.length === 0) {
      return res.status(404).send({
        success: false,
        messages: "Products not found",
      });
    }

    return res.status(200).send({
      success: true,
      messages: "Products found",
      data: products,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error instanceof Error ? error.message : String(error),
    });
  }
};

export const getProductDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res
        .status(400)
        .send({ success: false, error: "Not a valid product id." });

    const product = await getProductDetailService(id);

    if (!product)
      return res.status(400).send({
        success: false,
        error: "Couldn't find a product with this ID",
      });
    res.status(200).send({ success: true, data: product });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error instanceof Error ? error.message : String(error),
    });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const result = await createProductService(req.body);

    if (!result) {
      return res.status(400).send({
        success: false,
        messages: "Internal server error",
      });
    }

    return res.status(200).send({
      success: true,
      messages: `Product added with id: ${result._id}`,
      data: result,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error instanceof Error ? error.message : String(error),
    });
  }
};

export const updateAProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res
        .send(400)
        .send({ success: false, error: "Not a valid product id" });

    const product = await updateProductService(id, req.body);

    if (!product)
      return res.status(400).send({
        success: false,
        error: "Couldn't find a product with this ID",
      });
    res.status(200).send({
      success: true,
      data: product,
      message: "Successfully updated the product",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error instanceof Error ? error.message : String(error),
    });
  }
};
