const express = require('express');
const app = express();
const bodyParser = require('body-parser');

 -- NO TOCAR
app.use(bodyParser.json());

//SUMA
app.post('/suma', (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Both num1 and num2 should be numbers' });
  }

  const sum = num1 + num2;
  return res.json({ result: sum });
});

//PRIMOS

//RESTA

//MENSAJE CON DATOS




// Start the server- NO TOCAR
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});



