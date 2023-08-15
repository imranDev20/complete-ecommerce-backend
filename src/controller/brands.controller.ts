import { Request, Response } from "express";

import {
  createBrandService,
  getAllBrandsService,
  getBrandDetailService,
  updateBrandService,
} from "../services/brands.service.js";

import mongoose from "mongoose";

export const getAllBrands = async (req: Request, res: Response) => {
  try {
    const brands = await getAllBrandsService();

    if (!brands) {
      return res.status(400).send({
        success: false,
        messages: "Internal server error",
      });
    }

    if (brands.length === 0) {
      return res.status(404).send({
        success: false,
        messages: "Brands not found",
      });
    }

    return res.status(200).send({
      success: true,
      messages: "Brands found",
      data: brands,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error instanceof Error ? error.message : String(error),
    });
  }
};

export const getBrandDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res
        .status(400)
        .send({ success: false, error: "Not a valid brand id." });

    const brand = await getBrandDetailService(id);

    if (!brand)
      return res.status(400).send({
        success: false,
        error: "Couldn't find a brand with this ID",
      });
    res.status(200).send({ success: true, data: brand });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error instanceof Error ? error.message : String(error),
    });
  }
};

export const createBrand = async (req: Request, res: Response) => {
  try {
    const result = await createBrandService(req.body);

    if (!result) {
      return res.status(400).send({
        success: false,
        messages: "Internal server error",
      });
    }

    return res.status(200).send({
      success: true,
      messages: `Brand added with id: ${result._id}`,
      data: result,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error instanceof Error ? error.message : String(error),
    });
  }
};

export const updateABrand = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res
        .send(400)
        .send({ success: false, error: "Not a valid brand id" });

    const brand = await updateBrandService(id, req.body);

    if (!brand)
      return res.status(400).send({
        success: false,
        error: "Couldn't find a brand with this ID",
      });
    res.status(200).send({
      success: true,
      data: brand,
      message: "Successfully updated the brand",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error instanceof Error ? error.message : String(error),
    });
  }
};
