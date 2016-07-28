define(["app_admin", "backbone.picky"], function(TheMarket){
  TheMarket.module('Entities', function(Entities, TheMarket, Backbone, Marionette, $, _){
    Entities.Header = Backbone.Model.extend({
      initialize: function(){
        var selectable = new Backbone.Picky.Selectable(this);
        _.extend(this, selectable);
      }
    });

    Entities.HeaderCollection = Backbone.Collection.extend({
      model: Entities.Header,

      initialize: function(){
        var singleSelect = new Backbone.Picky.SingleSelect(this);
        _.extend(this, singleSelect);
      }
    });

    var initializeHeaders = function(){
      Entities.headers = new Entities.HeaderCollection([
        { name: "DASHBOARD", url: "dashboard" },
        { name: "JOURNALS", url: "journals" },
        { name: "TRENDS", url: "trends" },
        { name: "BLOG", url: "blog" },
        { name: "SUBSCRIBERS", url: "subscribers" },        
        { name: "ADMINISTRATORS", url: "admin" }
        
      ]);
    };

    var API = {
      getHeaders: function(){
        if(Entities.headers === undefined){
          initializeHeaders();
        }
        return Entities.headers;
      }
    };

    TheMarket.reqres.setHandler("header:entities", function(){
      return API.getHeaders();
    });
  });

  return ;
});
