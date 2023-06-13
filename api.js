const express = require('express');
const app = express();
const bodyParser = require('body-parser');


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
app.post('/primo', (req, res) => {
  const { num } = req.body;
  
  if (typeof num !== 'number') {
    return res.status(400).json({ error: 'El dato no es de tipo numerico' });
  }

  if (num <= 1) {
    return res.json({esPrimo : false});
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return res.json({esPrimo : false});
    }
  }

  return res.json({esPrimo : true});
});
//RESTA
// Endpoint for summing two numbers
app.post('/rest', (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Both num1 and num2 should be numbers' });
  }

  const rest = num1 - num2;
  return res.json({ result: rest });
});



//MENSAJE CON DATOS
app.get('/mensaje', (req, res) => {
  const message = "Oscar Perez - 20121349,  Esdras Toc - 201807373,  Fernando De Jesus- 201608315"

  // Check if the message exists
  if (!message) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  // Determine the type of the message
  const messageType = typeof message;

  // Send the response with the message type
  res.json({ type: message });
});



// Start the server
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});



