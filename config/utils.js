const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// The function, we're importing/ calling in usersController that is creating the password
exports.createPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Function that compares/ validates the PW the user typed in with the one in the DB
exports.comparePassword = async (password, hashedPassword) => {
  console.log(password, hashedPassword);
  return await bcrypt.compare(password, hashedPassword);
};

// Function that creates/ signs (signieren) the user token (JWT)
exports.createToken = (existingUser) => {
  console.log(existingUser); // hier steckt die _id drin, die wir unten verwenden

  // Syntax ist: jwt.sign(payload, secretOrPrivateKey, [options, callback]) - payload kann object oder string sein
  return jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// MUSS ICH DOTENV HIER AUCH IMPORIEREN?????
