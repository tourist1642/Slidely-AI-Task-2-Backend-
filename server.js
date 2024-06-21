"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const dbFile = 'db.json';
// Ensure the DB file exists
if (!fs_1.default.existsSync(dbFile)) {
    fs_1.default.writeFileSync(dbFile, JSON.stringify([]));
}
// Routes
app.get('/ping', (req, res) => {
    res.send(true);
});
app.post('/submit', (req, res) => {
    const submissions = JSON.parse(fs_1.default.readFileSync(dbFile, 'utf8'));
    submissions.push(req.body);
    fs_1.default.writeFileSync(dbFile, JSON.stringify(submissions, null, 2));
    res.send('Submission received');
});
app.get('/read', (req, res) => {
    const { index } = req.query;
    // Check if index is undefined or not a valid number
    if (index === undefined || isNaN(Number(index))) {
        return res.status(400).send('Invalid index parameter');
    }
    const submissions = JSON.parse(fs_1.default.readFileSync(dbFile, 'utf8'));
    const indexNumber = Number(index);
    if (indexNumber < 0 || indexNumber >= submissions.length) {
        return res.status(404).send('Submission not found');
    }
    res.send(submissions[indexNumber]);
});
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
