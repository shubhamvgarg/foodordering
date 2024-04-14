import express  from "express";
import cors from "cors";
import "dotenv/config";

const PORT = 8000
const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.listen(PORT,()=>{
console.log(`server started at ${PORT}: http://localhost:${PORT}`);
})