import { Request, Response } from "express";
import mongoose from "mongoose";
import {
  createCategoryService,
  getCategoriesService,
  getCategoryService,
  updateCategoryService,
} from "../services/categories.service.ts";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await getCategoriesService();

    if (!categories) {
      return res.status(400).send({
        success: false,
        messages: `Internal server error`,
      });
    }
    return res.status(200).send({
      success: true,
      messages: `Categories found`,
      data: categories,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};

export const getCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res
        .status(400)
        .send({ success: false, error: "Not a valid category id." });

    const category = await getCategoryService(id);

    if (!category)
      return res.status(400).send({
        success: false,
        error: "Couldn't find a category with this ID",
      });
    res.status(200).send({ success: true, data: category });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const result = await createCategoryService(req.body);

    if (!result) {
      return res.status(400).send({
        success: false,
        messages: `Internal server error`,
      });
    }

    return res.status(200).send({
      success: true,
      messages: `Category added with id: ${result._id}`,
      data: result,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.send(400).send({ success: false, error: "Not a valid  id" });

    const category = await updateCategoryService(id, req.body);

    if (!category)
      return res.status(400).send({
        success: false,
        error: "Couldn't find a category with this ID",
      });
    res.status(200).send({
      success: true,
      data: category,
      message: "Successfully updated the category",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};
