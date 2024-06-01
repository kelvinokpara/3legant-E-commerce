import express from "express";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port} in development mode. `.bgGreen);
});
