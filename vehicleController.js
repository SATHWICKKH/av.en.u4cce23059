const vehicles = require("../data/vehicles");
const Log = require("../../logging_middleware/logger");
const addVehicle = async (req, res) => {
    const vehicle = req.body;

    vehicles.push(vehicle);

    await Log(
        "backend",
        "info",
        "controller",
        "Vehicle added successfully"
    );

    res.status(201).json(vehicle);
};

const getVehicles = async (req, res) => {

    await Log(
        "backend",
        "info",
        "controller",
        "Fetched vehicles"
    );

    res.json(vehicles);
};

module.exports = {
    addVehicle,
    getVehicles
};