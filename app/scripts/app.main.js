/*global require, Modernizr*/

/*
* This file is considered the main application bootstrap. For simple projects this file
* could be all you need for site functionality. For more than very basic js sites give minion.js a try:
* https://bitbucket.org/genuine/minion
*
* or in the commandline using bower:
* bower install git@bitbucket.org:genuine/minion.git --save-dev
 */

(function(){
    'use strict';

    require.config({
        shim: {
            'tweenmax' : {
                exports: 'TweenMax'
            },
            'jquery.tm' : {
                deps: ['jquery', 'tweenmax'],
                exports: '$'
            },
                // 'timelinemax' : {
                //     deps : ['tweenmax'],
                //     exports: 'TimelineMax'
                // },
            'soundmanager' : {
                exports: 'soundManager'
            }
        },
        paths: {

            //Libraries
            jquery       : 'bower_components/jquery/jquery',
            soundmanager : 'bower_components/soundmanager/script/soundmanager2',


            // modernizr : 'bower_components/modernizr',
            underscore   : 'bower_components/underscore/underscore',
            backbone     : 'bower_components/backbone/backbone',
            almond       : 'bower_components/almond/almond',
            text         : 'bower_components/requirejs-text/text',
            d3           : 'bower_components/d3/d3',
            tweenmax     : 'bower_components/GreenSock-JS/src/minified/TweenMax.min',
            'jquery.tm'  : 'bower_components/GreenSock-JS/src/minified/jquery.gsap.min',
            // timelinemax  : 'bower_components/GreenSock-JS/src/minified/TimelineMax',


            //Core
            app          : 'app',
            core         : 'core/core',
            router       : 'router',
            util         : 'core/util',

            //Sandbox
            sandbox      : 'core/sandbox',

            //Modules
            'tracklist.view'  : 'modules/tracks/tracklist.view',
            'tracklist.collection' : 'modules/tracks/tracklist.collection',
            'track.model' : 'modules/tracks/track.model',
            'track.view' : 'modules/tracks/track.view',
            player       : 'modules/player/player',
            controls     : 'modules/player/controls',
            nav          : 'modules/nav/nav',

            //Controllers
            playerController : 'controllers/playerController',
            contactController : 'controllers/contactController',


            //Pages
            contact      : 'modules/contact/contact'


        }
    });

    require([
        'soundmanager',
        'jquery',
        'backbone',
        'sandbox',
        'router',
        'jquery.tm'

    ], function( soundManager, $, Backbone, Sandbox ,TrackRouter) {

        var app = {};

        var $initDfd = $.Deferred();
        var sandbox = new Sandbox('config');
        
        soundManager.onready(function(){
            $initDfd.resolve();
        });

        $(function(){

            $initDfd.then(function(){
                app.router = new TrackRouter();
                Backbone.history.start();

            });

            soundManager.setup({
                url: '/media/flash/soundmanager2_flash9.swf',
                flashVersion: 9,
                useFlashBlock: false,
                debugMode: sandbox.isDebug(),
                preferFlash:false,
                ontimeout: function(/*error*/) {
                // uh-oh, SM2 failed to start - error, unsupported or other issue
                    //console.log('we messed up: ', error);
                },
                flash9Options : {
                    useWaveformData: false
                }
        
            });

            soundManager.defaultOptions = {
                autoLoad: true,
                autoPlay: true,
                stream: true,
                onplay: function(){
                    $('#playBtn span').removeClass('glyphicon-play').addClass('glyphicon-pause');
                    sandbox.trigger('player:play');

                    console.log(sandbox);
                },
                onstop: function(){
                    $('#playBtn span').removeClass('glyphicon-pause').addClass('glyphicon-play');
                    sandbox.trigger('player:stop');
                },
                onpause: function(){
                    $('#playBtn span').removeClass('glyphicon-pause').addClass('glyphicon-play');

                    sandbox.trigger('player:pause');
                },
                onresume : function(){
                    $('#playBtn span').removeClass('glyphicon-play').addClass('glyphicon-pause');

                    sandbox.trigger('player:resume');
                },
                onfinish : function(){
                    sandbox.trigger('player:finish');

                    // this.setPosition( 0 );
                    // this.stop();
                    // $('#progressBar').css({
                    //     width: 0
                    // });
                    // $('#playBtn').text('!');
                }
            };

            console.log(sandbox);

    //soundManager.beginDelayedInit();

        });
    });

}());


