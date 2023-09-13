function Addroute() {
    return (
        <div class="content container-fluid">
			{/* <!-- Page Header --> */}
				<div class="page-header">
					<div class="row">
						<div class="col-sm-12 d-flex justify-content-between">
							<div class="col-sm-8">
								<h3 class="page-title">Add Route</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><a href="routes.html">Routes</a></li>
									<li class="breadcrumb-item active">add-route</li>
								</ul>
							</div>
                            <div class="col-auto float-right ml-auto">
                                <a href="add-road.html" class="btn add-btn"><i class="fa fa-plus"></i>Add road name</a>
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
												<label class="col-lg-2 col-form-label">Road</label>
												<div class="col-lg-10 d-flex">
                                                    <select name="route-name" class="form-control">
                                                        <option value="">---select road---</option>
                                                        <option value="Bombo">Bombo road</option>
                                                        <option value="Kampala">Kampala</option>
                                                    </select>
												</div>
											</div>
                                            <div class="form-group row">
												<label class="col-lg-2 col-form-label">From</label>
												<div class="col-lg-10">
                                                    <input type="text" name="from" class="form-control" placeholder="Route from" />
												</div>
											</div>
                                            <div class="form-group row">
												<label class="col-lg-2 col-form-label">To</label>
												<div class="col-lg-10 d-flex">
                                                    <input type="text" name="to" placeholder="Route to" class="form-control" />
												</div>
											</div>
                                            <div class="form-group row">
												<label class="col-lg-2 col-form-label">Status</label>
												<div class="col-lg-10 d-flex">
                                                    <select name="status" class="form-control">
                                                        <option value="">---select status---</option>
                                                        <option value="active">Active</option>
                                                        <option value="inactive">Inactive</option>
                                                    </select>
												</div>
											</div>
											<div class="form-group row">
												<label class="col-lg-2 col-form-label">Route description</label>
												<div class="col-lg-10 d-flex">
                                                    <textarea name="routedescription" cols="30" rows="10" class="form-control" placeholder="Enter route description"></textarea>
												</div>
											</div>
                                            <div class="form-group row">
												<label class="col-lg-2 col-form-label">Route picture</label>
												<div class="col-lg-10">
													<input type="file" name="pic" placeholder="Enter picture" class="form-control" />
												</div>
											</div>
                                            <div class="form-group row">
												<label class="col-lg-2 col-form-label">Route date</label>
												<div class="col-lg-10 d-flex">
                                                    <input type="date" name="email" placeholder="password" class="form-control" />
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
  
export default Addroute;
  