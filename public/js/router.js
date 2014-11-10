/**
 * Created by Janne on 10.11.2014.
 */
define(['backbone','views/home'], function (Backbone, HomeView) {

        return Backbone.Router.extend({
            routes: {
                "": "home"
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
            }
        });
    });