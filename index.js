const express = require("express");
const cors = require("cors");
const productsRouter = require("./routes/productRoutes");
const ordersRouter = require("./routes/ordersRoutes");
const usersRouter = require("./routes/usersRoutes");
const { run } = require("./config/db-client");
const { specs, swaggerUi } = require("./config/swagger");

const app = express();

// used to parse body's JSON
app.use(express.json());
// hier wird cors initialisiert
app.use(cors());
// hier wird die Products-Route initialisiert
app.use("/products", productsRouter);
// hier wird die Orders-Route initialisiert
app.use("/orders", ordersRouter);
// hier wird die Users-Route initialisiert
app.use("/users", usersRouter);

run();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(5050, () => {
  console.log("Server is running. Listening to port 5050");
});
