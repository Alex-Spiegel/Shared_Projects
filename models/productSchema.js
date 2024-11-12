const mongoose = require("mongoose"); // Import von Mongoose
const { Schema, model } = mongoose;

const DOCUMENT_NAME = "product"; // Singular-Name des Dokuments
const COLLECTION_NAME = "products"; // Name der Collection in der DB

const productSchema = new Schema( // Neues Schema initialisieren
  {
    Produktname: {
      type: String,
      required: true,
    },
    Beschreibung: {
      type: String,
      required: true,
    },
    Kategorie: {
      type: String,
      required: false,
    },
    Preis: {
      type: Number, // `Number` ist richtig für Dezimalwerte
      required: true,
    },
    Auf_Lager: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const productModel = model(DOCUMENT_NAME, productSchema, COLLECTION_NAME); // Reihenfolge wichtig, da Parameter

module.exports = productModel;
