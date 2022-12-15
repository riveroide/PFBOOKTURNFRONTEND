import express from "express";
const app = express();
app.use(express.json()); //middleware que transforma req.body en json

const PORT = 3000;

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.get("/pingo", (_req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
