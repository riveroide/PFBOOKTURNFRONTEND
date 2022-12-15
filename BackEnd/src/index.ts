import express from "express";
import clients from "./routes/clients";
import business from "./routes/business";
import services from"./routes/services";
import booking from "./routes/booking"

const app = express();
app.use(express.json()); //middleware que transforma req.body en json

const PORT = 3000;

app.use("/clients", clients);

app.use("/business", business);

app.use("/services",services);

app.use("/booking",booking)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
