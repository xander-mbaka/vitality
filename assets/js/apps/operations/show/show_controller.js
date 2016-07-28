define(["app", "apps/operations/show/show_view"], function(System, View){
  System.module('OperationsApp.Show', function(Show, System, Backbone, Marionette, $, _){
    Show.Controller = {
      
      createQuote: function(a){ 
        var view = new View.CreateQuote();

        System.contentRegion.show(view);

        view.on('generate', function(data) {
          data['operation'] = 'genQuote';
          $.post(System.coreRoot + '/service/operations/index.php', data, function(result) {
            if (result == 1) {
              view.triggerMethod("success");
            }else{
              view.triggerMethod("error");
            }
          });
        });
      },

      addProject: function(a){ 
        var view = new View.NewProject();

        System.contentRegion.show(view);

        view.on('create', function(data) {
          data['operation'] = 'createProject';
          $.post(System.coreRoot + '/service/operations/index.php', data, function(result) {
            if (result == 1) {
              view.triggerMethod("success");
            }else{
              view.triggerMethod("error");
            }
          });
        });
      },

      viewProject: function(a){ 
        var view = new View.ViewProject();

        System.contentRegion.show(view);

        view.on('update', function(data) {
          data['operation'] = 'modifyProject';
          $.post(System.coreRoot + '/service/operations/index.php', data, function(result) {
            if (result == 1) {
              view.triggerMethod("success");
            }else{
              view.triggerMethod("error");
            }
          });
        });

        view.on('delete', function(id) {
          data['operation'] = 'deleteProject';
          $.post(System.coreRoot + '/service/operations/index.php', data, function(result) {
            if (result == 1) {
              view.triggerMethod("success");
            }else{
              view.triggerMethod("error");
            }
          });
        });
      },

      fileReport: function(a){ 
        var view = new View.WorkReport();
        
        System.contentRegion.show(view);

        view.on('file', function(data) {
          data['operation'] = 'fileReport';
          $.post(System.coreRoot + '/service/operations/index.php', data, function(result) {
            if (result == 1) {
              view.triggerMethod("success");
            }else{
              view.triggerMethod("error");
            }
          });
        });
      },

      setBillables: function(){ 
        var view = new View.Billables();
        
        System.contentRegion.show(view);

        view.on('create', function(data) {
          data['operation'] = 'createService';
          $.post(System.coreRoot + '/service/operations/index.php', data, function(result) {
            if (result == 1) {
              view.triggerMethod("success");
            }else{
              view.triggerMethod("error");
            }
          });
        });

        view.on('deleteServ', function(name) {
          var data = {};
          data['operation'] = 'deleteService';
          data['name'] = name;
          $.post(System.coreRoot + '/service/operations/index.php', data, function(result) {
            if (result == 1) {
              view.triggerMethod("delete");
            }else{
              view.triggerMethod("error");
            }
          });
        });
      },

      docOrigination: function(){ 
        var view = new View.DocumentOrigination();
        
        System.contentRegion.show(view);

        view.on('create', function(data) {
          data['operation'] = 'addDocument';
            $.post(System.coreRoot + '/service/operations/index.php', data, function(result) {
              if (result == 1) {
                view.triggerMethod("success");
              }else{
                view.triggerMethod("error");
              }
            });
        });

        view.on('edit', function(data) {
          data['operation'] = 'editDocument';
            $.post(System.coreRoot + '/service/operations/index.php', data, function(result) {
              if (result == 1) {
                view.triggerMethod("success");
              }else{
                view.triggerMethod("error");
              }
            });
        });

        view.on('deletedoc', function(data) {
          data['operation'] = 'deleteDocument';
            $.post(System.coreRoot + '/service/operations/index.php', data, function(result) {
              if (result == 1) {
                view.triggerMethod("delete");
              }else{
                view.triggerMethod("error");
              }
            });
        });        
      },

      docRegistry: function(){ 
        var view = new View.DocumentRegistry();
        
        System.contentRegion.show(view);

        view.on('search', function(data) {
          data['operation'] = 'findDocument';
          $.post(System.coreRoot + '/service/operations/index.php', data, function(result) {
            if (result != 0) {
              var res = JSON.parse(result);
              //alert(JSON.stringify(res));
              if (res.length) {
                view.triggerMethod("success", res);
              }else{
                view.triggerMethod("empty");
              }              
            }else{
              view.triggerMethod("error");
            }
          });
        });

        view.on('deletedoc', function(data) {
          data['operation'] = 'deleteDocument';
            $.post(System.coreRoot + '/service/operations/index.php', data, function(result) {
              if (result == 1) {
                view.triggerMethod("delete");
              }else{
                view.triggerMethod("error");
              }
            });
        }); 
      },

      docArchive: function(){ 
        var view = new View.DocumentArchive();
        
        System.contentRegion.show(view);

        view.on('search', function(data) {
          data['operation'] = 'findDocument';
          $.post(System.coreRoot + '/service/operations/index.php', data, function(result) {
            if (result != 0) {
              var res = JSON.parse(result);
              //alert(JSON.stringify(res));
              if (res.length) {
                view.triggerMethod("success", res);
              }else{
                view.triggerMethod("empty");
              }              
            }else{
              view.triggerMethod("error");
            }
          });
        });

        view.on('deletedoc', function(data) {
          data['operation'] = 'deleteDocument';
            $.post(System.coreRoot + '/service/operations/index.php', data, function(result) {
              if (result == 1) {
                view.triggerMethod("delete");
              }else{
                view.triggerMethod("error");
              }
            });
        }); 
      },

      setDocTypes: function(){ 
        var view = new View.DocumentTypes();
        
        System.contentRegion.show(view);

        view.on('create', function(data) {
          data['operation'] = 'createDocType';
          $.post(System.coreRoot + '/service/operations/index.php', data, function(result) {
            if (result == 1) {
              view.triggerMethod("success");
            }else{
              view.triggerMethod("error");
            }
          });
        });

        view.on('deleteDoc', function(id) {
          var data = {};
          data['operation'] = 'deleteDocType';
          data['id'] = id;
          $.post(System.coreRoot + '/service/operations/index.php', data, function(result) {
            if (result == 1) {
              view.triggerMethod("delete");
            }else{
              view.triggerMethod("error");
            }
          });
        });
      }

    };
  });

  return System.OperationsApp.Show.Controller;
});
