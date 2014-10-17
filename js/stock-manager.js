/**
 * Created by Janne on 17.10.2014.
 */

var yahooFinance = require('yahoo-finance');


function StockManager() {

}


StockManager.prototype.GetSnapshot = function(json, callback) {

    // Get the snapshot from the finance module
    yahooFinance.snapshot(json, function (err, snapshot) {
        if(err) {
            callback(err, null);
        }
        callback(null, snapshot);
    });

};

StockManager.prototype.GetHistorical = function(json, callback) {

    yahooFinance.historical(json, function (err, quotes) {
        if(err) {
           callback(err, null);
        }

        callback(null, quotes);
    });

};

module.exports = StockManager;