const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const baseUrl = 'https://slack.com/api/';
const token = 'xxxx';

app.use(bodyParser.json());

app.post('/', (req, res) => {

    const eventData = req.body;

    if (eventData.type === 'url_verification') {
        res.send(eventData.challenge);
    }
    if (eventData.event.type === 'message') {
        console.log('entering message state');

        const channel = eventData.event.channel;
        const text = eventData.event.text;
        const url = encodeURI(`${baseUrl}chat.postMessage?token=${token}&channel=${channel}&text="heard ${text}`);
        request.post(requestBody, function(error, response, body) {
	});
    }

    else if(eventData.event.type == 'team_join') {
        const openImUrl = `${baseUrl}/im.open?token=${token}
    }
});


app.listen(3696);