/**
 * Created by Janne on 10.11.2014.
 */
require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        moment: {
            exports: 'Moment'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'Bootstrap'
        }
    },
    paths: {
        jquery:     'libs/jquery-1.11.1.min',
        backbone:   'libs/backbone',
        bootstrap:  'libs/bootstrap.min',
        underscore: 'libs/underscore-min',
        moment:     'libs/moment-with-locales'
    }
});

window.App = window.App || {};

require(['backbone','router'], function (Backbone, Router) {
    window.App.Router = new Router();
    Backbone.history.start();
});