const User = require("../model/User");
const bcrypt = require("bcrypt");

exports.createUserService = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = { ...data, password: hashedPassword };

  console.log(user);
  return await User.create(user);
};

exports.getUserDetailService = async (email) => {
  const user = await User.findOne({ email: email });
  return user;
};

// exports.loginUserService = async (email, password) => {
//   const user = await User.findOne({ email: email });
//   return user;
// };
