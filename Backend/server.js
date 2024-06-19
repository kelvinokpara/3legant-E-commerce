import express from "express";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

// dotenv config
dotenv.config();

// express init
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

console.log(process.env.NODE_ENV);

const port = process.env.NODE_ENV === "development" ? 5000 : process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port} in development mode. `.bgGreen);
});
