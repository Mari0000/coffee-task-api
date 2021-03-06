const mongoose = require("mongoose");

const coffeePodSchema = new mongoose.Schema({
  productCode: {
    type: String,
    unique: true
  },
  modelType: {
    type: String,
    enum: ['COFFEE_POD_LARGE', 'COFFEE_POD_SMALL', 'ESPRESSO_POD'],
    default: 'BASE_MODEL',
    required: true,

  },
  coffeeFalvor: {
    type: String,
    enum: ['COFFEE_FLAVOR_VANILIA', 'COFFEE_FLAVOR_CARAMEL', 'COFFEE_FLAVOR_PSL','COFFEE_FLAVOR_MOCHA','COFFEE_FLAVOR_HAZELNUT'],
    default: 'COFFEE_FLAVOR_VANILIA',
    required: true,

  },
  packSize: {
    type: String,
    enum: ['1 dozen', '3 dozen', '5 dozen','7 dozen'],
    default: '1 dozen',
    required: true,
  } 
});

const CoffeePod = mongoose.model("CoffeePod", coffeePodSchema);
module.exports = CoffeePod;