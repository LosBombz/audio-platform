/*global define*/
define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
	"use strict";

	var util = {};


	/**
     * returns a 0 padded string number
     * @param  {number} number      the number to pad
     * @param  {number} width       number of 0's to pad with
     * @return {string}             string representation of the new number
     */
	util.pad = function(number, width) {
		width -= number.toString().length;
        if ( width > 0 ) {
            return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
        }
        return number + ''; // always return a string
	};


	/**
     * take a number in miliseconds and convert it to minutes
     * 
     * @param  {number} milliseconds    time in miliseconds
     * @return {string}                 time in minutes
     */
	util.toMinutes = function(milliseconds){
		var seconds = milliseconds / 1000;

        var numSeconds = Math.floor((((seconds % 31536000) % 86400) % 3600) % 60);
        var numMinutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);


        return util.pad(numMinutes, 2) + ':' + util.pad(numSeconds, 2);
	};


	return util;
});