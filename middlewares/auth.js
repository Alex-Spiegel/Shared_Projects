// wir schalten diese middleware hier zur Authentifizierung vor
const jwt = require("jsonwebtoken");

exports.protect = async (req, res, next) => {
  try {
    // hier nehmen wir den token aus dem Request-Header. Er hat die Form: Authorization: Bearer {token}
    const token = req.header("Authorization").replace("Bearer ", ""); // die replace method ersetzt den Schmu mit empty space, sodass nur noch der token übrig bleibt, den wir dann in der const "token" speichern
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // die jwt-method "verify" decrypted "token" ausm header per SECRET string -> speichert in decoded
    req.user = decoded; // dann senden wir was decoded wurde
    next();
  } catch (error) {
    res.status(403).json({ message: "Unauthorized! You shall not pass!" });
  }
};
