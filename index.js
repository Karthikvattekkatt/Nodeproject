// const express = require('express');
// var morgan = require('morgan');
// const app = new express();
// const api=require('./routes/sample');
// require('dotenv').config();
// app.use(morgan('dev'));
// app.use('/api',api);
// const PORT=process.env.PORT;
// app.listen(PORT,()=>{
//     console.log(`Server is running on Port ${PORT}`);
// });
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

// Load the initial dataset from JSON file
let data = require('./data.json');

// GET request to retrieve all hospitals
app.get('/hospitals', (req, res) => {
  res.json(data.hospitals);
});

// GET request to retrieve a specific hospital by index
app.get('/hospitals/:index', (req, res) => {
  const index = req.params.index;
  if (index >= 0 && index < data.hospitals.length) {
    res.json(data.hospitals[index]);
  } else {
    res.status(404).json({ error: 'Hospital not found' });
  }
});

// POST request to add a new hospital
app.post('/hospitals', (req, res) => {
  const newHospital = req.body;
  data.hospitals.push(newHospital);
  saveDataToFile();
  res.json(newHospital);
});

// PUT request to update a hospital by index
app.put('/hospitals/:index', (req, res) => {
  const index = req.params.index;
  if (index >= 0 && index < data.hospitals.length) {
    data.hospitals[index] = req.body;
    saveDataToFile();
    res.json(data.hospitals[index]);
  } else {
    res.status(404).json({ error: 'Hospital not found' });
  }
});

// DELETE request to remove a hospital by index
app.delete('/hospitals/:index', (req, res) => {
  const index = req.params.index;
  if (index >= 0 && index < data.hospitals.length) {
    const deletedHospital = data.hospitals.splice(index, 1);
    saveDataToFile();
    res.json(deletedHospital[0]);
  } else {
    res.status(404).json({ error: 'Hospital not found' });
  }
});

// Function to save the updated dataset to the JSON file
function saveDataToFile() {
  fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
}

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
