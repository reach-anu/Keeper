const registerModel = require("../models/registerModel.js");
const noteModel = require("../models/noteModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await registerModel.findOne({ email: email });
  } catch (err) {
    console.log(err);
  }
  if (!existingUser) {
    return res
      .status(400)
      .json({ message: "User not found, Please Sign up first" });
  }
  const validpwd = await bcrypt.compare(password, existingUser.password);
  if (!validpwd) {
    return res.status(400).json({ message: "Incorrect Password" });
  }
  const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "2hr",
  });
  return res.status(200).json({ message: "Successfully logged in", token });
};

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  let check;
  try {
    check = await registerModel.findOne({ email: email });
  } catch (err) {
    console.log(err);
  }
  if (check) {
    return res.status(400).json({ message: "User already exists!" });
  }
  const hashpassword = await bcrypt.hash(password, 10);
  const newuser = new registerModel({
    name,
    email,
    password: hashpassword,
  });

  try {
    await newuser.save();
  } catch (err) {
    console.log(err);
  }

  return res.status(200).json({ message: "Sign Up successful!" });
};

const notesList = async (req, res) => {
  const notes = await noteModel.find();
  res.send(notes);
};

const noteAdd = async (req, res) => {
  await noteModel
    .create(req.body)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

const noteDelete = async (req, res) => {
  await noteModel
    .deleteOne({ _id: req.params.id })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

module.exports = { login, register, notesList, noteAdd, noteDelete };
