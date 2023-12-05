import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import { ourcar } from "./index.js";

const ourcar = sequelize.define("ourcar", {
  image: DataTypes.STRING,
  name_car: DataTypes.STRING,
  power: DataTypes.STRING,
  seat: DataTypes.STRING,
  transmission: DataTypes.STRING,
  price: DataTypes.INTEGER
});

export default ourcar;