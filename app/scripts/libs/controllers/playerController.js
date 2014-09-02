/*global define*/
define([
    'jquery',
    'underscore',
    'player',
    'controls',
    'tracklist.collection',
    'tracklist.view',
    'data/tracks',
    'sandbox'
    
],  function( $, _, Player, controls, TracklistCollection, TracklistView, tracks, Sandbox){
    'use strict';

    var player = {};

    var sandbox = new Sandbox('player');

    var current;

    player.load = function(id) {

        if(current) {
            current.set({selected:false});
        }
        
        var loadedTrack = player.tracks.select(id);

        loadedTrack.set({selected:true});
        
        current = loadedTrack;

        player.model.set(loadedTrack.toJSON());
    };

    player.model = new controls.PlayerM();

    player.view = new controls.PlayerV({
        model: player.model
    });

    player.tracks = new TracklistCollection(tracks);

    player.tracksView = new TracklistView({
        collection: player.tracks
    });

    player.player = new Player({
        model: player.model
    });

    sandbox.on('player:play', function(){
        console.log('play');

    });

    sandbox.on('player:resume', function(){
        console.log('resume');

    });

    sandbox.on('player:pause', function(){
        console.log('pause');

    });


        console.log(sandbox);


    $('.controls-container').append(player.view.render().el);
    $('.music-container').append(player.tracksView.render().el);

    return player;

});