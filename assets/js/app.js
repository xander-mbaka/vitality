define(["marionette", "socketio", "sweetalert"], function(Marionette, io){
  var System = new Marionette.Application();

  window.momentum = System;

  System.coreRoot = "http://localhost:3000";
  //System.coreRoot = "http://192.168.1.171:3000";
  System.cache = {};

  var checkLogin = function(callback) {
    $.get(System.coreRoot + '/session', function(user) {
      if (user) {
        //var user = JSON.parse(result);
        if (user.id) {
          //alert(JSON.stringify(user));
          return callback(user);
        }else{
          return callback(false);
        }
      }else{
        return callback(false);
      }   
    });
  };

  var runApplication = function(data, options) {
    if (data) {
      //alert(JSON.stringify(data));
      System.trigger("menu:show", data);
    } else {
      System.trigger("login:show");
    }
    Backbone.history.start();
  };

  System.addRegions({
    menuRegion: "#menu",
    contentRegion: "#content"
  });

  System.navigate = function(route,  options){
    options || (options = {});
    Backbone.history.navigate(route, options);
  };  

  System.getCurrentRoute = function(){
    return Backbone.history.fragment
  };

  System.on("initialize:after", function(){
    if(Backbone.history){
      require([
        "apps/login/login_app",
        "apps/menu/menu_app",
        "apps/dash/dash_app",
        "apps/records/records_app",
        "apps/operations/operations_app",
        "apps/finance/finance_app",
        "apps/procurement/procurement_app",
        "apps/hr/hr_app",
        "apps/tools/tools_app",
        "apps/reports/reports_app",
        //"apps/notifications/notifications_app",
        //"apps/profile/profile_app",
        //"apps/about/about_app"
        ], function () {
        //Backbone.history.start();//{ pushState: true, root: "/ecomadmin/frontend/" }
        checkLogin(runApplication);

        System.socket = io.connect(System.coreRoot);
        //System.trigger("menu:show");
        //if(System.getCurrentRoute() === ""){
          //System.trigger("dash:show");
        //}
      });
    }
  });

  return System;
});