/**
 * Created by Janne on 10.11.2014.
 */
define(['backbone', 'models/stock'], function(Backbone, StockModel) {
    return Backbone.Collection.extend({
        model: StockModel,
        urlBase: '/historical/',
        urlComplete: undefined,
        url: function() {
            return this.urlComplete ? this.urlComplete : this.urlBase;
        },
        setUrl: function(path) {
            this.urlComplete = this.urlBase + path;
        }
    });
});