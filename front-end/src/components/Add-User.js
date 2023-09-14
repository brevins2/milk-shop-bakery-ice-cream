function Adduser(){
	function gender() {
		alert('gender');
	}
    return (
        <div class="content container-fluid">
			{/* <!-- Page Header --> */}
			<div class="page-header">
				<div class="row">
					<div class="col-sm-12 d-flex justify-content-between">
						<div class="col-sm-8">
							<h3 class="page-title">Add user</h3>
							<ul class="breadcrumb">
								<li class="breadcrumb-item"><a href="user.html">Users</a></li>
								<li class="breadcrumb-item active">add user</li>
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
							<h4 class="card-title mb-0">Add user</h4>
						</div>

						<div class="card-body">
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
                                                <input type="radio" name="Gender" onClick={gender} value={'Male'} class="form-check-input" />
                                                <label>Male</label>
											</div>
                                            <div class="col-lg-4">
                                                <input type="radio" name="Gender" onClick={gender} value={'Female'} class="form-check-input" />
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
        </div>
    );
}


export default Adduser;