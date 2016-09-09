<!-- START CONTENT -->
<style type="text/css">
  .upload-img {
      background: rgba(0, 0, 0, 0) url("img/dragdrop.png") no-repeat scroll 0;
      border: 3px dashed #7a7c7f;
      color: #808080;
      height: 200px;
      width: 200px;
      margin: 30px auto;
      background-size: 100%;
  }
  .upload-img.hover {
      border: 3px dashed #f00;
  }

  input:invalid {
    border: 1px solid red;
  }

</style>
<div id="leadscont" class="">

  <!-- Start Page Header -->
  <div class="page-header">
    <h1 class="title">Patient Record Management</h1>
    <!-- Start Page Header Right Div -->
    <div class="right">

      <div class="btn-group" role="group" aria-label="...">
        <a href="#start" class="btn btn-danger"><i class="fa fa-remove"></i>EXIT</a>
      </div>
    
      <div class="btn-group" role="group" aria-label="..." style="margin-right:15px">
        <a href="#" class="btn btn-success nsave" style="font-weight:600"><i class="fa fa-save"></i>SAVE</a>
        <a href="#" class="btn btn-warning rdiscard" style="display:none"><i class="fa fa-reply"></i>DISCARD</a>
        <a href="#" class="btn btn-warning rdelete" style="display:none"><i class="fa fa-trash"></i>DELETE</a>
      </div>

      <div class="btn-group" role="group" aria-label="..." style="margin-right:15px">
        <a href="#records" class="btn btn-light" style="font-weight:600"><i class="fa fa-users"></i>Records Registry</a>
      </div>
    </div>
    <!-- End Page Header Right Div -->
  </div>
  <!-- End Page Header -->

 <!-- //////////////////////////////////////////////////////////////////////////// --> 
  <!-- START CONTAINER -->
  <div class="container-padding">
    <!-- Start Row -->
    <div class="row">
      <div class="col-xs-12 col-sm-12">

          
            <div role="tabpanel">

                  <!-- Nav tabs -->
                  <ul class="nav nav-tabs tabcolor6-bg" role="tablist">
                    <li role="presentation" class="active"><a href="#hometab" aria-controls="hometab" role="tab" data-toggle="tab">1. Personal Data</a></li>
                    <li role="presentation"><a href="#emergencytab" aria-controls="emergencytab" role="tab" data-toggle="tab">2. Emergency Contacts</a></li>
                    <li role="presentation"><a href="#medicaltab" aria-controls="medicaltab" role="tab" data-toggle="tab">3. Medical History</a></li><li role="presentation"><a href="#billingtab" aria-controls="billingtab" role="tab" data-toggle="tab">4. Billing Information</a></li>
                  </ul>

                  <!-- Tab panes -->
                  <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="hometab">
                      <div class="row">
                        <div class="col-xs-12 col-sm-6">
                          <div class="panel panel-default">
                            <div class="panel-title">
                              Identification
                            </div>

                                <div class="panel-body">
                                  <form class="form-horizontal" id="tab1">
                                    <div class="group upload-img">
                                      <input type="file" value="" name="photo" style="display:none" id="pimage">
                                      <span></span>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-2 control-label form-label">First Name<span class="color10">*</span></label>
                                      <div class="col-sm-4">
                                        <input type="text" name="fname" class="form-control" required aria-required="true">
                                      </div>
                                      <label class="col-sm-2 control-label form-label">Given Name<span class="color10">*</span></label>
                                      <div class="col-sm-4">
                                        <input type="text" name="gname" class="form-control" required aria-required="true">
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-2 control-label form-label">Family Name</label>
                                      <div class="col-sm-4">
                                        <input type="text" name="sname" class="form-control">
                                      </div>
                                      <label class="col-sm-2 control-label form-label">Other Name</label>
                                      <div class="col-sm-4">
                                        <input type="text" name="oname" class="form-control">
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      
                                      <label class="col-sm-2 control-label form-label">Birth Date<span class="color10">*</span></label>
                                      <div class="col-sm-4">
                                        <div class="control-group">
                                          <div class="controls">
                                            <div class="input-prepend input-group">
                                              <span class="add-on input-group-addon"><i class="fa fa-calendar"></i></span>
                                              <input type="text" id="dob-picker" class="form-control" name="dob" required aria-required="true"/>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <label class="col-sm-2 control-label form-label">Gender<span class="color10">*</span></label>
                                      <div class="col-sm-4">
                                        <select class="selectpicker form-control" name="gender" required aria-required="true">
                                          <option data-icon="fa fa-user" value="">Select One...</option>
                                          <option data-icon="fa fa-male" value="M">Male</option>
                                          <option data-icon="fa fa-female" value="F">Female</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      
                                      <label class="col-sm-2 control-label form-label">Country</label>
                                      <div class="col-sm-4">
                                        <select class="selectpicker form-control" name="country">
                                          <option data-icon="fa fa-flag" value="KE" selected>Kenya</option>
                                        </select>
                                      </div>
                                      <label class="col-sm-2 control-label form-label">Passport/ID</label>
                                      <div class="col-sm-4">
                                        <input type="text" name="identification" class="form-control">
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-2 control-label form-label">Blood Type</label>
                                      <div class="col-sm-4">
                                        <select class="selectpicker form-control" name="btype">
                                          <option data-icon="fa fa-eyedropper" value="">Select One...</option>
                                          <option data-icon="fa fa-eyedropper" value="A">A</option>
                                          <option data-icon="fa fa-eyedropper" value="B">B</option>
                                          <option data-icon="fa fa-eyedropper" value="AB">AB</option>
                                          <option data-icon="fa fa-eyedropper" value="O">O</option>
                                        </select>
                                      </div>
                                    </div>

                                    
                                  </form>

                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6">
                          <div class="panel panel-default">
                            <div class="panel-title">
                              Contact Information
                            </div>

                            <div class="panel-body">
                                  <form class="form-horizontal" id="tab2">
                                    <div class="form-group">
                                      <label class="col-sm-2 control-label form-label">Cell Phone<span class="color10">*</span></label>
                                      <div class="col-sm-10">
                                        <input type="number" min='0' max='9999999999' name="cellphone" class="form-control" required aria-required="true">
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-2 control-label form-label">Other Phone</label>
                                      <div class="col-sm-10">
                                        <input type="number" name="workphone" class="form-control">
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-2 control-label form-label">E-Mail</label>
                                      <div class="col-sm-10">
                                        <input type="email" name="email" class="form-control">
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-2 control-label form-label">Postal Address</label>
                                      <div class="col-sm-10">
                                        <textarea class="form-control" name="postal" rows="3"></textarea>
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-2 control-label form-label">Physical Address</label>
                                      <div class="col-sm-10">
                                        <textarea class="form-control" name="physical" rows="3"></textarea>
                                      </div>
                                    </div>
                                    
                                  </form>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="emergencytab">
                      <div class="row">
                        <div class="col-xs-12 col-sm-4">
                          <div class="panel panel-default">
                            <div class="panel-title">
                              Next of Kin
                            </div>

                            <div class="panel-body">
                                  <form class="form-horizontal" id="tab3">
                                    <div class="form-group">
                                      <label class="col-sm-3 control-label form-label">Name</label>
                                      <div class="col-sm-9">
                                        <input type="text" name="kinname" class="form-control">
                                      </div>
                                    </div>
                                    <div class="form-group">                                      
                                      <label class="col-sm-3 control-label form-label">Relationship</label>
                                      <div class="col-sm-9">
                                        <select class="selectpicker form-control" name="kinrshp">
                                          <option data-icon="fa fa-user" value="">Select Relationship...</option>
                                          <option data-icon="fa fa-user" value="Partner">Partner</option>
                                          <option data-icon="fa fa-user" value="Parent">Parent</option>
                                          <option data-icon="fa fa-user" value="Guardian">Guardian</option>
                                          <option data-icon="fa fa-user" value="Sibling">Sibling</option>
                                          <option data-icon="fa fa-user" value="Friend">Friend</option>
                                          <option data-icon="fa fa-user" value="Distant Relative">Distant Relative</option>
                                          <option data-icon="fa fa-user" value="Stranger">Stranger</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-3 control-label form-label">Cell Phone</label>
                                      <div class="col-sm-9">
                                        <input type="number" name="kincellphone" class="form-control">
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-3 control-label form-label">Other Phone</label>
                                      <div class="col-sm-9">
                                        <input type="number" name="kinotherphone" class="form-control">
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-3 control-label form-label">Postal Address</label>
                                      <div class="col-sm-9">
                                        <textarea class="form-control" name="kinpostal" rows="3"></textarea>
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-3 control-label form-label">Physical Address</label>
                                      <div class="col-sm-9">
                                        <textarea class="form-control" name="kinphysical" rows="3"></textarea>
                                      </div>
                                    </div>
                                    
                                  </form>

                            </div>
                          </div>
                        </div>
                        
                        <div class="col-xs-12 col-sm-4">

                          <div class="panel panel-default">
                            <div class="panel-title">
                              Primary Healthcare Contact
                            </div>

                            <div class="panel-body">
                                  <form class="form-horizontal" id="tab4">
                                    <div class="form-group">
                                      <label class="col-sm-3 control-label form-label">Name</label>
                                      <div class="col-sm-9">
                                        <input type="text" name="healthname" class="form-control">
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-3 control-label form-label">Occupation</label>
                                      <div class="col-sm-9">
                                        <input type="text" name="healthoccupation" class="form-control" placeholder="e.g Doctor">
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-3 control-label form-label">Cell Phone</label>
                                      <div class="col-sm-9">
                                        <input type="number" name="healthcellphone" class="form-control">
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-3 control-label form-label">Other Phone</label>
                                      <div class="col-sm-9">
                                        <input type="number" name="healthotherphone" class="form-control">
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-3 control-label form-label">Postal Address</label>
                                      <div class="col-sm-9">
                                        <textarea class="form-control" name="healthpostal" rows="3"></textarea>
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-3 control-label form-label">Physical Address</label>
                                      <div class="col-sm-9">
                                        <textarea class="form-control" name="healthphysical" rows="3"></textarea>
                                      </div>
                                    </div>
                                    
                                  </form>

                            </div>
                          </div>

                        </div>

                        <div class="col-xs-12 col-sm-4">
                          <div class="panel panel-default">
                            <div class="panel-title">
                              Employer
                            </div>

                            <div class="panel-body">
                                  <form class="form-horizontal" id="tab5">
                                    <div class="form-group">
                                      <label class="col-sm-3 control-label form-label">Name</label>
                                      <div class="col-sm-9">
                                        <input type="text" name="empname" class="form-control" placeholder="Company's or Individual's Name">
                                      </div>
                                    </div>
                                    
                                    <div class="form-group">
                                      <label class="col-sm-3 control-label form-label">Telephone</label>
                                      <div class="col-sm-9">
                                        <input type="text" name="empphone" class="form-control"/>
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-3 control-label form-label">Address</label>
                                      <div class="col-sm-9">
                                        <textarea class="form-control" name="empaddress" rows="3"></textarea>
                                      </div>
                                    </div>
                                    
                                  </form>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="medicaltab">
                      <div class="row">
                        <div class="col-xs-12 col-sm-4">
                          <div class="panel panel-default">
                            <div class="panel-title">
                              Record Observation
                            </div>

                            <div class="panel-body">
                                  <form class="form-horizontal" id="tab7">                                    
                                    <div class="form-group">
                                      <label class="col-sm-3 control-label form-label" style="margin-top:0px;">Observation Subject<span class="color10">*</span></label>
                                      <div class="col-sm-9">
                                        <input type="text" name="phenomenonType" class="form-control" id="obsphentype">
                                      </div>
                                    </div>
                                    <div class="form-group">                                      
                                      <label class="col-sm-3 control-label form-label">Context<span class="color10">*</span></label>
                                      <div class="col-sm-9">
                                        <div class="radio radio-primary">
                                            <input type="radio" id="mshx" value="mshx" checked name="context" data-val="mshx"/>
                                            <label for="mshx">
                                                Medical-Surgical HX
                                            </label>
                                        </div>
                                        <div class="radio radio-success">
                                            <input type="radio" id="fhx" value="fhx" name="context" data-val="fhx"/>
                                            <label for="fhx">
                                                Family HX
                                            </label>
                                        </div>
                                        <div class="radio radio-warning">
                                            <input type="radio" id="sehx" value="sehx" name="context" data-val="sehx"/>
                                            <label for="sehx">
                                                Socio-Economic HX
                                            </label>
                                        </div>

                                        <div class="radio radio-danger">
                                            <input type="radio" id="rfhx" value="rfhx" name="context" data-val="rfhx"/>
                                            <label for="rfhx">
                                                Risk Factor
                                            </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-3 control-label form-label">Date Applicable<span class="color10">*</span></label>
                                      <div class="col-sm-9">
                                        <div class="control-group">
                                          <div class="controls">
                                            <div class="input-prepend input-group">
                                              <span class="add-on input-group-addon"><i class="fa fa-calendar"></i></span>
                                              <input type="text" class="form-control" name="applicableDate" id="obsdate"/>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-3 control-label form-label">Observation<span class="color10">*</span></label>
                                      <div class="col-sm-12">
                                        <textarea class="form-control" name="phenomenon" rows="7" id="obsphen" value=""></textarea>
                                      </div>
                                    </div>
                                    <button class="btn btn-default oadd float-r">Record</button>

                                  </form>

                            </div>
                          </div>

                        </div>
                        <div class="col-xs-12 col-sm-8">
                          <div class="panel panel-default">

                            <div class="panel-title">
                              Patient's History <span class="badge"  id="hxtotal">5</span>
                            </div>

                            <ul class="list-group" id="hxlist">
                              <li class="list-group-item">
                                <div class="panel-heading" style="font-size:14px;text-transform:uppercase;padding-bottom: 0px; font-weight: 300">By-pass Surgery<span style="font-weight:bold;font-size:12px;padding-left:10px;" class="color5">[ Medical-Surgical HX ]</span></div>

                                <div class="panel-body">
                                  <span class="name" style="font-weight:bold;font-size:11px;">Date: 12/06/2010</span><br>
                                  It is a historical process which mankind is carrying out in accordance with the natural laws of human development.
                                </div>
                              </li>
                              <li class="list-group-item">
                                <div class="panel-heading" style="font-size:14px;text-transform:uppercase;padding-bottom: 0px; font-weight: 300">By-pass Surgery<span style="font-weight:bold;font-size:12px;padding-left:10px;" class="color5">[ Medical-Surgical HX ]</span></div>

                                <div class="panel-body">
                                  <span class="name" style="font-weight:bold;font-size:11px;">Date: 12/06/2010</span><br>
                                  It is a historical process which mankind is carrying out in accordance with the natural laws of human development.
                                </div>
                              </li>
                              <li class="list-group-item">
                                <div class="panel-heading" style="font-size:14px;text-transform:uppercase;padding-bottom: 0px; font-weight: 300">By-pass Surgery<span style="font-weight:bold;font-size:12px;padding-left:10px;" class="color7">[ Family HX ]</span></div>

                                <div class="panel-body">
                                  <span class="name" style="font-weight:bold;font-size:11px;">Date: 12/06/2010</span><br>
                                  It is a historical process which mankind is carrying out in accordance with the natural laws of human development.
                                </div>
                              </li>
                              <li class="list-group-item">
                                <div class="panel-heading" style="font-size:14px;text-transform:uppercase;padding-bottom: 0px; font-weight: 300">By-pass Surgery<span style="font-weight:bold;font-size:12px;padding-left:10px;" class="color9">[ Socio-Economic HX ]</span></div>

                                <div class="panel-body">
                                  <span class="name" style="font-weight:bold;font-size:11px;">Date: 12/06/2010</span><br>
                                  It is a historical process which mankind is carrying out in accordance with the natural laws of human development.
                                </div>
                              </li>
                              <li class="list-group-item">
                                <div class="panel-heading" style="font-size:14px;text-transform:uppercase;padding-bottom: 0px; font-weight: 300">By-pass Surgery<span style="font-weight:bold;font-size:12px;padding-left:10px;" class="color10">[ Risk Factor ]</span></div>

                                <div class="panel-body">
                                  <span class="name" style="font-weight:bold;font-size:11px;">Date: 12/06/2010</span><br>
                                  It is a historical process which mankind is carrying out in accordance with the natural laws of human development.
                                </div>
                              </li>
                            </ul>

                            <div class="panel-footer">PATIENT'S HISTORY</div>

                          </div>

                          

                        </div>
                        
                      </div>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="billingtab">
                      <div class="row">
                        <div class="col-xs-12 col-sm-6">
                          <div class="panel panel-default">
                            <div class="panel-title">
                              Billing Information
                            </div>

                            <div class="panel-body">
                                  <form class="form-horizontal" id="tab6">
                                    <div class="form-group">                                      
                                      <label class="col-sm-3 control-label form-label">Payment Provider<span class="color10">*</span></label>
                                      <div class="col-sm-9">
                                        <select class="selectpicker form-control" name="insurer">
                                          <option data-icon="fa fa-bank" value="Self" selected>Self</option>
                                          <option data-icon="fa fa-bank" value="INA">Insurance A</option>
                                          <option data-icon="fa fa-bank" value="INB">Insurance B</option>
                                          <option data-icon="fa fa-bank" value="CMX">Company X</option>
                                          <option data-icon="fa fa-bank" value="CMY">Company Y</option>
                                          <option data-icon="fa fa-bank" value="DR12">Debtor 12</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-3 control-label form-label">Reference</label>
                                      <div class="col-sm-9">
                                        <input type="text" name="refno" class="form-control">
                                      </div>
                                    </div>
                                    <div class="form-group">
                                      <label class="col-sm-3 control-label form-label">Balance B/F<span class="color10">*</span></label>
                                      <div class="col-sm-9">
                                        <input type="number" id='balbf' name="balbf" class="form-control" value="0" required aria-required="true">
                                      </div>
                                    </div>
                                    
                                  </form>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div> 

          </div>

      </div>
    </div>
    <!-- End Row -->
  </div>
</div>

