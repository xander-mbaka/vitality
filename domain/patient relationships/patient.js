require('jsclass');
var Class = require('jsclass/src/core').Class;
var Console = require('jsclass/src/console').Console;
var AbstractMapper = require("../../data/datamapper").AbstractMapper;
var DataMap = require("../../data/datamapper").DataMap;
var DomainObject = require("../../data/datamapper").DomainObject;
var MapperRegistry = require("../../data/mapperregistry").MapperRegistry;
var UoW = require("../../data/unitofwork").UnitOfWork;
var Party = require("../core/party").Party;


var PatientMapper = new Class(AbstractMapper, {
  
   initialize: function() {
      this.callSuper();
   },

   loadDataMap: function (object) {
      //var klass = new PatientObject()
      //var obj = new PatientObject();
      this.domainClass = object.klass;
      this.dataMap = new DataMap(this.domainClass, 'clients');
      this.dataMap.addColumnMap('name', 'name', 'varchar');
      this.dataMap.addColumnMap('address', 'address', 'varchar');
      this.mapLoaded = true;
   },

   doLoad: function(id, args){
      return new PatientObject(id, args.name);;
   }

});

var PatientObject = new Class(Party, {

   extend: {
      newInstance:function () {
         return new this('', '');
      },

      create:function (name, address) {
         var obj = new this('', name);
         obj.markNew();
         //Include logic for data integrity and duplicates 
         return obj;
      },

      createWithId:function (name, address, cb) {
         var self = this;
         self.getNextId(function (id) {
            var obj = new self(id, name);
            obj.markNewId();
            //obj.setAddress(address);
            //Include logic for data integrity and duplicates 
            cb(obj);
         })
      },
   },
  
   initialize: function(id, name) {
      this.callSuper(name);
      this.id = id;
   },

   setPersonalData: function(salutattion, firstName, givenName, surName, otherName, dob, gender, photo) {
      this.salutattion = salutattion;
      this.firstName = firstName;
      this.givenName = givenName;
      this.surName = surName;
      this.otherName = otherName;
      this.dob = dob;
      this.gender = gender;
      this.photo = photo;
      this.markDirty();
   },

   setContacts: function(cellPhone, workPhone, postalAddress, physicalAddress, email) {
      this.cellPhone = cellPhone;
      this.workPhone = workPhone;
      this.postalAddress = postalAddress;
      this.physicalAddress = physicalAddress;
      this.email = email;
      this.markDirty();
   },

   setBalance: function(balance) {
      this.balance = new Money(parseFloat(balance), Currency.GetCurrency('KES'));
      this.markDirty();
   },

   setBilling: function(billTo, reference, beneficiary) {
      this.billTo = billTo;
      this.billRef = reference;
      this.billFor = beneficiary;
      this.markDirty();
   },

   setNextOfKin: function(name, relationship, cellPhone, workPhone, postalAddress, physicalAddress) {
      this.kinName = name;
      this.relationship = relationship;
      this.kinCellPhone = cellPhone;
      this.kinWorkPhone = workPhone;
      this.kinPostalAddress = postalAddress;
      this.kinPhysicalAddress = physicalAddress;
      this.markDirty();
   },

   setEmploymentData: function(employer, contact, role, description) {
      this.employer = employer;
      this.empContact = contact;
      this.empRole = role;
      this.empDescription = description;
      this.markDirty();
   },

   setMedicalData: function(bloodGroup, allergies, geneticHistory, significantHistory) {
      this.bloodGroup = bloodGroup;
      this.allergies = allergies;
      this.geneticHistory = geneticHistory;
      this.significantHistory = significantHistory;
      this.markDirty();
   }

});

/*/Initialization Setup

MapperRegistry.register(PatientObject.newInstance(), new PatientMapper());

//Begin transaction/request
UoW.newCurrent();

//During transaction
var UnitOfWork = UoW.getCurrent();

//Console.print(JSON.stringify(obj.klass.displayName))

PatientObject.findObject(46, function (res) {
   Console.print(JSON.stringify(res))
   //res.setFields({address: '54th Floor, Kigio Plaza, THIKA'});

   res.setAddress('54th Floor, Kigio Plaza, THIKA');

   //res.setName('Azrael Dumas');

   UnitOfWork.commit(function (ack) {
      PatientObject.findObject(46, function (obj) {
         Console.print(JSON.stringify(obj));
      })
   });

});

var client = PatientObject.createWithId('Mama Milka kinyua', '56 and 5th Broadway, Avenue Park', function (client) {
   UnitOfWork.commit(function (ack) {
      PatientObject.findObject(client.id, function (obj) {
         Console.print(JSON.stringify(obj));
         //obj.setAddress('54th Floor, Kigio Plaza, THIKA');
         //UnitOfWork.commit(function (ack) {
         //});
      })
   });
});

//PatientObject.findObject(46, function (res) {
   //res.setAddress('75th Floor, Kigo Plaza, THIKA');

   //res.setName('Azrael Dumas');

   

//});




//module.exports.AbstractMapper = AbstractMapper;*/

