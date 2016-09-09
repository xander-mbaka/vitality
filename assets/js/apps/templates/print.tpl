<!-- START CONTENT -->

<div id="leadscont" class="">

  <!-- Start Page Header -->
  <div class="page-header">
    <h1 class="title">Reprint Bills & Receipts</h1>
    <!-- Start Page Header Right Div -->
    <div class="right">

      <div class="btn-group" role="group" aria-label="...">
        <a href="#start" class="btn btn-danger"><i class="fa fa-remove"></i>EXIT</a>
      </div>

      <!--div class="btn-group" role="group" aria-label="..." style="margin-right:15px">
        <h2 style="padding:0;margin:0;">Total: 12,000.00</h2>
      </div-->
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
                          <div class="col-md-12">
                          
                            <div class="panel panel-default">

                              <div class="panel-body">
                                <form class="form-horizontal" style="overflow:hidden;padding-top:10px" id="frmi3">
                                  <div class="form-group">
                                    <label class="col-sm-1 control-label form-label" style="font-weight:600">Patient</label>
                                    <div class="col-sm-3">
                                      <select class="selectpicker form-control" name="supplier" id="suppliers" data-live-search="true" >
                                        <option data-icon="fa fa-money">Select Patient ...</option>
                                        <option data-icon="fa fa-money">Bank Transfer</option>
                                        <option data-icon="fa fa-money">Creditors</option>
                                      </select>  
                                    </div>
                                    <div class="col-sm-2">
                                      <select class="selectpicker form-control" name="supplier" id="suppliers" data-live-search="true" >
                                        <option data-icon="fa fa-money">Receipts</option>
                                        <option data-icon="fa fa-money">Bills</option>
                                      </select>  
                                    </div>
                                    <div class="col-sm-1">
                                      <div class="checkbox checkbox-primary" style="margin:0">
                                        <input id="vall" name="vall" type="checkbox" checked><label for="vall">View All</label>
                                      </div>             
                                    </div>
                                    <label class="col-sm-1 control-label form-label">Period:</label>
                                    <div class="col-sm-3" id="filter">
                                      <div class="control-group">
                                        <div class="controls">
                                          <div class="input-prepend input-group">
                                            <span class="add-on input-group-addon"><i class="fa fa-calendar"></i></span>
                                            <input type="text" id="date-range-picker" class="form-control" name="dates"/>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="col-sm-1">
                                      <a href="#" class="btn btn-primary igenerate float-r"><i class="fa fa-search"></i></a>              
                                    </div>
                                    
                                    
                                  </div>
                                  
                                </form>

                              </div>

                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="panel panel-default">

                              <div class="panel-body table-responsive">
                                <table class="table table-hover table-striped">
                                  <thead>
                                    <tr>
                                      <td>Date</td>
                                      <td>Description</td>
                                      <td>Amount</td>
                                      <td>Print</td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Topocadastral Survey</td>
                                      <td>450 [A]</td>
                                      <td>Ksh. 1,350.00</td>
                                      <td><a class="btn btn-small js-edit vcheck" href="#" style="font-size:10px"><i class="fa fa-print"></i>Print</a></td>
                                    </tr>
                                    <tr>
                                      <td>Consultation Fees</td>
                                      <td>450 [B]</td>
                                      <td>Ksh. 1,350.00</td>
                                      <td><a class="btn btn-small js-edit vcheck" href="#" style="font-size:10px"><i class="fa fa-print"></i>Print</a></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
    </div>
    <!-- End Row -->
  </div>
</div>

