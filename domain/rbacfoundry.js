require('jsclass');
var Class = require('jsclass/src/core').Class;
var Console = require('jsclass/src/console').Console;
var Hash = require('jsclass/src/hash').Hash;
var AbstractMapper = require("../data/datamapper").AbstractMapper;
var DataMap = require("../data/datamapper").DataMap;
var DomainObject = require("../data/datamapper").DomainObject;
var MapperRegistry = require("../data/mapperregistry").MapperRegistry;
var UoW = require("../data/unitofwork").UnitOfWork;
var Party = require("./core/party").Party;
var Action = require("./actionfoundry").Action;
var ProposedAction = require("./actionfoundry").ProposedAction;
var Measurement = require("./actionfoundry").Measurement;
var Observation = require("./actionfoundry").Observation;
var PhenomenonType = require("./actionfoundry").PhenomenonType;
var Phenomenon = require("./actionfoundry").Phenomenon;
var Crypto = require('crypto');

var ViewMapper = new Class(AbstractMapper, {
  
   initialize: function() {
      this.callSuper();
   },

   loadDataMap: function (object) {
      this.domainClass = object.klass;
      this.dataMap = new DataMap(this.domainClass, 'views');
      this.dataMap.addColumnMap('module_id', 'moduleId', 'int');
      this.dataMap.addColumnMap('name', 'name', 'varchar');
      this.dataMap.addColumnMap('logo', 'logo', 'varchar');
      this.dataMap.addColumnMap('link', 'link', 'varchar');
      this.dataMap.addColumnMap('pos', 'position', 'varchar');
      this.mapLoaded = true;
   },

   getNextViewPosition: function (moduleId, cb) {
      connection.query('SELECT * FROM '+this.dataMap.tableName+' WHERE module_id = '+ moduleId +' ORDER BY pos DESC LIMIT 0,1', function(err, result, fields) {
        if (err) throw err;

        cb(results[0]['pos']);
      });
   },

   findWhereModuleStatement: function(moduleId){
      return 'SELECT * FROM '+this.dataMap.tableName+' WHERE module_id = '+ moduleId +' AND status = 1 ORDER BY pos ASC';
   }

});

var ViewObject = new Class(DomainObject, {

   extend: {

      create:function (moduleId, name, logo, link) {
         var obj = new this('', moduleId, name, logo, link, position);
         obj.markNew();
         return obj;
      },

      createWithId:function (moduleId, name, logo, link, cb) {
         var self = this;
         MapperRegistry.getMapper(this.newInstance(), function (mapper) {
            mapper.getNextViewPosition(function (position) {
               self.getNextId(function (id) {
                  var obj = new self(id, moduleId, name, logo, link, position);
                  obj.markNewId()
                  cb(obj);
               })
            });
         })         
      },

      findModuleViews:function (moduleId, cb) {
         MapperRegistry.getMapper(this.newInstance(), function (mapper) {
            mapper.findWhere(mapper.findWhereModuleStatement(moduleId), function (results) {
               cb(results);
            });
         })         
      },

      findViews:function (viewids, cb) {
         var self = this;
         var views = new Array();
         viewids.forEach(function (viewid) {
            self.findObject(viewid, function (view) {
               views.push(view);
               if (views.length == viewids.length) {
                  cb(views)
               }
            })
         })         
      }
   },
  
   initialize: function(id, moduleId, name, logo, link, position) {
      this.id = id;
      this.moduleId = moduleId;     
      this.name = name;
      this.logo = logo;
      this.link = link;
      this.position = position;
   }

});

var ModuleMapper = new Class(AbstractMapper, {
  
   initialize: function() {
      this.callSuper();
   },

   loadDataMap: function (object) {
      this.domainClass = object.klass;
      this.dataMap = new DataMap(this.domainClass, 'modules');
      this.dataMap.addColumnMap('name', 'name', 'varchar');
      this.dataMap.addColumnMap('logo', 'logo', 'varchar');
      this.dataMap.addColumnMap('status', 'status', 'tinyint');
      this.mapLoaded = true;
   },

   findActiveModulesStatement: function(id){
      return 'SELECT * FROM '+this.dataMap.tableName+' WHERE status = 1';
   }

});

var ModuleObject = new Class(DomainObject, {

   extend: {

      create:function (name, logo) {
         var obj = new this('', name, logo, 1);
         obj.markNew();
         return obj;
      },

      createWithId:function (name, logo, cb) {
         var self = this;
         this.getNextId(function (id) {
            obj = new self(id, name, logo, 1);
            obj.markNewId()
            cb(obj);
         })        
      },

      getModule:function (id, cb) {
         this.findObject(id, function (module) {
            module.loadViews(function (object) {
               cb(object)
            })
         })         
      },

      getActiveModules:function (cb) {
         MapperRegistry.getMapper(this.newInstance(), function (mapper) {
            mapper.findWhere(mapper.findActiveModulesStatement(), function (results) {
               var total = results.length;
               var count = 0;
               results.forEach(function (result) {
                  ++count;
                  result.loadViews(function (object) {
                     if (count == total) {
                        cb(results);
                     }
                  })
               })
            });
         })       
      }
   },
  
   initialize: function(id, name, logo, status) {
      this.id = id;  
      this.name = name;
      this.logo = logo;
      this.status = status;
   },

   loadViews: function (cb) {
      var self = this;
      ViewObject.findModuleViews(self.id, function (views) {
         self.views = views;
         cb(self)
      })
   }

});

var RoleMapper = new Class(AbstractMapper, {
  
   initialize: function() {
      this.callSuper();
   },

   loadDataMap: function (object) {
      this.domainClass = object.klass;
      this.dataMap = new DataMap(this.domainClass, 'roles');
      this.dataMap.addColumnMap('name', 'name', 'varchar');
      this.dataMap.addColumnMap('views', 'views', 'varchar');
      this.dataMap.addColumnMap('operations', 'operations', 'varchar');
      this.mapLoaded = true;
   },

   existsInDBStatement: function(name){
      return 'SELECT * FROM '+this.dataMap.tableName+' WHERE name = "' + name + '"';
   }

});

var Role = new Class(DomainObject, {

   extend: {

      kaunt: 0,

      create:function (name, views, operations) {
         var obj = new this('', name, views, '');
         obj.setPassword(password)
         obj.markNew();
         return obj;
      },

      createWithId:function (name, views, operations, cb) {
         var self = this;
         MapperRegistry.getMapper(this.newInstance(), function (mapper) {
            mapper.findWhere(mapper.existsInDBStatement(), function (results) {
               if (results.length == 0) {
                  self.getNextId(function (id) {
                     var obj = new self(id, name, views, '');
                     obj.createPassword(password);
                     obj.markNewId()
                     cb(obj);
                  })
               }else{
                  cb('Already Exists')
               }
            });
         })
      }
   },
  
   initialize: function(id, name, views, operations) {
      this.id = id;  
      this.name = name;
      this.views = views;
      this.operations = operations;
      this.presentation = {};
   },   

   loadInterfaces: function (cb) {
      
      var self = this;      
      var cache = {};
      ViewObject.findViews(this.views.split(','), function (views) {
         var count = 0;
         var moduleInterfaces = new Hash();
         views.forEach(function (view) {
            ++count;
            if (moduleInterfaces.hasKey(view.moduleId)) {
               var object = moduleInterfaces.get(view.moduleId)
               object.push(view)
               moduleInterfaces.store(view.moduleId, object)
            }else{
               var object = new Array();
               object.push(view)
               moduleInterfaces.store(view.moduleId, object)
            }

            if (views.length == count) {
               var count2 = 0;
               moduleInterfaces.forEachPair(function(key, interfaces) {
                  ModuleObject.findObject(key, function (mod) {
                     ++count2;
                     self.presentation[key] = {};
                     self.presentation[key]['views'] = JSON.stringify(interfaces);
                     self.presentation[key]['name'] = mod.name;
                     self.presentation[key]['logo'] = mod.logo;
                     if (moduleInterfaces.size == count2) {
                        cb(self)
                     }else{

                     }
                  })
               })
            }
         })
      })
   }

});

var UserMapper = new Class(AbstractMapper, {
  
   initialize: function() {
      this.callSuper();
   },

   loadDataMap: function (object) {
      this.domainClass = object.klass;
      this.dataMap = new DataMap(this.domainClass, 'users');
      this.dataMap.addColumnMap('username', 'username', 'varchar');
      this.dataMap.addColumnMap('password', 'password', 'varchar');
      this.dataMap.addColumnMap('category', 'category', 'varchar');
      this.dataMap.addColumnMap('party_id', 'partyId', 'varchar');
      this.dataMap.addColumnMap('role_id', 'roleId', 'varchar');
      this.dataMap.addColumnMap('status', 'status', 'tinyint');
      this.mapLoaded = true;
   },

   existsInDBStatement: function(partyId, category){
      return 'SELECT * FROM '+this.dataMap.tableName+' WHERE party_id = ' + partyId + ' AND category = "' + category + '"';
   },

   findActiveUsersStatement: function(){
      return 'SELECT * FROM '+this.dataMap.tableName+' WHERE access = 1 AND username IS NOT NULL';
   },

   findAuthorizedUserStatement: function(username, password){
      return 'SELECT * FROM '+this.dataMap.tableName+' WHERE username = "' + username + '" AND password = "' + password + '" AND access = 1 LIMIT 0,1';
   }

});

var User = new Class(DomainObject, {

   extend: {

      create:function (partyId, username, password, roleId) {
         var obj = new this('', partyId, username, password, roleId, 1);
         obj.setPassword(password)
         obj.markNew();
         return obj;
      },

      createWithId:function (partyId, username, password, roleId, cb) {
         var self = this;
         MapperRegistry.getMapper(this.newInstance(), function (mapper) {
            mapper.findWhere(mapper.existsInDBStatement(), function (results) {
               if (results.length == 0) {
                  self.getNextId(function (id) {
                     var obj = new self(id, partyId, username, roleId, 1);
                     obj.createPassword(password);
                     obj.markNewId()
                     cb(obj);
                  })
               }else{
                  cb('Already Exists')
               }
            });
         })
         //Use logger on abstract mapper
         //Logger::Log('User', 'OK', 'User created with username : '.$username.'; Party type: Employees');        
      },

      getActiveUsers:function () {
         var self = this;
         MapperRegistry.getMapper(this.newInstance(), function (mapper) {
            mapper.findWhere(mapper.findActiveUsersStatement(), function (results) {
               cb(results)
            });
         })
         //Use logger on abstract mapper
         //Logger::Log('User', 'OK', 'User created with username : '.$username.'; Party type: Employees');        
      },

      getAuthorizedUser:function (username, password, cb) {
         var password = this.getEncryptedText(password);
         MapperRegistry.getMapper(this.newInstance(), function (mapper) {
            mapper.findWhere(mapper.findAuthorizedUserStatement(username, password), function (user) {
               if (user) {
                  user.loadRole(function (callback) {
                     if (callback) {
                        cb(user)
                     }else{
                        cb(user)
                     }
                  })
               }else{
                  cb(false)
               }
            });
         })
         //Use logger on abstract mapper
         //Logger::Log('User', 'OK', 'User created with username : '.$username.'; Party type: Employees');        
      },

      getEncryptedText: function (text) {
         var shasum = Crypto.createHash('sha1');
         shasum.update(text);
         return shasum.digest('hex');
      },
   },
  
   initialize: function(id, username, partyId, roleId, category, access) {
      this.id = id;  
      this.username = username;
      this.partyId = partyId;
      this.roleId = roleId;
      this.access = access;
      this.category = category;
      if (category == "Employee") {
         //this.record = Employee.findObject(partyId);
      }else if (category == "Vendor") {
         //this.record = SystemVendor.getVendor();
      }
   },   

   loadRole: function (cb) {
      var self = this;
      Role.findObject(this.roleId, function (role) {         
         role.loadInterfaces(function(obj) {
            self.role = obj;
            cb(self)
         })         
      })
   },

   createPassword: function (password) {
      this.password = this.klass.getEncryptedText(password)
   },

   setPassword: function (password) {
      this.password = password;
   },

   changePassword: function (oldpass, newpass) {
      var oldpass = this.klass.getEncryptedText(oldpass);
      if (oldpass == this.password) {
         this.createPassword(newpass);
         this.markDirty();
      }
   },

   authorize: function () {
      this.access = 1;
   },

   deauthorize: function () {
      this.access = 0;
   }

});

module.exports.ViewObject = ViewObject;
module.exports.ViewMapper = ViewMapper;
module.exports.ModuleObject = ModuleObject;
module.exports.ModuleMapper = ModuleMapper;
module.exports.User = User;
module.exports.UserMapper = UserMapper;
module.exports.Role = Role;
module.exports.RoleMapper = RoleMapper;