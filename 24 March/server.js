import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import User from "./models/User.js";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://ayushich2005_db_user:MO0eb1zutADIOaQK@cluster0.cmaes6c.mongodb.net/test"
)
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Server is working");
});


// SIGNUP
app.post("/api/signup", async (req, res) => {

  console.log("Signup API called");

  const { email, password } = req.body;

  try {

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const newUser = new User({ email, password });

    await newUser.save();

    res.json({ message: "Signup successful" });

  } catch (error) {
    res.json({ message: "Signup error" });
  }

});


// LOGIN
app.post("/api/login", async (req, res) => {

  console.log("Login API called");

  const { email, password } = req.body;

  try {

    const user = await User.findOne({ email, password });

    if (user) {
      res.json({ message: "Login successful" });
    } else {
      res.json({ message: "Invalid email or password" });
    }

  } catch (error) {
    res.json({ message: "Login error" });
  }

});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});