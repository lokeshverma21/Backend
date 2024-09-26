import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            joke: "Why do tigers have stripes? They don't want to be spotted",
        },
        {
            id: 2,
            joke: "Why do dragons sleep during the day? So they can hunt knights.",
        },
        {
            id: 3,
            joke: "What does a house wear? Address.",
        },
        {
            id: 4,
            joke: "What do you call coffee with a sixth sense? Déjà brew.",
        },
    ]

    res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})