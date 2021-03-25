const express = require('express')
const morgan = require('morgan')
const cors = require('cors')


const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

let db =[
    {
        "canil": [
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
        ]
    }
]

app.get('/', (req,resp) => {
    return resp.json(db)
})


app.listen(3000, () => {
    console.log('Express started at http://localhost:3000')
})

