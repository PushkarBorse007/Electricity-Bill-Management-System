import Users from "../model/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const newRegister = async (req, res) => {
  const { firstName, lastName,username, email, password } = req.body;

  try {
    if (!username || !email || !password || !firstName || !lastName) {
      return res.status(400).json({ massge: "all field are required" });
    }
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ status: "failed", message: "Email already in use" });
    }

    const newUser = await Users({
      firstName,
      lastName,
      username,
      email,
      password: password,
    });
    await newUser.save();
    return res.status(200).json({ massgae: "user registered successfully" });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ massgae: "There is error", error: error });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
 
  try {
    if (!email || !password) {
      return res.status(401).json({ message: "all fields are required" });
    }
    const findUser = await Users.findOne({ email });
    if (!findUser) {
      return res
        .status(401)
        .json({ Error: "User not found please regitser first!" });
    }

    
  
    const isMatch = findUser.password === password;
    
    if (!isMatch) {
      return res.status(401).json({ message: "user password is incorrect" });
    }
    if (findUser.email === email && isMatch) {
  
      const token = await jwt.sign(
        { userID: findUser._id },
         process.env.JWT_KEY,
        {
          expiresIn: "4d",
        }
       
      );
  
      return res.status(200).send({
        status: "success",
        message: "user login",
        token: token,
        username: findUser.username,
        firstName:findUser.firstName,
        lastName:findUser.lastName,
        id: findUser._id,
      });
    }
    return res
      .status(200)
      .send({ status: "failed", message: "email is invalid" });
  } catch (error) {
    return res.status(400).send({ status: "failed", message: error });
  }
};
