import { Hono } from "hono";
import authController from "../controllers/auth.controller";

const publicRoute = new Hono();

publicRoute.post("/signup", authController.signup);
publicRoute.post("/login", authController.login);
publicRoute.post("/signout", authController.signout);

export default {
    publicRoute
}