/**
 * Created by Janne on 10.11.2014.
 */
define(['backbone'], function(Backbone) {
    return Backbone.Model.extend({
        idAttribute : '_id',

        initialize : function() {
            console.log("Model has been initialized");
        },

        defaults : {
            title : ''
        }
    });
});