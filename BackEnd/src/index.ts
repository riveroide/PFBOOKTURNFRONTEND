import express from "express";
import clients from "./routes/clients";
import business from "./routes/business";
import services from"./routes/services";
import booking from "./routes/booking"

const app = express();
app.use(express.json()); //middleware que transforma req.body en json

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

const PORT = 3001;

app.use("/clients", clients);

app.use("/business", business);

app.use("/services",services);

app.use("/booking",booking)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
