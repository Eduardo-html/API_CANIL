var express = require('express');

var app = express();
const port = 5000

app.use(express.json());
app.use(express.urlencoded({extended: true}));


const canil = [
  {
    "ID": 1,
    "CANIL": "Meu Canino Feliz",
    "DISTANCIA": 2,
    "VALOR_SEMANAL_CAES_PEQUENOS": 20,
    "VALOR_SEMANAL_CAES_GRANDES": 40,
  },
  {
    "ID": 2,
    "CANIL": "Vai Rex",
    "DISTANCIA": 1.7,
    "VALOR_SEMANAL_CAES_PEQUENOS": 15,
    "VALOR_SEMANAL_CAES_GRANDES": 50,
    "VALOR_FINAL_DE_SEMANA_CAES_PEQUENOS": 20,
    "VALOR_FINAL_DE_SEMANA_CAES_GRANDES": 55
  },
  {
    "ID": 3,
    "CANIL": "ChowChawgas",
    "DISTANCIA": 0.8,
    "VALOR_SEMANAL_CAES_PEQUENOS": 30,
    "VALOR_SEMANAL_CAES_GRANDES": 45,
    "VALOR_FINAL_DE_SEMANA_CAES_PEQUENOS": 30,
    "VALOR_FINAL_DE_SEMANA_CAES_GRANDES": 45
  }
];

app.post('/', function(request, response) {
  const payload = request.body;

  var bigDogs = payload['numCaesGrandes'];
  var smallDogs = payload['numCaesPequenos'];
  
  var date_schedule = payload['data'].split("/");
  let data = new Date(date_schedule[2], date_schedule[1]-1, date_schedule[0]);
  const weekday = data.getDay();

  let result = null;
  let lower_price = 0;

  for(i=0; i < canil.length; i++){ 
    let total = 0;

    if(weekday == 0 || weekday == 6){
      if(bigDogs > 0){
        if(canil[i]["ID"] == 1){
          const normal_price = (canil[i]['VALOR_SEMANAL_CAES_GRANDES'] * bigDogs);
          total += normal_price + ((normal_price * 20) / 100);
        } else {
          total += canil[i]['VALOR_FINAL_DE_SEMANA_CAES_GRANDES'] * bigDogs;
        }
      }
      if(smallDogs > 0){
        if(canil[i]["ID"] == 1){
          const normal_price = (canil[i]['VALOR_SEMANAL_CAES_PEQUENOS'] * smallDogs);
          total += normal_price + ((normal_price * 20) / 100);
        } else {
          total += canil[i]['VALOR_FINAL_DE_SEMANA_CAES_PEQUENOS'] * smallDogs;
        }
      }
    } else {
      if(bigDogs > 0){
        total += canil[i]['VALOR_SEMANAL_CAES_GRANDES'] * bigDogs;
      }
      if(smallDogs > 0){
        total += canil[i]['VALOR_SEMANAL_CAES_PEQUENOS'] * smallDogs;
      }
    }
    
    if(i == 0){
      lower_price = total;
      result = canil[i];
    } else if (total < lower_price) {
      lower_price = total
      result = canil[i];
    } else if (total == lower_price){
      if(canil[i]['DISTANCIA'] < result['DISTANCIA']){
        result = canil[i];
      }
    }
  }
  
  const best_result = {
    "name": result['CANIL'],
    "price": "R$ " + lower_price,
    "distance": result['DISTANCIA'] + " km"
  }
  response.status(200).send(best_result);
  
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
