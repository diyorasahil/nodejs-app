const express = require("express");
const dotenv = require('dotenv');

// connection
const mongooseConnectDB = require("./config/db");

// router
const appRouter = require("./routes")

const app = express()
const port = process.env.PORT || 3000

dotenv.config();

mongooseConnectDB(process.env.MONGODB_URL);

app.use(express.json());

app.use("/api/v1", appRouter);


app.listen(port, () => {
    console.log(`Server Running: ${port}`,)
})