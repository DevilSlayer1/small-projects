const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;
let store=[]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
});

// Handle form submissions
app.post('/submit-form', (req, res) => {
  const username = req.body.Username;
  const email = req.body.Email;
  const pass=req.body.Password;
  console.log(username,email,pass);
 store.push(username)
  // Process the form data (you can add your logic here)

  // Send a response
  res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
