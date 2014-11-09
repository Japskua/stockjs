/**
 * Created by Janne on 9.11.2014.
 */

var should = require('should');
var StockManager = require('./../js/stock-manager');
var winston = require('winston');

describe("Testing stock-manager.js for its functions", function() {

    describe("Checking for working snapshots", function () {
        it("Should get a snapshot of the defined stock", function(done) {

            var stockManager = new StockManager();

            // Define the JSON
            var json = {
                symbol: 'AAPL',
                fields: ['s', 'n', 'd1', 'l1', 'y', 'r']
            };

            stockManager.GetSnapshot(json, function(err, result) {

                if(err) {
                    throw err;
                }


                // Things should be okay
                result.name.should.equal('Apple Inc.');
                result.should.not.be.empty;

                // Things ok!
                done();
            });
        });

    });

    describe("Checking for the historical data", function() {
        it("Should get historical data of apple stock", function(done) {

            var stockManager = new StockManager();

            var json = {
                symbol: 'AAPL',
                from: '2012-01-01',
                to: '2012-12-31',
                period : 'd'
                // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
            };

            stockManager.GetHistorical(json, function(err, result) {
                if(err) {
                    throw err;
                }

                // Things should be okay
                result.should.not.be.empty;
                result[0].open.should.be.number;
                result[0].high.should.be.number;
                result[0].low.should.be.number;
                result[0].close.should.be.number;

                // Works!
                done();
            });
        });
    });

});