import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
app.use(bodyParser.json());

const dbFile = 'db.json';

// Ensure the DB file exists
if (!fs.existsSync(dbFile)) {
    fs.writeFileSync(dbFile, JSON.stringify([]));
}

// Routes
app.get('/ping', (req, res) => {
    res.send(true);
});

app.post('/submit', (req, res) => {
    const submissions = JSON.parse(fs.readFileSync(dbFile, 'utf8'));
    submissions.push(req.body);
    fs.writeFileSync(dbFile, JSON.stringify(submissions, null, 2));
    res.send('Submission received');
});

app.get('/read', (req, res) => {
    const { index } = req.query;

    // Check if index is undefined or not a valid number
    if (index === undefined || isNaN(Number(index))) {
        return res.status(400).send('Invalid index parameter');
    }

    const submissions = JSON.parse(fs.readFileSync(dbFile, 'utf8'));
    const indexNumber = Number(index);

    if (indexNumber < 0 || indexNumber >= submissions.length) {
        return res.status(404).send('Submission not found');
    }
    
    res.send(submissions[indexNumber]);
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});
