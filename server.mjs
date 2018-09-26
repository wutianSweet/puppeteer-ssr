const express = require('express');
const puppeteer = require('puppeteer');
const ssr = require('./ssr.mjs');

let browserWSEndpoint = null;
const app = express();

app.get('/', async (req, res, next) => {
    if (!browserWSEndpoint) {
        const browser = await puppeteer.launch({
            headless: true,
            //devtools: true, // open devtools but we need set headless false in the same time
        });
        browserWSEndpoint = await browser.wsEndpoint();
    }
    const url = `${req.protocol}://${req.get('host')}/index.html`;

    const ssrStart = Date.now();

    const { html } = await ssr(url, browserWSEndpoint);

    return res.status(200).send(html);
});

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(8080, () => console.log('Server started. Press Ctrl+C to quit'));