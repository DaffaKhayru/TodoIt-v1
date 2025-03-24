import { Hono } from "hono";
import todoController from "../controllers/todo.controller";
import { jwt } from "hono/jwt";

const protectedRoute = new Hono();

// get secret key from env file
const secretKey: (string | undefined) = process.env.SECRET_KEY;

protectedRoute.use("/api/auth/*", jwt({
    secret: secretKey!
}));

protectedRoute.get("/todo/:user_id", todoController.findTodos);
protectedRoute.get("/todo/:user_id/:id", todoController.findTodo);
protectedRoute.post("/todo/:user_id", todoController.postTodo);
protectedRoute.put("/todo/:user_id/:id", todoController.updateTodo);
protectedRoute.delete("/todo/:user_id/:id", todoController.deleteTodo); 

export default {
    protectedRoute
};