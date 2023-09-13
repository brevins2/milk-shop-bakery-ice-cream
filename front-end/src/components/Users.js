function Users() {
    return (
        <>
            <div class="content container-fluid">	
				{/* <!-- Page Header --> */}
				<div class="page-header">
					<div class="row">
						<div class="col-sm-12 d-flex justify-content-between">
							<div class="col-sm-8">
								<h3 class="page-title">Users</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
									<li class="breadcrumb-item active">users</li>
								</ul>
						    </div>
                            <div class="col-auto float-right ml-auto">
                                <a href="add-user.html" class="btn add-btn"><i class="fa fa-plus"></i>Add user</a>
                            </div>
						</div>
					</div>
				</div>
				{/* <!-- /Page Header -->	 */}
					
				<div class="row">
					<div class="col-md-12">
						<div class="table-responsive">
							<table class="table table-striped custom-table mb-0 datatable">
								<thead>
									<tr>
										<th>User ID</th>
										<th>Full name</th>
										<th>Gender</th>
										<th>Phone</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Account status</th>
                                        <th>Password</th>
                                        <th>Actin</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><strong>UID 001</strong></td>
										<td>Martin Manzi</td>
										<td>Male</td>
										<td>07123456789</td>
                                        <td>martin@gmail.com</td>
                                        <td>User</td>
                                        <td>Active</td>
                                        <td>**********</td>
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
										<td><strong>UID 002</strong></td>
										<td>Sarah Praise</td>
										<td>Female</td>
										<td>0762201520</td>
                                        <td>praises@yahoo.com</td>
                                        <td>Officer</td>
                                        <td>Active</td>
                                        <td>********</td>
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
										<td><strong>UID 003</strong></td>
										<td>Mariam Muganzi</td>
										<td>Female</td>
										<td>0729902136</td>
                                        <td>mamuganzi@gmail.com</td>
                                        <td>User</td>
                                        <td>Inactive</td>
                                        <td>*******</td>
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
										<td><strong>UID 004</strong></td>
										<td>Musa Mugaaga</td>
										<td>Male</td>
										<td>0751027823</td>
                                        <td>musa@gmail.com</td>
                                        <td>Officer</td>
                                        <td>Inactive</td>
                                        <td>************</td>
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
			{/* <!-- /Page Content --> */}

            {/* <!-- Edit Client Modal --> */}
			<div id="edit_client" class="modal custom-modal fade" role="dialog">
				<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">Edit User</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form action="#">
                                <div class="row">
                                    <div class="col-xl-12 ml-2">
                                        <div class="form-group row">
                                            <label class="col-lg-2 col-form-label">Full name</label>
                                            <div class="col-lg-10 d-flex">
                                                <input type="text" name="full-name" placeholder="Enter full name" class="form-control" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-2 col-form-label">Gender</label>
                                            <div class="col-lg-4 ml-5">
                                                <input type="radio" name="male" class="form-check-input" />
                                                <label>Male</label>
                                            </div>
                                            <div class="col-lg-4">
                                                <input type="radio" name="female" class="form-check-input" />
                                                <label>Female</label>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-2 col-form-label">Phone</label>
                                            <div class="col-lg-10 d-flex">
                                                <input type="tel" name="phone" placeholder="07000000000" class="form-control" maxlength="10" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-2 col-form-label">Email</label>
                                            <div class="col-lg-10 d-flex">
                                                <input type="email" name="email" placeholder="Enter email" class="form-control" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-2 col-form-label">Role</label>
                                            <div class="col-lg-10 d-flex">
                                                <select name="roles" class="form-control">
                                                    <option value="">---select role---</option>
                                                    <option value="officers">Officers</option>
                                                    <option value="users">Users</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-2 col-form-label">Account status</label>
                                            <div class="col-lg-10">
                                                <select name="status" class="form-control">
                                                    <option value="active" class="text-success">Active</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-2 col-form-label">Password</label>
                                            <div class="col-lg-10 d-flex">
                                                <input type="password" name="email" placeholder="password" class="form-control" />
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
								<h3>Delete User</h3>
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



export default Users;