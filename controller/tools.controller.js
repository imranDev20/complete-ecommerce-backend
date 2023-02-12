const { ObjectId } = require("mongodb");

module.exports.getAllTools = async (req, res, next) => {
  try {
    // const db = getDb();
    // const tools = await db.collection("tools").find().toArray();
    // res.status(200).send({ success: true, data: tools });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getToolDetail = async (req, res, next) => {
  try {
    // const db = getDb();
    // const { id } = req.params;
    // if (!ObjectId.isValid(id))
    //   return res
    //     .send(400)
    //     .send({ success: false, error: "Not a valid tool id." });
    // const tool = await db.collection("tools").findOne({ _id: ObjectId(id) });
    // if (!tool)
    //   return res
    //     .status(400)
    //     .send({ success: false, error: "Couldn't find a tool with this ID" });
    // res.status(200).send({ success: true, data: tool });
  } catch (error) {
    console.log(error);
  }
};

module.exports.saveATool = async (req, res, next) => {
  try {
    // const db = getDb();
    // const tool = req.body;
    // const result = await db.collection("tools").insertOne(tool);
    // if (result.insertedId)
    //   res.status(200).send({
    //     success: true,
    //     messages: `Tool added with id: ${result.insertedId}`,
    //     data: tool,
    //   });
  } catch (error) {
    console.log(error);
  }
};

module.exports.updateATool = async (req, res, next) => {
  try {
    // const db = getDb();
    // const { id } = req.params;
    // if (!ObjectId.isValid(id))
    //   return res
    //     .send(400)
    //     .send({ success: false, error: "Not a valid tool id." });
    // const tool = await db
    //   .collection("tools")
    //   .updateOne({ _id: ObjectId(id) }, { $set: req.body });
    // if (!tool.modifiedCount)
    //   return res
    //     .status(400)
    //     .send({ success: false, error: "Couldn't find a tool with this ID" });
    // res.status(200).send({
    //   success: true,
    //   data: tool,
    //   message: "Successfully updated the tool",
    // });
  } catch (error) {
    console.log(error);
  }
};
