const express = require("express");
const vehicleRoutes = require("./routes/vehicleRoutes");

const app = express();

app.use(express.json());
app.use("/vehicles", vehicleRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});