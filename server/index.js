const express = require("express");
const User = require("./authModel");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
app.use(express.json());

dotenv.config();
app.use(cors());

PORT = 5000 || process.env.PORT;

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("mongo connected"))
  .catch((err) => console.log(err));

app.post("/create-user", cors(), async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    const saveUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashed,
    });
    const user = await saveUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/login-user", cors(), async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user == null) {
      res.status(404).json("user not found");
    } else {
      const validate = await bcrypt.compare(req.body.password, user.password);
      if (!validate) {
        res.status(400).json("wrong password");
      } else {
        const { password, ...others } = user._doc;
        res.status(200).json(others);
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
