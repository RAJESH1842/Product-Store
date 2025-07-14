import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

console.log(PORT);

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use(morgan("dev"));

app.get("/api/products", (req, res) => {
    
    res.status(200).json({
        success: true,
        data: [
            { id: 1, name: "product 1"},
            { id: 2, name: "product 2"},
            { id: 3, name: "product 3"},
        ],
    });
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
  

    