define(["app"], function(System){
  System.module('LoginApp', function(LoginApp, System, Backbone, Marionette, $, _){

    LoginApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        "login" : "showLogin",
        "logout" : "logout"
      }
    });

    var API = {
      showLogin: function(){
        require(["apps/login/show/show_controller"], function(ShowController){
          ShowController.showLogin();
          $('.loading').css({'display' : 'none'});
        });
      },

      logout: function(){
        require(["apps/login/show/show_controller"], function(ShowController){
          var data = {};
          data['operation'] = 'logout';
          $.post(System.coreRoot + '/logout', data, function(result) {
            ShowController.showLogin();
          });
        });
      }
    };

    System.on("login:show", function(){
      System.navigate("login");
      API.showLogin();
    });

    System.commands.setHandler("logout:show", function(){
      System.navigate("logout");
      API.logout();
    });

    System.addInitializer(function(){
      new LoginApp.Router({
        controller: API
      });
    });
  });

  return System.LoginApp;
});
