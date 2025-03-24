import { Hono } from "hono";
import publicRoute from "./routes/public.route";
import { HTTPException } from "hono/http-exception";
import { ZodError } from "zod";
import protectedRoute from "./routes/protected.route";

const app = new Hono();

app.route("/api", publicRoute.publicRoute);
app.route("/api/auth", protectedRoute.protectedRoute);

// handle http error and exception
app.onError(async (err, c) => {
    if(err instanceof HTTPException) {
        c.status(err.status);

        return c.json({
            error: err.message
        });
    }else if(err instanceof ZodError) {
        c.status(400);

        return c.json({
            error: err.message
        });
    }else {
        c.status(500);

        return c.json({
            error: err.message
        });
    }
});

export default app;