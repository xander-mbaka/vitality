<!-- START CONTENT -->

<div id="leadscont" class="">

  <!-- Start Page Header -->
  <div class="page-header">
    <h1 class="title">Cashier</h1>
    <!-- Start Page Header Right Div -->
    <div class="right" style="min-width:770px">

      <div class="btn-group" role="group" aria-label="...">
        <a href="#start" class="btn btn-danger"><i class="fa fa-remove"></i>EXIT</a>
      </div>
    
      <div class="btn-group" role="group" aria-label="..." style="margin-right:15px">
        <a href="#" class="btn btn-success nsave" style="font-weight:600"><i class="fa fa-save"></i>SUBMIT</a>
      </div>

      <!--div class="btn-group" role="group" aria-label="..." style="margin-right:15px">
        <h2 style="padding:0;margin:0;">Total: 12,000.00</h2>
      </div-->
      <ul class="widget-inline-list" style="bottom:0">
        <li class="col-3" style="padding:0"><span style="font-size:30px">2,910.00</span>Billed (Ksh)</li>
        <li class="col-1" style="padding:0"><span>    </span></li>
        <li class="col-3" style="padding:0"><span style="font-size:30px">1,000.00</span>Paid (Ksh)</li>
        <li class="col-1" style="padding:0"><span>    </span></li>
        <li class="col-3" style="padding:0"><span style="font-size:15px">1,000.00</span>Balance (Ksh)</li>
      </ul>
    </div>
    <!-- End Page Header Right Div -->
  </div>
  <!-- End Page Header -->

 <!-- //////////////////////////////////////////////////////////////////////////// --> 
  <!-- START CONTAINER -->
  <div class="container-padding">
    <!-- Start Row -->
    <div class="row">
                        <div class="col-xs-12 col-sm-3">
                            <div class="panel panel-default blog-post">
                              <p class="patient">
                                <img src="img/profileimg.png" alt="img">
                                <span>Jonathan Doe</span>
                                Male, 23 Years
                              </p>
                              <a href="#" class="btn btn-primary btn-sm" style="margin:30px 30px 0 30px; width: calc(100% - 60px)">View Consolidated Bill</a>
                            </div>
                            <div class="panel panel-widget">
                              <div class="panel-title">
                                UNCLEARED INVOICES <span class="label label-warning" id="invtot">2</span>
                              </div>

                              <div class="panel-body table-responsive">

                                <table class="table table-hover table-striped">
                                  <thead>
                                    <tr>
                                      <td>Dept [Inv No.]</span></td>
                                      <td>Amount</td>
                                      <td>Pay</td>
                                    </tr>
                                  </thead>
                                  <tbody id="invoices">
                                    <tr>
                                      <td>Out-patient <span class="label label-info">#199</span></td>
                                      <td>500</td>
                                      <td><div class="checkbox checkbox-primary" style="margin:0"><input id="checkbox104" type="checkbox" checked><label for="checkbox104"></label></div></td>
                                    </tr>
                                    <tr>
                                      <td>Radiology <span class="label label-info">#203</span></td>
                                      <td>2,450</td>
                                      <td><div class="checkbox checkbox-primary" style="margin:0"><input id="checkbox104" type="checkbox" checked><label for="checkbox104"></label></div></td>
                                    </tr>
                                  </tbody>
                                  <tfoot style="font-weight:bold">
                                    <tr>
                                      <td>TOTAL:</td>
                                      <td colspan="2" style="text-align:right">Ksh. 2,950</td>
                                    </tr>
                                  </tfoot>
                                </table>

                              </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-9">
                          <div class="col-md-12">
                          
                            <div class="panel panel-default">

                              <div class="panel-body">
                                <form class="form-horizontal" style="overflow:hidden;padding-top:10px" id="frmi3">
                                  <div class="form-group">
                                    <label class="col-sm-1 control-label form-label" style="font-weight:600">Method</label>
                                    <div class="col-sm-2">
                                      <select class="selectpicker form-control" name="supplier" id="suppliers" data-live-search="true" >
                                        <option data-icon="fa fa-money">Cash</option>
                                        <option data-icon="fa fa-money">Bank Transfer</option>
                                        <option data-icon="fa fa-money">Creditors</option>
                                      </select>  
                                    </div>
                                    <label class="col-sm-1 control-label form-label" style="font-weight:600">Ref. No</label>
                                    <div class="col-sm-2">
                                      <div class="input-group">
                                        <input type="text" name="tax" class="form-control" id="taxes" value="" placeholder="Quantity">
                                      </div>                  
                                    </div>
                                    <label class="col-sm-1 control-label form-label" style="font-weight:600">Amount</label>
                                    <div class="col-sm-3">
                                      <div class="input-group">
                                        <div class="input-group-addon"><i class="">Ksh.</i></div>
                                        <input type="text" name="discount" class="form-control" id="disc" value="">
                                        <div class="input-group-addon">.00</div>
                                      </div>                 
                                    </div>
                                    <div class="col-sm-2">
                                      <a href="#" class="btn btn-primary igenerate float-r"><i class="fa fa-plus-circle"></i>Add Payment</a>              
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
                                      <td>Method</td>
                                      <td>Reference</td>
                                      <td>Amount</td>
                                      <td style="width:50px"></td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Topocadastral Survey</td>
                                      <td>450 [A]</td>
                                      <td>Ksh. 1,350.00</td>
                                      <td><a class="btn btn-small js-edit vcheck" href="#" style="font-size:10px"><i class="fa fa-trash"></i></a></td>
                                    </tr>
                                    <tr>
                                      <td>Consultation Fees</td>
                                      <td>450 [B]</td>
                                      <td>Ksh. 1,350.00</td>
                                      <td><a class="btn btn-small js-edit vcheck" href="#" style="font-size:10px"><i class="fa fa-trash"></i></a></td>
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

