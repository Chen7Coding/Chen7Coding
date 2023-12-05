
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded ({extanded: false}));
app.use(bodyParser.json())
  
app.get('/', (request, response) => {
  console.log(request,body);
  const { name } = request.body;

    res.send("Reservasi Berhasil")
  });
;
  app.post('books', (request, response) => {
    res.json({
      data:{
        author:name,
        releaserYear:"2023", 
        tittle: "Dibalik Senja"
      }
    })
  });

app.listen(3000, () => {
    console.log("APLIKASI BERJALAN PADA PORT 3000")
  });


//export { default as ourcar } from "./ourcar-models.js"
//export { default as reservation } from "./reservation-model.js";s