import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import { reservation } from "./index.js";

const reservation = sequelize.define("reservation", {
  name_car: DataTypes.STRING,
  name: DataTypes.STRING,
  phone_number: DataTypes.INTEGER,
  email: DataTypes.STRING,
  address: DataTypes.STRING,
  pickup_date : DataTypes.STRING,
  return_date: DataTypes.STRING,
  total_price: DataTypes.INTEGER
});

export default reservation;