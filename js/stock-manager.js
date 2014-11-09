/**
 * Created by Janne on 17.10.2014.
 */

var yahooFinance = require('yahoo-finance');

/**
 * Creates the stock manager
 * @constructor
 */
function StockManager() {

}


/**
 * Gets a snapshot of the defined stock
 * @param {JSON} json The JSON containing search info
 * @param {Function} callback The callback function (err, result)
 * @constructor
 */
StockManager.prototype.GetSnapshot = function(json, callback) {

    // Get the snapshot from the finance module
    yahooFinance.snapshot(json, function (err, snapshot) {
        if(err) {
            callback(err, null);
        }
        callback(null, snapshot);
    });

};

/**
 * Gets the historical information from the stock manager
 * @param {JSON} json The JSON info to search for
 * @param {Function} callback The callback function (err, result)
 * @constructor
 */
StockManager.prototype.GetHistorical = function(json, callback) {

    yahooFinance.historical(json, function (err, quotes) {
        if(err) {
           callback(err, null);
        }

        callback(null, quotes);
    });

};

module.exports = StockManager;