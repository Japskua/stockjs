/**
 * Created by Janne on 17.10.2014.
 */
var express = require('express');
var router = express.Router();
var StockManager = require('./../js/stock-manager');

/* GET stocks listing. */
router.get('/', function(req, res) {

    // Get the results from a stockmanager
    var stockManager = new StockManager();

    // Create the JSON for the call
    var json = {
        symbol: 'AAPL',
        from: '2012-01-01',
        to: '2012-12-31',
        period : 'd'
        // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
    };

    // Then, get the historical data)
    stockManager.GetHistorical(json, function HistoricalCallback (error, result) {
        if (error) {
            res.send(error);
        }

        // If no errors, send the results
        res.send(result);

    });

});

/* GET Historical listing by ID */
router.get('/:id', function(req, res) {

    // Get the results from a stockmanager
    var stockManager = new StockManager();

    // Create the JSON for the call
    var json = {
        symbol: req.params.id,
        from: '2012-01-01',
        to: '2012-12-31',
        period : 'd'
        // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
    };

    // Then, get the historical data)
    stockManager.GetHistorical(json, function HistoricalCallback (error, result) {
        if (error) {
            res.send(error);
        }

        // If no errors, send the results
        res.send(result);

    });

});

module.exports = router;
