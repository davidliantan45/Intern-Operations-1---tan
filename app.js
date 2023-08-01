const express = require('express');
const app = express();

function getGreeting() {
  const currentHour = new Date().getHours();
  return currentHour < 12 ? 'Good morning' : 'Good evening';
}

function getCurrentTime() {
  return new Date().toLocaleTimeString();
}

app.get('/', (req, res) => {
  const greeting = getGreeting();
  const currentTime = getCurrentTime();
  const response = `${greeting} Blokc! The time is: ${currentTime}`;
  res.send(response);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
