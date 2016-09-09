<!-- START CONTENT -->

<div id="leadscont" class="">

  <!-- Start Page Header -->
  <div class="page-header">
    <h1 class="title">Out-patient Billing</h1>
    <!-- Start Page Header Right Div -->
    <div class="right" style="width:300px">

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
        <li class="col-2" style="padding:0"><span style="font-size:24px">15</span>Items</li>
        <li class="col-3" style="padding:0"><span style="font-size:30px">2,910.00</span>Total Sale (Ksh)</li>
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
                                Prescription <span class="label label-warning" id="invtot">3</span>
                              </div>

                              <div class="panel-body table-responsive">

                                <table class="table table-hover table-striped">
                                  <thead>
                                    <tr>
                                      <td>Drug</td>
                                      <td style="text-align:right">Qty</td>
                                    </tr>
                                  </thead>
                                  <tbody id="invoices">
                                    <tr>
                                      <td>Silver Stone Injection</td>
                                      <td style="text-align:right">1</td>
                                    </tr>
                                    <tr>
                                      <td>Silver Stone Tabs</td>
                                      <td style="text-align:right">12</td>
                                    </tr>
                                    <tr>
                                      <td>Paracetamol Tabs</td>
                                      <td style="text-align:right">10</td>
                                    </tr>
                                  </tbody>
                                  <!--tfoot style="font-weight:bold">
                                    <tr>
                                      <td>TOTAL:</td>
                                      <td style="text-align:right">3 Drugs</td>
                                    </tr>
                                  </tfoot-->
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
                                    <label class="col-sm-1 control-label form-label" style="font-weight:600">Item</label>
                                    <div class="col-sm-5">
                                      <select class="selectpicker form-control" name="supplier" id="suppliers" data-live-search="true" >
                                        <option data-icon="fa fa-user">Select Item...</option>
                                      </select>  
                                    </div>
                                    <div class="col-sm-2">
                                      <div class="input-group">
                                        <input type="text" name="tax" class="form-control" id="taxes" value="" placeholder="Quantity">
                                      </div>                  
                                    </div>
                                    <label class="col-sm-1 control-label form-label" style="font-weight:600">Price</label>
                                    <div class="col-sm-3">
                                      <div class="input-group">
                                        <div class="input-group-addon"><i class="">Ksh.</i></div>
                                        <input type="text" name="discount" class="form-control" id="disc" value="" readonly>
                                        <div class="input-group-addon">.00</div>
                                      </div>                 
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <label class="col-sm-1 control-label form-label" style="font-weight:600">VAT</label>
                                    <div class="col-sm-2">
                                      <div class="input-group">
                                        <input type="text" name="tax" class="form-control" id="taxes" placeholder="0" value="" readonly>
                                      </div>                  
                                    </div>
                                    <label class="col-sm-1 control-label form-label" style="font-weight:600">TOTAL</label>
                                    <div class="col-sm-4">
                                      <div class="input-group">
                                        <div class="input-group-addon"><i class="">Ksh.</i></div>
                                        <input type="text" name="tax" class="form-control" id="taxes" placeholder="0" value="" readonly>
                                        <div class="input-group-addon">.00</div>
                                      </div>                  
                                    </div>
                                    <a href="#" class="btn btn-default igenerate"><i class="fa fa-plus-circle"></i>Add</a>
                                    <a href="#" class="btn btn-warning idiscard"><i class="fa fa-trash"></i>Clear Cart</a>
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
                                      <td>Item</td>
                                      <td>@</td>
                                      <td>Qty</td>
                                      <td>Sub-Total</td>
                                      <td style="width:50px"></td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Topocadastral Survey</td>
                                      <td>450 [A]</td>
                                      <td>3</td>
                                      <td>Ksh. 1,350.00</td>
                                      <td><a class="btn btn-small js-edit vcheck" href="#" style="font-size:10px">Delete</a></td>
                                    </tr>
                                    <tr>
                                      <td>Consultation Fees</td>
                                      <td>450 [B]</td>
                                      <td>3</td>
                                      <td>Ksh. 1,350.00</td>
                                      <td><a class="btn btn-small js-edit vcheck" href="#" style="font-size:10px">Delete</a></td>
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

