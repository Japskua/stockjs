/**
 * Created by Janne on 17.10.2014.
 */

var yahooFinance = require('yahoo-finance');


function StockManager() {

}


StockManager.prototype.GetSnapshot = function(callback) {
    yahooFinance.snapshot({
        symbol: 'AAPL',
        fields: ['s', 'n', 'd1', 'l1', 'y', 'r']
    }, function (err, snapshot) {
        if(err) {
            callback(err, null);
        }

        callback(null, snapshot);
    });

};

StockManager.prototype.GetHistorical = function(callback) {

    yahooFinance.historical({
        symbol: 'AAPL',
        from: '2012-01-01',
        to: '2012-12-31',
        period : 'd'
        // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
    }, function (err, quotes) {
        if(err) {
           callback(err, null);
        }

        callback(null, quotes);
    });

};

module.exports = StockManager;