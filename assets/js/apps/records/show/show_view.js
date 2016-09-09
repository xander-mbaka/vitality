define(["app", "tpl!apps/templates/register.tpl", "tpl!apps/templates/patient.tpl", "backbone.syphon"], 
	function(System, registerTpl,  patientTpl){
  System.module('RecordsApp.Show.View', function(View, System, Backbone, Marionette, $, _){
    
    View.Records = Marionette.CompositeView.extend({

        template: registerTpl,

        onShow: function(){
          var THAT = this;
          System.socket.emit('records:all', {});
          require(["money"], function(){
            THAT.setup();
          });
        },

        setup: function(){
            var THAT = this;
            var ul = $('tbody');
            ul.empty();

            System.socket.on('records:all', function(data) {
              data.forEach(function(elem){
                var tpl = $('<tr><td>'+elem['firstName']+' '+elem['givenName']+' '+elem['surName']+' '+elem['otherName']+'<span style="font-size: 10px"> [ID: '+elem['id']+']</span></td><td>'+elem['cellPhone']+'</td><td>'+elem['dob']+'</td><td>Ksh. '+(elem['bal']).formatMoney(2, '.', ',')+'</td>'
                  +'<td><p class="xid" style="display: none;">'+elem['id']+'</p><a class="btn btn-small js-edit vcheck" href="#">View File</a><a class="btn btn-small js-edit echeck" style="margin-left:15px" href="#editRecord/'+elem.id+'">Edit Record</a></td></tr>');
                tpl.appendTo(ul);
              });

              $('.xcheck').off();

              $('.xcheck').on('click', function(e){
                e.preventDefault();
                e.stopPropagation();
                var data = {};
                data['id'] = parseInt($(this).parent().find('.xid').text());
                swal({
                  title: "Are you sure?",
                  text: "You will not be able to recover this record!",
                  type: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#DD6B55",
                  confirmButtonText: "Yes, delete it!",
                  cancelButtonText: "No, cancel!",
                  closeOnConfirm: false,
                  closeOnCancel: false
                },
                function(isConfirm){
                  if (isConfirm) {
                    THAT.deleteRecord(data); 
                  } else {
                    swal("Cancelled", "Your record is safe :)", "error");
                  }
                });
                
              });

              setTimeout(function() {
                $('#example0').DataTable();
                $('button').prop({disabled: false});
              }, 700);
            });
            /*$.get(System.coreRoot + '/service/records/patients', function(result) {
              var m = JSON.parse(result);
              m.forEach(function(elem){
                var tpl = $('<tr><td>'+elem['name']+'<span style="font-size: 10px"> ['+elem['details']+']</span></td><td>'+elem['telephone']+'</td><td>'+elem['idno']+'</td><td>Ksh. '+(elem['balance']['amount']).formatMoney(2, '.', ',')+'</td>'
                  +'<td><p class="xid" style="display: none;">'+elem['id']+'</p><a class="btn btn-small js-edit xcheck" href="#"><i class="icon-pencil"></i>Delete</a></td></tr>');
                tpl.appendTo(ul);
              });

              

              
              
            });*/
        },

        deleteRecord: function(data) { 
          //alert(JSON.stringify(data));
          $('button').prop({disabled: true});
          this.trigger("del", data);
        },

        onDelete: function(e) { 
          swal("Deleted!", "Your record has been deleted.", "success");
          this.setup();
          //alert(JSON.stringify(data));
          //this.trigger("create", data);
        },

        onError: function(e) { 
          swal("Error!", "Transaction failed! Try again later.", "error");
          $('button').prop({disabled: false});
          //alert(JSON.stringify(data));
          //this.trigger("create", data);
        }

    });

    View.AddRecord = Marionette.ItemView.extend({      

        template: patientTpl,

        events: {
          "click .oadd": "addObservation",
          "click .nsave": "createRecord",
          "click .rdiscard": "discardRecord"
        },

        onShow: function(){  
          $('.rdiscard').css({'display':'block'})     
          this.setup();
          this.socketListen();
        },

        setup: function(){

          System.HXObservations = [];

          var hx = $('#hxlist');          
          hx.empty();
          $('#hxtotal').text(hx.find('li').length);

          $('input').val('');
          $('textarea').val('');
          $('#balbf').val(0);

          setTimeout(function() {
            $('#dob-picker').daterangepicker({ singleDatePicker: true, showDropdowns: true, format: 'DD/MM/YYYY' }, function(start, end, label) {});
            $('#obsdate').daterangepicker({ showDropdowns: true, format: 'DD/MM/YYYY' }, function(start, end, label) {});
            $('.selectpicker').selectpicker();
            $('.selectpicker').selectpicker('refresh');
          }, 300);
        },

        socketListen: function(){
          var self = this;
          System.socket.on('record:created', function(data) {
            swal("Success!", "The record has been created. Patient No: "+data.id, "success");
            $('.nsave').prop({disabled: false});
            self.setup();
          });

          System.socket.on('record:error', function(data) {
            swal("Failed!", data.error, "error");
            $('.nsave').prop({disabled: false});
          });
        },

        addObservation: function(e) { 
          var hxtypes = []
          hxtypes['mshx'] = 'Medical-Surgical HX'
          hxtypes['fhx'] = 'Family HX'
          hxtypes['sehx'] = 'Socio-Economic HX'
          hxtypes['rfhx'] = 'Risk Factors'

          var hxcolors = []
          hxcolors['mshx'] = 'color5'
          hxcolors['fhx'] = 'color7'
          hxcolors['sehx'] = 'color9'
          hxcolors['rfhx'] = 'color10'

          e.preventDefault();
          e.stopPropagation();
          var data = Backbone.Syphon.serialize($("#tab7")[0]);
          data.context = $('#tab7 :radio[name="context"]:checked').data('val');
          if (data.phenomenonType!= '' && data.context != '' && data.applicableDate != '' && data.phenomenon != '') {
            this.trigger("addObservation", data);
            var hx = $('#hxlist');
            var tpl = $('<li class="list-group-item"><div class="panel-heading" style="font-size:14px;text-transform:uppercase;padding-bottom: 0px; font-weight: 300">'+data.phenomenonType+'<span style="font-weight:bold;font-size:8px;padding-left:10px;" class="'+hxcolors[data.context]+'">[ '+hxtypes[data.context]+' ]</span></div>'+
                        '<div class="panel-body"><span class="name" style="font-weight:bold;font-size:11px;">Date Applicable: '+data.applicableDate+'</span><br>'+data.phenomenon+'</div></li>');
            tpl.appendTo(hx);
            var count = hx.find('li').length;
            $('#hxtotal').text(count);
            data.context = hxtypes[data.context]
            System.HXObservations[count - 1] = data;
            $('#tab7 input').val('')
          } else {
            swal("Missing Info!", "Ensure all mandatory entries are filled", "info");                      
          }
          
        },

        createRecord: function(e) { 
          e.preventDefault();
          e.stopPropagation();
          $('.nsave').prop({disabled: true});

          var data = Backbone.Syphon.serialize($("#tab1")[0]);
          var data2 = Backbone.Syphon.serialize($("#tab2")[0]);
          var data3 = Backbone.Syphon.serialize($("#tab3")[0]);
          var data4 = Backbone.Syphon.serialize($("#tab4")[0]);
          var data5 = Backbone.Syphon.serialize($("#tab5")[0]);
          var data6 = Backbone.Syphon.serialize($("#tab6")[0]);
          _.extend(data, data2, data3, data4, data5, data6);

          data.balbf = parseFloat(data.balbf) || 0.00;
          data.history = System.HXObservations;

          if (data.fname != '' && data.gname != '' && data.dob != '' && data.gender != '' && data.cellphone != '') {            
            if (data.cellphone.length > 7) {
              this.trigger("create", data);  
            } else{
              swal("Invalid input!", "Ensure you enter correct phone number", "info");
            }      
          } else {
            swal("Missing Info!", "Ensure all mandatory entries are filled", "info");
            $('.nsave').prop({disabled: false});                   
          }
        },

        discardRecord: function(e) { 
          e.preventDefault();
          e.stopPropagation();
          var THAT = this;
          swal({
                title: "Are you sure?",
                text: "You will not be able to recover your input!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, discard!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: true,
                closeOnCancel: true
              },
              function(isConfirm){
                if (isConfirm) {
                  THAT.setup();
                }
              });
          
        }
    });

    View.EditRecord = Marionette.ItemView.extend({      

        template: patientTpl,

        events: {
          "click .oadd": "addObservation",
          "click .nsave": "updateRecord",
          "click .rdelete": "deleteRecord"
        },

        onShow: function(){       
          $('.rdelete').css({'display':'block'})
          System.socket.emit('record:get', {id: this.recordId});
          System.socket.emit('record:getHistory', {id: this.recordId});
          this.setup();
          this.socketListen();
        },

        setup: function(){

          System.HXObservations = [];

          var hx = $('#hxlist');          
          hx.empty();
          $('#hxtotal').text(hx.find('li').length);

          $('input').val('');
          $('textarea').val('');
          $('#balbf').parent().parent().hide();

          System.socket.on('record:file', function(data) {
            //console.log(data)
            //$.each(data, function(i, val) {
              //$("#" + i).append(document.createTextNode(" - " + val));
            //});
            $('input[name=fname]').val(data.firstName)
            $('input[name=gname]').val(data.givenName)
            $('input[name=sname]').val(data.surName)
            $('input[name=oname]').val(data.otherName)
            $('input[name=dob]').val(data.dob)
            $('select[name=gender] option[value="'+data.gender+'"]').prop('selected', true);
            $('select[name=country] option[value="'+data.nationality+'"]').prop('selected', true);
            $('input[name=identification]').val(data.identification)
            $('select[name=btype] option[value="'+data.bloodType+'"]').prop('selected', true);
            $('input[name=cellphone]').val(data.cellPhone)
            $('input[name=workphone]').val(data.workPhone)
            $('textarea[name=postal]').val(data.postalAddress)
            $('textarea[name=physical]').val(data.physicalAddress)
            $('input[name=email]').val(data.email)
            $('input[name=kinname]').val(data.kinName)
            $('select[name=kinrshp] option[value="'+data.kinRelationship+'"]').prop('selected', true);
            $('input[name=kincellphone]').val(data.kinCellPhone)
            $('input[name=kinotherphone]').val(data.kinOtherPhone)
            $('textarea[name=kinpostal]').val(data.kinPostalAddress)
            $('textarea[name=kinphysical]').val(data.kinPhysicalAddress)
            $('input[name=healthname]').val(data.healthName)
            $('input[name=healthoccupation]').val(data.healthOccupation)
            $('input[name=healthcellphone]').val(data.healthCellPhone)
            $('input[name=healthotherphone]').val(data.healthOtherPhone)
            $('textarea[name=healthpostal]').val(data.healthPostalAddress)
            $('textarea[name=healthphysical]').val(data.healthPhysicalAddress)
            $('input[name=empname]').val(data.empName)
            $('input[name=empphone]').val(data.empPhone)
            $('textarea[name=empaddress]').val(data.empAddress)
            $('select[name=insurer] option[value="'+data.billTo+'"]').prop('selected', true);
            $('input[name=refno]').val(data.billRef)

            //obj.setPersonalData('person.png')

            setTimeout(function() {
              $('#dob-picker').daterangepicker({ singleDatePicker: true, showDropdowns: true, format: 'DD/MM/YYYY' }, function(start, end, label) {});
              $('#obsdate').daterangepicker({ showDropdowns: true, format: 'DD/MM/YYYY' }, function(start, end, label) {});
              $('.selectpicker').selectpicker();
              $('.selectpicker').selectpicker('refresh');
            }, 300);
          });

          var self = this;
          var ct = 0;
          System.socket.on('record:history', function(data) {  
            ++ct;
            if (ct == 1) {
              if( Object.prototype.toString.call( data ) === '[object Array]' ) {
                var count = 0;
                data.forEach(function (elem) {
                  ++count;
                  var hxcolor = '';
                  if (elem.context == 'Medical-Surgical HX') hxcolor = 'color5'
                  if (elem.context == 'Family HX') hxcolor = 'color7'
                  if (elem.context == 'Socio-Economic HX') hxcolor = 'color9'
                  if (elem.context == 'Risk Factors') hxcolor = 'color10'
                  var hx = $('#hxlist');
                  var tpl = $('<li class="list-group-item"><div class="panel-heading" style="font-size:14px;text-transform:uppercase;padding-bottom: 0px; font-weight: 300">'+elem.phenomenonType+'<span style="font-weight:bold;font-size:8px;padding-left:10px;" class="'+hxcolor+'">[ '+elem.context+' ]</span></div>'+
                              '<div class="panel-body"><span class="name" style="font-weight:bold;font-size:11px;">Date Applicable: '+elem.dateApplicable+'</span><br>'+elem.phenomenon+'</div></li>');
                  tpl.appendTo(hx);
                  var count = hx.find('li').length;
                  $('#hxtotal').text(count);
                  System.HXObservations[count - 1] = elem;
                })
              } else {
                var hxcolor = '';
                if (data.context == 'Medical-Surgical HX') hxcolor = 'color5'
                if (data.context == 'Family HX') hxcolor = 'color7'
                if (data.context == 'Socio-Economic HX') hxcolor = 'color9'
                if (data.context == 'Risk Factors') hxcolor = 'color10'
                var hx = $('#hxlist');
                var tpl = $('<li class="list-group-item"><div class="panel-heading" style="font-size:14px;text-transform:uppercase;padding-bottom: 0px; font-weight: 300">'+data.phenomenonType+'<span style="font-weight:bold;font-size:8px;padding-left:10px;" class="'+hxcolor+'">[ '+data.context+' ]</span></div>'+
                            '<div class="panel-body"><span class="name" style="font-weight:bold;font-size:11px;">Date Applicable: '+data.dateApplicable+'</span><br>'+data.phenomenon+'</div></li>');
                tpl.appendTo(hx);
                var count = hx.find('li').length;
                $('#hxtotal').text(count);
                System.HXObservations[count - 1] = data;
              }
            } else {

            }   
            
            
          });

          
        },

        socketListen: function(){
          var self = this;
          System.socket.on('record:updated', function(data) {
            swal("Success!", "The record has been updated. Patient No: "+data.id, "success");
            $('.nsave').prop({disabled: false});
          });

          System.socket.on('observation:added', function(data) {
            $('#tab7 input').val('');
          });

          System.socket.on('record:error', function(data) {
            swal("Failed!", data.error, "error");
            $('.nsave').prop({disabled: false});
          });
        },

        addObservation: function(e) { 
          var hxtypes = []
          hxtypes['mshx'] = 'Medical-Surgical HX'
          hxtypes['fhx'] = 'Family HX'
          hxtypes['sehx'] = 'Socio-Economic HX'
          hxtypes['rfhx'] = 'Risk Factors'

          var hxcolors = []
          hxcolors['mshx'] = 'color5'
          hxcolors['fhx'] = 'color7'
          hxcolors['sehx'] = 'color9'
          hxcolors['rfhx'] = 'color10'

          e.preventDefault();
          e.stopPropagation();
          var data = Backbone.Syphon.serialize($("#tab7")[0]);
          data.context = $('#tab7 :radio[name="context"]:checked').data('val');
          if (data.phenomenonType!= '' && data.context != '' && data.applicableDate != '' && data.phenomenon != '') {
            this.trigger("update", data);
            var hx = $('#hxlist');
            var tpl = $('<li class="list-group-item"><div class="panel-heading" style="font-size:14px;text-transform:uppercase;padding-bottom: 0px; font-weight: 300">'+data.phenomenonType+'<span style="font-weight:bold;font-size:8px;padding-left:10px;" class="'+hxcolors[data.context]+'">[ '+hxtypes[data.context]+' ]</span></div>'+
                        '<div class="panel-body"><span class="name" style="font-weight:bold;font-size:11px;">Date Applicable: '+data.applicableDate+'</span><br>'+data.phenomenon+'</div></li>');
            tpl.appendTo(hx);
            var count = hx.find('li').length;
            $('#hxtotal').text(count);
            data.context = hxtypes[data.context]
            System.HXObservations[count - 1] = data;
            data.patientId = this.recordId;
            console.log(data)
            this.trigger("addHX", data);  
          } else {
            swal("Missing Info!", "Ensure all mandatory entries are filled", "info");                      
          }
          
        },

        updateRecord: function(e) { 
          e.preventDefault();
          e.stopPropagation();
          $('.nsave').prop({disabled: true});

          var data = Backbone.Syphon.serialize($("#tab1")[0]);
          var data2 = Backbone.Syphon.serialize($("#tab2")[0]);
          var data3 = Backbone.Syphon.serialize($("#tab3")[0]);
          var data4 = Backbone.Syphon.serialize($("#tab4")[0]);
          var data5 = Backbone.Syphon.serialize($("#tab5")[0]);
          var data6 = Backbone.Syphon.serialize($("#tab6")[0]);
          _.extend(data, data2, data3, data4, data5, data6);

          data.history = System.HXObservations;

          data.id = this.recordId;

          if (data.fname != '' && data.gname != '' && data.dob != '' && data.gender != '' && data.cellphone != '') {            
            if (data.cellphone.length > 7) {
              this.trigger("updateRecord", data);  
            } else{
              swal("Invalid input!", "Ensure you enter correct phone number", "info");
            }      
          } else {
            swal("Missing Info!", "Ensure all mandatory entries are filled", "info");
            $('.nsave').prop({disabled: false});                   
          }
        },

        deleteRecord: function(e) { 
          e.preventDefault();
          e.stopPropagation();
          var THAT = this;
          swal({
                title: "Are you sure?",
                text: "You will not be able to recover your input!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, discard!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: false,
                closeOnCancel: false
              },
              function(isConfirm){
                if (isConfirm) {
                  wal("Discarded!", "Your record has been deleted.", "success"); 
                  THAT.setup();
                }
              });
          
        },

        /*updateRecord: function(e) { 
          e.preventDefault();
          e.stopPropagation();
          var data = {};
          data['id'] = parseInt($('.selectpicker').find("option:selected").val());
          data['name'] = $('#ename').val();
          data['tel'] = $('#etel').val();
          data['idno'] = $('#eidno').val();
          data['email'] = $('#eemail').val();
          data['address'] = $('#eadd').val();
          data['details'] = $('#edetail').val();
          //alert(JSON.stringify(data));
          //swal("Success!", "The record has been created.", "success");
          if (data['name'] != '' && data['tel'] != '' && data['idno'] != '') {
            if (data.idno.length > 5 && data.tel.length > 5) {
              this.trigger("edit", data);
            } else{
              swal("Invalid input!", "Ensure you enter correct phone no. & ID/Passport no.", "info");
            };
          } else {
            swal("Missing Info!", "Ensure all mandatory entries are filled", "info");
          }
          
        },

        deleteRecord: function(e) { 
          e.preventDefault();
          e.stopPropagation();
          var data = {};
          data['id'] = parseInt($('.selectpicker').find("option:selected").val());
          data['operation'] = 'deleteClient';
          var THAT = this;
          swal({
                title: "Are you sure?",
                text: "You will not be able to recover this record!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: false,
                closeOnCancel: false
              },
              function(isConfirm){
                if (isConfirm) {
                  //THAT.trigger("delete", data);

                  $.post(System.coreRoot + '/service/record/delete', data, function(result) {
                    if (result == 1) {
                      swal("Deleted!", "Your record has been deleted.", "success"); 
                      $('input').val('');
                      $('textarea').val('');
                      THAT.setup();
                    }else{
                      swal("Error!", "Transaction failed! Try again later.", "error");
                    }
                  });
                  
                             
                } else {
                  swal("Cancelled", "Your record is safe :)", "info");
                }
              });
          
        },*/
    });

    View.EditsßRecord = Marionette.ItemView.extend({      

        template: patientTpl,

        events: {
          "click .esave": "updateRecord",
          "click .edelete": "deleteRecord",
          "change .selectpicker": "getRecord"
        },

        onShow: function(){

         
          this.setup();
        },

        setup: function(){
          var ul = $('#patients');
          ul.empty();
          $.get(System.coreRoot + '/service/records/patients', function(result) {
            var m = JSON.parse(result);
            var tp = $('<option data-icon="fa fa-institution">Select Patient...</option>');
            tp.appendTo(ul);
            
            m.forEach(function(elem){
              var tpl = $('<option data-icon="fa fa-institution" value="'+elem['id']+'">'+elem['name']+'<span style="font-size: 1px"> ['+elem['details']+']</span></option>');
              tpl.appendTo(ul);
            });
            setTimeout(function() {
                $('.selectpicker').selectpicker();
                $('.selectpicker').selectpicker('refresh');
            }, 300);
          });
        },

        updateRecord: function(e) { 
          e.preventDefault();
          e.stopPropagation();
          var data = {};
          data['id'] = parseInt($('.selectpicker').find("option:selected").val());
          data['name'] = $('#ename').val();
          data['tel'] = $('#etel').val();
          data['idno'] = $('#eidno').val();
          data['email'] = $('#eemail').val();
          data['address'] = $('#eadd').val();
          data['details'] = $('#edetail').val();
          //alert(JSON.stringify(data));
          //swal("Success!", "The record has been created.", "success");
          if (data['name'] != '' && data['tel'] != '' && data['idno'] != '') {
            if (data.idno.length > 5 && data.tel.length > 5) {
              this.trigger("edit", data);
            } else{
              swal("Invalid input!", "Ensure you enter correct phone no. & ID/Passport no.", "info");
            };
          } else {
            swal("Missing Info!", "Ensure all mandatory entries are filled", "info");
          }
          
        },

        deleteRecord: function(e) { 
          e.preventDefault();
          e.stopPropagation();
          var data = {};
          data['id'] = parseInt($('.selectpicker').find("option:selected").val());
          data['operation'] = 'deleteClient';
          var THAT = this;
          swal({
                title: "Are you sure?",
                text: "You will not be able to recover this record!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: false,
                closeOnCancel: false
              },
              function(isConfirm){
                if (isConfirm) {
                  //THAT.trigger("delete", data);

                  $.post(System.coreRoot + '/service/record/delete', data, function(result) {
                    if (result == 1) {
                      swal("Deleted!", "Your record has been deleted.", "success"); 
                      $('input').val('');
                      $('textarea').val('');
                      THAT.setup();
                    }else{
                      swal("Error!", "Transaction failed! Try again later.", "error");
                    }
                  });
                  
                             
                } else {
                  swal("Cancelled", "Your record is safe :)", "info");
                }
              });
          
        },

        getRecord: function(e) { 
          e.preventDefault();
          e.stopPropagation();
          
          var id = parseInt($('.selectpicker').find("option:selected").val());
          $.get(System.coreRoot + '/service/crm/index.php?client&clientid='+id, function(result) {
            var m = JSON.parse(result);
            $('#ename').val(m['name']);
            $('#etel').val(m['telephone']);
            $('#eidno').val(m['idno']);
            $('#eemail').val(m['email']);
            $('#eadd').val(m['address']);
            $('#edetail').val(m['details']);
          });
          //swal("Success!", "The record has been created.", "success");
          //this.trigger("delete", data);
        },

        onDelete: function(e) { 
          swal("Deleted!", "Your record has been deleted.", "success");
          $('input').val('');
          $('textarea').val('');
          this.setup();
          //alert(JSON.stringify(data));
          //this.trigger("create", data);
        },

        onSuccess: function(e) { 
          swal("Success!", "The record has been saved.", "success");
          $('input').val('');
          $('textarea').val('');
          this.setup();
          //alert(JSON.stringify(data));
          //this.trigger("create", data);
        },

        onError: function(e) { 
          swal("Error!", "Transaction failed! Try again later.", "error");
          //alert(JSON.stringify(data));
          //this.trigger("create", data);
        }
    });

    View.ViewPatient = Marionette.ItemView.extend({      

        template: patientTpl,

        events: {
          "click .btnsub": "requestAccess",
        },

        onShow: function(){
          //$("#leadscont").unwrap();
          $('.selectpicker').selectpicker();
        },

        requestAccess: function(e) { 
          e.preventDefault();
          e.stopPropagation();
          
          //alert(JSON.stringify(data));
          this.trigger("create", data);
        }
    });

  });

  return System.RecordsApp.Show.View;
});