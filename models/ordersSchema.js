const mongoose = require("mongoose"); // Import von Mongoose
const { Schema, model } = mongoose;

const DOCUMENT_NAME = "orders"; // Singular-Name des Dokuments
const COLLECTION_NAME = "orders"; // Name der Collection in der DB

const ordersSchema = new Schema( // Neues Schema initialisieren
  {
    orderNumber: {
      type: String,
      required: true,
    },
    customer: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    products: {
      type: [{ type: Schema.Types.ObjectId, ref: "product" }],
      default: [],
    },
  },
  { timestamps: true }
);

const ordersModel = model(DOCUMENT_NAME, ordersSchema, COLLECTION_NAME); // Reihenfolge wichtig, da Parameter

module.exports = ordersModel;

// 5. swagger implenentieren
// 6. authentifizierung nachrüsten (SA hands-on 2. session)
