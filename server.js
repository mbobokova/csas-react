import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import cors from 'cors'


const app = express();

// Povolenie CORS pre všetky domény
app.use(cors());
app.use(bodyParser.json());

// Endpoint Client Contact Data
app.post('/client-data', (req, res) => {
    const data = req.body;
    console.log(data)
    // Create JSON file
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error saving data.');
        } else {
            res.send('Data saved successfully!');
        }
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));