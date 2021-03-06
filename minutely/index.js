var superagent = require('superagent');

exports.handler = function(event, context) {
    console.log(event.queryStringParameters);

    // Call the geocoder with the loc
    superagent.get(process.env.FORECAST_URI + event.queryStringParameters.loc)
        .end(function (err, forecast) {
            console.log("Forecast result: " + JSON.stringify(forecast.body.minutely));
            // Get the forecast
            context.succeed({
                statusCode: 200,
                headers: {},
                body: JSON.stringify(forecast.body.minutely)
            });
        });
};
