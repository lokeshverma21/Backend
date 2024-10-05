import express from "express";
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


app.use(express.json({limit: "24kb"}))
app.use(express.urlencoded({extended: true, limit: "24kb"}))
app.use(express.static("public"))

app.use(cookieParser());




//routes
import userRouter from "./routes/user.routes.js"

//declaration of route
app.use("/api/v1/users", userRouter)

//route example
// http://localhost:8000/api/v1/users/register

export {app}
