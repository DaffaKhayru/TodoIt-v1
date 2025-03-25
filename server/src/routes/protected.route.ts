import { Hono } from "hono";
import todoController from "../controllers/todo.controller";
import userController from "../controllers/user.controller";
import { jwt } from "hono/jwt";

const protectedRoute = new Hono();

// get secret key from env file
const secretKey: (string | undefined) = process.env.SECRET_KEY;

protectedRoute.use("/api/auth/*", jwt({
    secret: secretKey!
}));

// user routes
protectedRoute.get("/user/:id", userController.getUser);
protectedRoute.put("/user/:id", userController.updateUser);
protectedRoute.delete("/user/:id", userController.deleteUser);

// todo routes
protectedRoute.get("/todo/:user_id", todoController.findTodos);
protectedRoute.get("/todo/:user_id/:id", todoController.findTodo);
protectedRoute.post("/todo/:user_id", todoController.postTodo);
protectedRoute.put("/todo/:user_id/:id", todoController.updateTodo);
protectedRoute.delete("/todo/:user_id/:id", todoController.deleteTodo); 

export default {
    protectedRoute
};