const Product = require("../model/Product");

exports.getAllProductsService = async () => {
  return await Product.find({});
};

exports.getProductDetailService = async (id) => {
  const product = await Product.findOne({ _id: id });
  return product;
};

exports.createProductService = async (product) => {
  return await Product.create(product);
};

exports.updateProductService = async (id, product) => {
  return await Product.findByIdAndUpdate(id, product);
};
