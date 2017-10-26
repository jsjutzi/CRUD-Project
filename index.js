const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
require("dotenv").config();
const productsController = require("./products_controller");

const app = express();
app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance =>
  app.set("db", dbInstance)
);

app.post("/api/product", productsController.create);
app.get("/api/products", productsController.getAll);
app.get("/api/product/:id", productsController.getOne);
app.put("/api/product/:id", productsController.update);
app.delete("/api/product/:id", productsController.delete);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("I'm listening at port ${port}.");
});
