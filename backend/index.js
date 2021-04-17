const cors = require("cors");
const express = require("express");
const Attachment = require("./models/Attachment");
const Task = require("./models/task");
const User = require("./models/user");
const taskRoutes = require("./routes/task");
const userRoutes = require("./routes/user");
const attachRoutes = require("./routes/attachment");
const sequelize = require("./util/database");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/task", taskRoutes);
app.use("/api/user", userRoutes);
app.use("/api/attachment", attachRoutes);

app.use((req, res, next) => {
  res.status(404).send("Request Api Not Found");
});

Task.belongsTo(User, {constrain: true, onDelete: "CASCADE"});
User.hasMany(Task);

Attachment.belongsTo(Task, {constrain: true, onDelete: "CASCADE"});
Task.hasMany(Attachment);

sequelize
  .sync()
  .then((result) => {
    app.listen(4500, () => console.log("Listening on port 4500"));
  })
  .catch((err) => {
    console.log(err);
  });
