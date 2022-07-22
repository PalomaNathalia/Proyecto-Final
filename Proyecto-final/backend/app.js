const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const history = require("connect-history-api-fallback");
const fs = require("fs");
// Settings
app.set("port", 3000);
app.listen(app.get("port"), console.log("Server on port 3000"));

// Middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const expressFileUpload = require("express-fileupload");
app.use(
  expressFileUpload({
    limits: { fileSize: 5000000 },
    abortOnLimit: true,
    responseOnLimit:
      "El peso del archivo que intentas subir supera el límite permitido",
  })
);

// Rutas
app.use("/", require("./routes/routes"));

// Middlewars for Vue
app.use(history());
app.use(express.static(__dirname + "/public"));
