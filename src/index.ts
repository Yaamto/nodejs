import express, { Express, Request, Response } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

const authRoute = require("./routes/authRoute");
const eventRoute = require("./routes/eventRoute");
const adressRoute = require("./routes/adressRoute");
require("./config/db");
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3003;
const logger = require("./logger");

app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

app.use("/api/auth", authRoute);
app.use("/api/event", eventRoute);
app.use("/api/adress", adressRoute);
