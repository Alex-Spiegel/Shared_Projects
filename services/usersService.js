const userModel = require("../models/usersSchema");
const {
  createPassword,
  comparePassword,
  createToken,
} = require("../config/utils");

//==================================================
// POST /users/signup - sign up a new user
//==================================================
// Überprüft, ob ein Benutzer mit dem gegebenen Benutzernamen existiert
exports.checkUserExists = async (username) => {
  const user = await userModel.findOne({ username });
  return user;
};

// Erstellt einen neuen Benutzer mit gehashtem Passwort
exports.createNewUser = async (username, password) => {
  const hashedPassword = await createPassword(password);

  const newUser = new userModel({
    username,
    password: hashedPassword,
  });

  await newUser.save();

  return newUser;
};

//==================================================
// POST /users/login - Sign up a new user
//==================================================
// Überprüfen, ob der Benutzer mit dem angegebenen Benutzernamen existiert
exports.checkUserExists = async (username) => {
  const result = await userModel.findOne({ username });
  return result;
};

// Passwort validieren
exports.validatePassword = async (inputPassword, storedPassword) => {
  const result = await comparePassword(inputPassword, storedPassword);
  return result;
};

// Erstelle ein Authentifizierungstoken für den Benutzer
exports.generateAuthToken = (user) => {
  return createToken(user);
};

//==================================================
// GET /users/profile - got to user's profile
//==================================================
// Findet den Benutzer anhand der ID
exports.getUserById = async (userId) => {
  return await userModel.findById(userId);
};
