const {
  createProductService,
  getAllProductsService,
  getProductDetailService,
  updateProductService,
} = require("../services/products.service");
const mongoose = require("mongoose");

module.exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await getAllProductsService();

    if (!products) {
      return res.status(400).send({
        success: false,
        messages: `Internal server error`,
      });
    }
    return res.status(200).send({
      success: true,
      messages: `Products found`,
      data: products,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};

module.exports.getProductDetail = async (req, res, next) => {
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
      message: error.message,
    });
  }
};

module.exports.createProduct = async (req, res, next) => {
  try {
    const result = await createProductService(req.body);

    if (!result) {
      return res.status(400).send({
        success: false,
        messages: `Internal server error`,
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
      message: error.message,
    });
  }
};

module.exports.updateAProduct = async (req, res, next) => {
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
      message: error.message,
    });
  }
};
