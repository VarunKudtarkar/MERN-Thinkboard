import express from "express";
import dotenv from "dotenv";
import cors from "cors"

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
}))
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);


connectDB().then(() => {
  app.listen(5000, () => {
    console.log("Server started on PORT:", 5000);
  });
});


//mongodb+srv://varkud2005:sZn2gw005WWANZOp@cluster0.eamdjcp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0