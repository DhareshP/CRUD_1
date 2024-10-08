//defining routes mapping them to usercontroller and mapping them to appropriate user data
import express from "express";
import { fetch ,create, update } from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAllUsers", fetch);
route.put("/update/:id", update);
route.delete("/delete/:id",deleteUser);

export default route;