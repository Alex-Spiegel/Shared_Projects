const userModel = require("../models/usersSchema");
const userService = require("../services/usersService");

//==================================================
// POST /users/signup - Sign up a new user
//==================================================
exports.signUpUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Überprüfen, ob der Benutzername bereits existiert
    const existingUser = await userService.checkUserExists(username);
    if (existingUser) {
      throw new Error("Username already exists!");
    }

    // Neuen Benutzer erstellen
    const newUser = await userService.createNewUser(username, password);

    res.json({ message: "User created successfully!", user: newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//==================================================
// POST /users/login - Sign up a new user
//==================================================
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Überprüfen, ob der Benutzer existiert
    const existingUser = await userService.checkUserExists(username);

    if (!existingUser) {
      // Wenn der Benutzer nicht existiert
      throw new Error("User does not exist!");
    } else {
      // Wenn der Benutzer existiert, Passwort überprüfen
      const isPasswordValid = await userService.validatePassword(
        password,
        existingUser.password
      );

      if (!isPasswordValid) {
        // Wenn das Passwort ungültig ist
        throw new Error("Invalid password!");
      } else {
        // Wenn alles korrekt ist, Token erstellen
        const token = userService.generateAuthToken(existingUser);

        // Erfolgreiche Antwort mit Token
        res.json({
          message: "Login successful",
          token,
          username: existingUser.username,
        });
      }
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//==================================================
// GET /users/profile - got to user's profile
//==================================================
exports.userProfile = async (req, res) => {
  try {
    // Die Benutzer-ID wird aus dem `req.user`-Objekt entnommen (z. B. durch Middleware hinzugefügt)
    const user = await userService.getUserById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Erfolgreiche Antwort mit Benutzerdaten
    res.json({ user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
