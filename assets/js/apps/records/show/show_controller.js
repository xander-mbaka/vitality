define(["app", "apps/records/show/show_view"], function(System, View){
  System.module('RecordsApp.Show', function(Show, System, Backbone, Marionette, $, _){
    Show.Controller = {
      showRecords: function(){ 
        var view = new View.Records();
        System.contentRegion.show(view);

        view.on('del', function(data) {
          $.post(System.coreRoot + '/record/delete', data, function(result) {
            if (result == 1) {
              view.triggerMethod("delete");
            }else{
              view.triggerMethod("error");
            }
          });
        });
	    },

      addRecord: function(a){ 
        var view = new View.AddRecord();
        
        System.contentRegion.show(view);

        view.on('create', function(data) {
          System.socket.emit('record:add', data);
        });

        view.on('edit', function(data) {
            $.post(System.coreRoot + '/record/update', data, function(result) {
              if (result == 1) {
                view.triggerMethod("success");
              }else{
                view.triggerMethod("error");
              }
            });
        });

        view.on('delete', function(data) {
            $.post(System.coreRoot + '/record/delete', data, function(result) {
              if (result == 1) {
                view.triggerMethod("delete");
              }else{
                view.triggerMethod("error");
              }
            });
        });
        /*require(["apps/entities/inventory"], function(){
          $.when(System.request("product:featured")).done(function(response){
            //alert(JSON.stringify(response.length));
            var view = new View.Slides({ collection: response });
            layout.slidesRegion.show(view); 
          });

          $.when(System.request("product:latest")).done(function(response){
            //alert(JSON.stringify(response.length));
            var view = new View.Latest({ collection: response });
            layout.latestRegion.show(view); 
          });
        }); */
      },

      editRecord: function(id){ 
        var view = new View.EditRecord();
        view.recordId = id;
        
        System.contentRegion.show(view);

        view.on('addHX', function(data) {
          System.socket.emit('observation:add', data);
        });

        view.on('updateRecord', function(data) {
          System.socket.emit('record:update', data);
        });

        view.on('delete', function(id) {
          System.socket.emit('record:delete', id);
        });
      },

      enquiries: function(a){ 
        var view = new View.Enquiry();
        
        System.contentRegion.show(view);

        view.on('create', function(data) {
          data['operation'] = 'enquiry';
            $.post(System.coreRoot + '/service/crm/index.php', data, function(result) {
              if (result == 1) {
                view.triggerMethod("success");
              }else{
                view.triggerMethod("error");
              }
            });
        });
      },

      pendingQueries: function(a){ 
        var view = new View.PendingQueries();

        System.contentRegion.show(view);

        view.on('check', function(stamp) {
          var data = {};
          data['operation'] = 'checkenquiry';
          data['stamp'] = stamp;
          $.post(System.coreRoot + '/service/crm/index.php', data, function(result) {
            if (result == 1) {
              view.triggerMethod("success");
            }else{
              view.triggerMethod("error");
            }
          });
        });
      },

      searchContact: function(layout){ 
        var views = new View.SearchHeader();
        layout.topRegion.show(views);

        views.on('results', function(data) {
          alert(JSON.stringify(data));
          var mod = Backbone.Model.extend({
            urlRoot: "presentation/blog",
          });

          var col = Backbone.Collection.extend({
            url: "presentation/blog",
            model: mod
          });

          var collection = new col(data);

          alert(collection.length + ' contacts found!');
          var result = new View.Contacts({ collection: collection});
          layout.resultRegion.show(result);
        });
        
        /*require(["apps/entities/inventory"], function(){
          $.when(System.request("product:featured")).done(function(response){
            //alert(JSON.stringify(response.length));
            var view = new View.Slides({ collection: response });
            layout.slidesRegion.show(view); 
          });

          $.when(System.request("product:latest")).done(function(response){
            //alert(JSON.stringify(response.length));
            var view = new View.Latest({ collection: response });
            layout.latestRegion.show(view); 
          });
        }); */
      }
    };
  });

  return System.RecordsApp.Show.Controller;
});
