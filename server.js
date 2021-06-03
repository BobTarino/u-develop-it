const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Connect to database // variable db holds coonnection
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Bobcatthedawg10*',
      database: 'election'
    },
    console.log('Connected to the election database.')
);
// Default response for any other request (Not Found) // make sure this is last route
app.use((req, res) => {
    res.status(404).end();
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});