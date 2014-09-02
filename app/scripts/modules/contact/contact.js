/*global window, define*/

define(['jquery', 'underscore', 'backbone', 'text!modules/contact/templates/contact.html'],

function($, _, Backbone, contactTmpl){
'use strict';

    var DJ = {};

    DJ.ContactM = Backbone.Model.extend({
        defaults : {
            'content': '',
            'open': false
        },
        initialize : function(){

        }
    });

    DJ.ContactV = Backbone.View.extend({
        tagName: 'div',
        className: 'footer-wrap',
        template: _.template(contactTmpl),
        initialize : function(){
            this.model.on('change:open', this.openToggle, this);
        },
        render : function(){
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        openToggle : function(){

            if(this.model.get('open')){

                this.open();

            } else {

                this.close();

            }

        },
        open : function(){
            var $el = this.$el;
            this.$('.contact-btn').attr('href', '#/').text('Close');
            this.model.set({open:true}, {silent:true});
            console.log($('.navbar-fixed-top').height());
            this.$el.css({ bottom: ''});
            this.$el.height($(window).height() - $('.navbar-fixed-top').height())
                .css({
                    top: $el.height() + $('.navbar-fixed-top').height()
                });
            this.$el.animate({
                    top: $('.navbar-fixed-top').height()
                }, {
                    duration: 800,
                    easing: 'Power3.easeOut'
                });

            $('body').css({
                height: '100%',
                overflow: 'hidden'
            });

            $(window).on('resize', function(){
                 $('.footer-wrap').height($(window).height() - $('.navbar-fixed-top').height());
            });

        },
        close : function(){
            var $el = this.$el;
            this.model.set({open:false}, {silent:true});

            $(window).off('resize');

            this.$el.animate(
                {
                    top: $(window).height()
                }, {
                    duration: 800,
                    easing: 'Power3.easeOut',
                    complete : function(){
                        $el.height(0);
                        $el.css({top: '', bottom: 0});
                        $('body').css({
                            height: 'auto',
                            overflow: 'auto'
                        });
                    }
                }
            );
        }
    
    });




    return DJ;

});