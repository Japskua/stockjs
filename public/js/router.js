/**
 * Created by Janne on 10.11.2014.
 */
define(['backbone',
        'views/home',
        'views/historical'],
    function (Backbone, HomeView, HistoricalView) {

        return Backbone.Router.extend({
            routes: {
                "": "home",
                "history" : "history"
            },
            initialize: function() {
                //this.headerView = new HeaderView();
                //this.headerView.render();
                //this.footerView = new FooterView();
                //this.footerView.render();

            },
            home: function() {
                if(!this.homeView) {
                    this.homeView = new HomeView();
                }
                $('#my-content').html(this.homeView.render().el)
            },
            history: function() {
                if(!this.historicalView) {
                    this.historicalView = new HistoricalView();
                }
                $('#my-content').html(this.historicalView.render().el)
            }
        });
    });