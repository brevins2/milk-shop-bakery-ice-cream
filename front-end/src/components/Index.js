function Index(){
    return (
        <div className="content container-fluid">
            {/* <!-- Page Header --> */}
			<div className="page-header">
			    <div className="row">
					<div className="col-sm-12">
						<h3 className="page-title">Welcome To Traffic Monitoring System</h3>
						<ul className="breadcrumb">
							<li className="breadcrumb-item active">Dashboard</li>
						</ul>
					</div>
				</div>
			</div>
			{/* <!-- /Page Header --> */}

			<div className="row">
				<div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
					<div className="card dash-widget">
						<div className="card-body">
							<span className="dash-widget-icon"><i className="fa fa-user"></i></span>
							<div className="dash-widget-info">
                                <h3>150</h3>
                                <span>Users</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
					<div className="card dash-widget">
						<div className="card-body">
							<span className="dash-widget-icon"><i className="fa fa-users"></i></span>
							<div className="dash-widget-info">
							    <h3>100</h3>
							    <span>Officers</span>
						    </div>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
					<div className="card dash-widget">
						<div className="card-body">
							<span className="dash-widget-icon"><i className="la la-route"></i></span>
							<div className="dash-widget-info">
								<h3>44</h3>
								<span>Routes</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
					<div className="card dash-widget">
						<div className="card-body">
							<span className="dash-widget-icon"><i className="fa fa-road"></i></span>
							<div className="dash-widget-info">
                                <h3>35</h3>
                                <span>Roads</span>
							</div>
						</div>
					</div>
				</div>
			</div>
					
			<div className="row">
				<div className="col-md-12">
					<div className="row">
						<div className="col-md-6 text-center">
							<div className="card">
								<div className="card-body">
									<h3 className="card-title">Tracks activity on Roads and Routes</h3>
									<div id="bar-charts"></div>
								</div>
							</div>
						</div>
						<div className="col-md-6 text-center">
							<div className="card">
								<div className="card-body">
									<h3 className="card-title">Organizes different users</h3>
									<div id="line-charts"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		
			<div className="row">
				<div className="col-md-12">
					<div className="card-group m-b-30">							
						<div className="card">
							<div className="card-body">
								<div className="d-flex justify-content-between mb-3">
									<div>
										<span className="d-block">Active roads</span>
									</div>
									<div>
									    <span className="text-danger">+85.7%</span>
									</div>
								</div>
								<h3 className="mb-3">30</h3>
								<div className="progress mb-2" style={{height: 5 }}>
								    <div className="progress-bar bg-primary" role="progressbar" style={{width: 85  }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<p className="mb-0">Previous Month <span className="text-muted">32</span></p>
							</div>
						</div>

						<div className="card">
							<div className="card-body">
								<div className="d-flex justify-content-between mb-3">
									<div>
										<span className="d-block">Active Routes</span>
									</div>
									<div>
										<span className="text-success">84.4%</span>
									</div>
								</div>
								<h3 className="mb-3">38</h3>
								<div className="progress mb-2" style={{height: 5 }}>
									<div className="progress-bar bg-primary" role="progressbar" style={{width: 84 }} aria-valuenow="84" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<p className="mb-0">Previous Month <span className="text-muted">35</span></p>
							</div>
						</div>

						<div className="card">
							<div className="card-body">
								<div className="d-flex justify-content-between mb-3">
									<div>
										<span className="d-block">Active Users</span>
									</div>
									<div>
										<span className="text-success">100%</span>
									</div>
								</div>
								<h3 className="mb-3">250</h3>
								<div className="progress mb-2" style={{height: 5}}>
									<div className="progress-bar bg-primary" role="progressbar" style={{width: 100 }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<p className="mb-0">Previous Month <span className="text-muted">190</span></p>
							</div>
						</div>
					</div>
				</div>	
			</div>
		</div>
    );
}

export default Index;