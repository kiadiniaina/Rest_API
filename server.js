const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/db.config");

const entityRoutes = require("./routes/entity.routes");
const userRoutes = require("./routes/user.routes");
const userEntityRoutes = require("./routes/userEntity.routes");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

// Connection à MySQL et sync avec Sequelize models
db.sync();

app.use("/", entityRoutes);
app.use("/", userRoutes);
app.use("/", userEntityRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
