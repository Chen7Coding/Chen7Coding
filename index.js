const express = require("express");
const app = express();
//const bodyParser = require("body-parser");
//app.use(bodyParser.urlencoded ({extanded: false}));
//app.use(bodyParser.json())
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:null:127.0.0.1/db_jogjawheels') // Example for postgres

const startServer = async() =>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
  app.get('/', (request, response) => {
    //console.log(request,body);
    //const { name } = request.body;
      res.send("Reservasi Berhasil")
    });
  ;
    app.get('/reservation', (request, response) => {
      res.json({
        data:{
          id:"1",
          name_car:"toyota avanza",
          name:"Muhamad Yunus",
          phone_number:"081234567789",
          email:"yunusss21@gmail.com",
          pickup_location:"take it alone",
          pickup_date:"05-12-2023",
          return_date:"07-12-2023",
          total_harga:"1000000"
        }
      })
    });
  
  app.listen(3000, () => {
      console.log("WEB BERJALAN PADA PORT 3000")
    });
}

startServer();


//export { default as ourcar } from "./ourcar-models.js"
//export { default as reservation } from "./reservation-model.js";s