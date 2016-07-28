<!-- START CONTENT -->
<div id="leadscont" class="">

  <!-- Start Page Header -->
  <div class="page-header">
    <h1 class="title">Customer Information Management</h1>
    <!-- Start Page Header Right Div -->
    <div class="right">
      <div class="btn-group" role="group" aria-label="...">
        <a href="#clients" class="btn btn-light" style="font-weight:600"><i class="fa fa-users"></i>Clients Register</a>
        <a href="#start" class="btn btn-light"><i class="fa fa-remove"></i></a>
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
      <div class="col-xs-12 col-sm-6">
        <div class="panel panel-default">

          <div class="panel-title">
            Create Customer
            <ul class="panel-tools">
              <li><a class="icon minimise-tool"><i class="fa fa-minus"></i></a></li>
              <li><a class="icon expand-tool"><i class="fa fa-expand"></i></a></li>
              <li><a class="icon closed-tool"><i class="fa fa-times"></i></a></li>
            </ul>
          </div>

              <div class="panel-body">
                <form class="form-horizontal">
                  <div class="form-group">
                    <label class="col-sm-2 control-label form-label">Name<span class="color10">*</span></label>
                    <div class="col-sm-10">
                      <input type="text" name="name" class="form-control" id="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label form-label">Mobile<span class="color10">*</span></label>
                    <div class="col-sm-10">
                      <input type="text" name="tel" class="form-control" id="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label form-label">E-Mail</label>
                    <div class="col-sm-10">
                      <input type="email" name="email" class="form-control" id="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label form-label">Address</label>
                    <div class="col-sm-10">
                      <textarea class="form-control" name="address" rows="3"></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label form-label">Balance B/F<span class="color10">*</span></label>
                    <div class="col-sm-10">
                      <input type="text" name="bal" class="form-control" value="0">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label form-label">Other Details</label>
                    <div class="col-sm-10">
                      <textarea class="form-control" name="details" rows="3"></textarea>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-default nsave">Save</button>
                  <button type="submit" class="btn btn-warning ncancel">Cancel</button>
                </form>

              </div>

        </div>
      </div>
      <div class="col-xs-12 col-sm-6">
        <div class="panel panel-default">

          <div class="panel-title">
            Modify Customer Records
            <ul class="panel-tools">
              <li><a class="icon minimise-tool"><i class="fa fa-minus"></i></a></li>
              <li><a class="icon expand-tool"><i class="fa fa-expand"></i></a></li>
              <li><a class="icon closed-tool"><i class="fa fa-times"></i></a></li>
            </ul>
          </div>

          <div class="panel-body" id='eform'>
            <form class="form-horizontal">
              <div class="form-group">
                <label class="col-sm-2 control-label form-label">Search</label>
                <div class="col-sm-10">
                  <select class="selectpicker form-control" id="clients" name="clients" style="padding-left:5px" data-live-search="true" >
                    <option data-icon="fa fa-institution">Select Customer...</option>
                  </select>  
                </div>              
              </div>    
              <div class="form-group">
                <label class="col-sm-2 control-label form-label">Name</label>
                <div class="col-sm-10">
                  <input type="text" name="name2" class="form-control" id="ename">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label form-label">Mobile</label>
                <div class="col-sm-10">
                  <input type="text" name="tel2" class="form-control" id="etel">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label form-label">E-Mail</label>
                <div class="col-sm-10">
                  <input type="text" name="email2" class="form-control" id="eemail">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label form-label">Address</label>
                <div class="col-sm-10">
                  <textarea class="form-control" name="address2" rows="3" id="eadd"></textarea>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label form-label">Other Details</label>
                <div class="col-sm-10">
                  <textarea class="form-control" name="details2" rows="3" id="edetail"></textarea>
                </div>
              </div>

              <button type="submit" class="btn btn-default esave">Save</button>
              <button type="submit" class="btn btn-warning edelete">Delete</button>
            </form>

          </div>

        </div>
      </div>
    </div>
    <!-- End Row -->
  </div>
</div>

