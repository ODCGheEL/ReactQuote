require('dotenv').config();
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const quotesRoutes = require("./routes/quotesRoutes")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan("dev"))

app.use("/api", quotesRoutes)

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});