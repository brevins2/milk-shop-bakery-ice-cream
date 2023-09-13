function Routes() {
    return (
		<>
			<div class="content container-fluid">				
				{/* <!-- Page Header --> */}
				<div class="page-header">
					<div class="row">
						<div class="col-sm-12 d-flex justify-content-between">
							<div class="col-sm-8">
								<h3 class="page-title">Routes</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
									<li class="breadcrumb-item active">routes</li>
								</ul>
							</div>
							<div class="col-auto float-right ml-auto">
								<a href="add-route.html" class="btn add-btn"><i class="fa fa-plus"></i>Add route</a>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Page Header --> */}

				<div class="row">
					<div class="col-md-12">
						<div class="table-responsive">
							<table class="table table-striped custom-table mb-0 datatable">
								<thead>
									<tr>
										<th>Route ID</th>
										<th>Route name</th>
										<th>Route from</th>
										<th>Route to</th>
										<th>Status</th>
										<th>Route description</th>
										<th>Route pic</th>
										<th>Route date</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><strong>RT 001</strong></td>
										<td>Bombo-Kampala</td>
										<td>Bombo</td>
										<td>Kampala</td>
										<td>Active</td>
										<td>Passes on Northen-byass and has about five round abouts</td>
										<td><img src="" alt="Bombo-Kampala image"/></td>
										<td>12/8/2023</td>
										<td class="text-right">
											<div class="dropdown dropdown-action">
												<a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
												<div class="dropdown-menu dropdown-menu-right">
													<a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i class="fa fa-pencil m-r-5"></i> Edit</a>
													<a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td><strong>RT 002</strong></td>
										<td>Kampala-Entebbe</td>
										<td>Kampala</td>
										<td>Entebbe</td>
										<td>Inactive</td>
										<td>Goes direct to Entebbe International Airport</td>
										<td><img src="" alt="Kampala-Entebbe image" /></td>
										<td>05/9/2023</td>
										<td class="text-right">
											<div class="dropdown dropdown-action">
												<a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
												<div class="dropdown-menu dropdown-menu-right">
													<a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i class="fa fa-pencil m-r-5"></i> Edit</a>
													<a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td><strong>RT 003</strong></td>
										<td>Masaka-Mpigi</td>
										<td>Masaka</td>
										<td>Mpigi</td>
										<td>Active</td>
										<td>Has some hillsand water bodies along the road</td>
										<td><img src="" alt="Masaka-Mpigi image" /></td>
										<td>01/9/2023</td>
										<td class="text-right">
											<div class="dropdown dropdown-action">
												<a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
												<div class="dropdown-menu dropdown-menu-right">
													<a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i class="fa fa-pencil m-r-5"></i> Edit</a>
													<a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td><strong>RT 004</strong></td>
										<td>Kampala-Hoima</td>
										<td>Kampala</td>
										<td>Hoima</td>
										<td>Inactive</td>
										<td>Goes direct to the oil refinary</td>
										<td><img src="" alt="Has alot of water bodies" /></td>
										<td>05/09/2023</td>
										<td class="text-right">
											<div class="dropdown dropdown-action">
												<a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
												<div class="dropdown-menu dropdown-menu-right">
													<a class="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i class="fa fa-pencil m-r-5"></i> Edit</a>
													<a class="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
												</div>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Edit Client Modal --> */}
			<div id="edit_client" class="modal custom-modal fade" role="dialog">
				<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">Edit Route</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
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
			{/* <!-- /Edit Client Modal --> */}
				
			{/* <!-- Delete Client Modal --> */}
			<div class="modal custom-modal fade" id="delete_client" role="dialog">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-body">
							<div class="form-header">
								<h3>Delete Route</h3>
								<p>Are you sure want to delete?</p>
							</div>
							<div class="modal-btn delete-action">
								<div class="row">
									<div class="col-6">
										<a href="javascript:void(0);" class="btn btn-primary continue-btn">Delete</a>
									</div>
									<div class="col-6">
										<a href="javascript:void(0);" data-dismiss="modal" class="btn btn-primary cancel-btn">Cancel</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /Delete Client Modal --> */}
		</>

    );
}


export default Routes;