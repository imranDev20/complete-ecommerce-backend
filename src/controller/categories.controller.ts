const {
  createCategoryService,
  getCategoriesService,
  getCategoryService,
  updateCategoryService,
} = require("../services/categories.service");
const mongoose = require("mongoose");

module.exports.getCategories = async (req, res, next) => {
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

module.exports.getCategory = async (req, res, next) => {
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

module.exports.createCategory = async (req, res, next) => {
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

module.exports.updateCategory = async (req, res, next) => {
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
