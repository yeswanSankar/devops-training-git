const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    background-color: purple;
                    font-style: italic;
                    font-family: 'Arial', sans-serif;
                    color: white;
                    text-align: center;
                    padding: 50px;
                }
            </style>
            <title> YASH GIT-HUB PROJECT FOR NODE.JS APP </title>
        </head>
        <body>
            <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
                The image will float to the right of the text.</p>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
