/*global define*/
define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
	var core = {};

	core.debug = false;

	// extend backbone events into the cor object
	_.extend(core, Backbone.Events);
	 

	return core;
});