# API_CANIL
Valores / Distância.

## LINGUAGEM
Node.js ambiente de execução Javascript server-side.

## DEPENDECIAS
Express, Bory-Parser,
Nodemon, Cors, Morgan.

## PROGRAMAS UTILIZADOS NO DESENVOLVIMENTO
Insominia, VsCode, Google Chromer.

### INICIAR PROJETO NA SUA MAQUINA
Instalar VsCode, Insominia.

No VsCode abrir o terminal e utilizar os seguintes comandos em ordem : <br>

git clone https://github.com/Eduardo-html/API_CANIL.git <br>
Irá clonar o repositorio na sua maquina.<br>

npm install <br>
Irá baixar todas as dependecias necessarias para o funcionamento da API.

Após isto no terminal utilizar o seguinte comando: npm start <br>
Pronto isso irá iniciar o servidor local. Ativando API.

No Insominia. Escolher metodo POST e no endereço de link digitar : http://localhost:5000/<br>
Após isso Clicar no modo JSON e colocar a entrada exemplo:<br>
{ <br>
"data": "19/04/2021",<br>
"numCaesPequenos": 6,<br>
"numCaesGrandes": 4 }<br>

Clicar em Send ao lado do link.

No lado direito será aprensado uma saída com o melhor custo de preço.<br>
Exemplo de saída:<br>
{<br>
  "name": "Meu Canino Feliz",<br>
  "price": "R$ 280",<br>
  "distance": "2 km"<br>
}<br>
