const bcrypt = require("bcrypt");
const userService = require("../services/users.service");

module.exports.getAllUsers = async (req, res, next) => {
  try {
    // const db = getDb();
    // const users = await db.collection("users").find().toArray();
    // res.status(200).send({ success: true, data: users });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getUserDetail = async (req, res, next) => {
  try {
    const { email } = req.params;
    const user = await userService.getUserDetailService(email);

    if (user) {
      res.status(200).send({
        success: true,
        message: `Found user with email ${email} `,
        data: user,
      });
    } else {
      res.status(200).send({
        success: false,
        message: "User not found in the database",
      });
    }
  } catch (error) {
    console.log(error);

    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};

module.exports.createUser = async (req, res, next) => {
  try {
    const result = await userService.createUserService(req.body);

    return res.status(200).send({
      success: true,
      message: `User added with id: ${result._id}`,
      data: result,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};

module.exports.updateAUser = async (req, res, next) => {
  try {
    // const db = getDb();
    // const { id } = req.params;
    // if (!ObjectId.isValid(id))
    //   return res
    //     .send(400)
    //     .send({ success: false, error: "Not a valid user id." });
    // const user = await db
    //   .collection("users")
    //   .updateOne({ _id: ObjectId(id) }, { $set: req.body });
    // if (!user.modifiedCount)
    //   return res
    //     .status(400)
    //     .send({ success: false, error: "Couldn't find a user with this ID" });
    // res.status(200).send({
    //   success: true,
    //   data: user,
    //   message: "Successfully updated the user",
    // });
  } catch (error) {
    console.log(error);
  }
};

module.exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email or Password not present",
    });
  }
  try {
    const user = await userService.getUserDetailService(email);

    if (!user) {
      return res.status(200).send({
        success: false,
        message: "User not found",
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      return res.status(200).send({
        success: true,
        message: "User found",
        data: user,
      });
    } else {
      return res.status(401).send({
        success: false,
        message: "Unauthorized",
      });
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};
