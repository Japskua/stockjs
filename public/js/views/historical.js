/**
 * Created by Janne on 10.11.2014.
 */
define(['backbone',
        'bootstrap',
        'text!templates/historical.html'],
    function(Backbone, Bootstrap, Template) {

        return Backbone.View.extend({
            initialize : function() {

            },
            template : _.template(Template),

            render : function() {

                this.$el.html(this.template());

                return this;
            }
        });
    });