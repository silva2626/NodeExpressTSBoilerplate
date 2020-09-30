import express from "express";
import { APP_PORT } from "./config/config";
import routes from "./routes";

const app = express();

app.use(routes);

app.listen(APP_PORT);
