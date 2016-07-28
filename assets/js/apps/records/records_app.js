define(["app", "apps/records/show/show_controller", "tpl!apps/templates/searchcontact.tpl",], function(System, showController, searchTpl){
  System.module('RecordsApp', function(RecordsApp, System, Backbone, Marionette, $, _){

    RecordsApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        "records" : "showRecords",
        "addRecord" : "addRecord",
        "editRecord/:id" : "editRecord",
        "viewRecord" : "viewRecord",
        //"birthRegister" : "birthRegister",
        //"deathRegister" : "deathRegister"

      }
    });

    var SearchLayout = Backbone.Marionette.Layout.extend({
      template: searchTpl,

      regions: {
        topRegion: ".page-header",
        resultRegion: ".container-widget"
      }

    });

    var layout = new SearchLayout();

    var API = {
      showRecords: function(){
        //System.contentRegion.show();
        showController.showRecords();
        //System.execute("set:active:header", "Menu");
      },

      addRecord: function(a){
        //System.contentRegion.show();
        showController.addRecord(a);
        //System.execute("set:active:header", "Menu");
      },

      editRecord: function(id){
        //System.contentRegion.show();
        showController.editRecord(id);
        //System.execute("set:active:header", "Menu");
      },

      viewRecord: function(a){
        //System.contentRegion.show();
        showController.pendingQueries(a);
        //System.execute("set:active:header", "Menu");
      },

      searchContact: function(){
        System.contentRegion.show(layout);
        showController.searchContact(layout);
        //System.execute("set:active:header", "Menu");
      }
    };

    System.on("records:show", function(){
      System.navigate("records");
      API.showRecords();
    });
    
    System.addInitializer(function(){
      new RecordsApp.Router({
        controller: API
      });
    });
  });

  return System.RecordsApp;
});

