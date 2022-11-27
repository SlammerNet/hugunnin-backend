import express from 'express';

const app = express();

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Listening server on port ${PORT}...`)
});

export default app;