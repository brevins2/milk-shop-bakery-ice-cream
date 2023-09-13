function Addroad() {
    return (
        <div class="content container-fluid">          
        
            {/* <!-- Page Header --> */}
            <div class="page-header">
                <div class="row">
                    <div class="col-sm-12 d-flex justify-content-between">
                        <div class="col-sm-8">
                            <h3 class="page-title">Add Road</h3>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="roads.html">Roads</a></li>
                                <li class="breadcrumb-item active">add-road</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /Page Header --> */}
            
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title mb-0">Add Route</h4>
                        </div>

                        <div class="card-body">
                            <form action="#">
                                <div class="row">
                                    <div class="col-xl-12 ml-2">
                                        <div class="form-group row">
                                            <label class="col-lg-2 col-form-label">Road name</label>
                                            <div class="col-lg-10 d-flex">
                                                <input type="text" name="full-name" placeholder="Enter road name" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="text-right">
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
export default Addroad;
  