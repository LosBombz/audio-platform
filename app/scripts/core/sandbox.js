/*global define*/
define(['jquery', 'underscore', 'backbone', 'core'], function($, _, Backbone, core){
	var sandbox = {};

	function Sandbox(name){
		this.id = _.uniqueId(name);

		return this;
	}

	Sandbox.prototype.on = core.on;

	Sandbox.prototype.off =  core.off;

	Sandbox.prototype.trigger = core.trigger;

	Sandbox.prototype.isDebug = function(){
		return core.debug ? true : false;
	};




	 

	return Sandbox;
});