function App() {
  return (
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />
      <meta name="description" content="Smarthr - Bootstrap Admin Template" />
		  <meta name="keywords" content="admin, estimates, bootstrap, business, corporate, creative, management, minimal, modern, accounts, invoice, html5, responsive, CRM, Projects" />
      <meta name="author" content="Dreamguys - Bootstrap Admin Template" />
      <meta name="robots" content="noindex, nofollow" />
      <title>Traffic Monitoring System</title>
		
		  {/* <!-- Favicon --> */}
      <link rel="shortcut icon" type="image/x-icon" href="./assets/img/logos/hamz.png" />
		
		  {/* <!-- Bootstrap CSS --> */}
      <link rel="stylesheet" href="./assets/css/bootstrap.min.css" />
		
		  {/* <!-- Fontawesome CSS --> */}
      <link rel="stylesheet" href="./assets/css/font-awesome.min.css" />
		
		  {/* <!-- Lineawesome CSS --> */}
      <link rel="stylesheet" href="./assets/css/line-awesome.min.css" />
		
		  {/* <!-- Main CSS --> */}
      <link rel="stylesheet" href="./assets/css/style.css" />
    </head>

    <body>
		  {/* <!-- Main Wrapper --> */}
      	<div className="main-wrapper">
		
			{/* <!-- Header --> */}
			<div className="header">
					
				{/* <!-- Logo --> */}
				<div className="header-left">
				<a href="index.html" className="logo">
					<img src="assets/img/ham logo.png" width="40" height="40" alt="Traffic Monitoring System" />
				</a>
				</div>
				{/* <!-- /Logo --> */}
				
				<a id="toggle_btn" href="javascript:void(0);">
				<span className="bar-icon">
					<span></span>
					<span></span>
					<span></span>
				</span>
				</a>
				
				{/* <!-- Header Title --> */}
				<div className="page-title-box">
				<h3>Traffic Monitoring System</h3>
				</div>
				{/* <!-- /Header Title --> */}
				
				<a id="mobile_btn" className="mobile_btn" href="#sidebar"><i className="fa fa-bars"></i></a>
				
				{/* <!-- Header Menu --> */}
				<ul className="nav user-menu">	
				{/* <!-- Search --> */}
				<li className="nav-item">
					<div className="top-nav-search">
					<a href="javascript:void(0);" className="responsive-search">
						<i className="fa fa-search"></i>
					</a>
					<form action="search.html">
						<input className="form-control" type="text" placeholder="Search here" />
						<button className="btn" type="submit"><i className="fa fa-search"></i></button>
					</form>
					</div>
				</li>
				{/* <!-- /Search --> */}
				
				{/* <!-- Notifications --> */}
				<li className="nav-item dropdown">
					<a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
					<i className="fa fa-bell-o"></i> <span className="badge badge-pill">3</span>
					</a>
					<div className="dropdown-menu notifications">
					<div className="topnav-dropdown-header">
						<span className="notification-title">Notifications</span>
						<a href="javascript:void(0)" className="clear-noti"> Clear All </a>
					</div>
					<div className="noti-content">
						<ul className="notification-list">
						<li className="notification-message">
							<a href="activities.html">
							<div className="media">
								<span className="avatar">
								<img alt="" src="assets/img/profiles/avatar-02.jpg" />
								</span>
								<div className="media-body">
								<p className="noti-details"><span className="noti-title">John Doe</span> added new task <span className="noti-title">Patient appointment booking</span></p>
								<p className="noti-time"><span className="notification-time">4 mins ago</span></p>
								</div>
							</div>
							</a>
						</li>
						<li className="notification-message">
							<a href="activities.html">
							<div className="media">
								<span className="avatar">
								<img alt="" src="assets/img/profiles/avatar-03.jpg" />
								</span>
								<div className="media-body">
								<p className="noti-details"><span className="noti-title">Tarah Shropshire</span> changed the task name <span className="noti-title">Appointment booking with payment gateway</span></p>
								<p className="noti-time"><span className="notification-time">6 mins ago</span></p>
								</div>
							</div>
							</a>
						</li>
						<li className="notification-message">
							<a href="activities.html">
							<div className="media">
								<span className="avatar">
								<img alt="" src="assets/img/profiles/avatar-06.jpg" />
								</span>
								<div className="media-body">
								<p className="noti-details"><span className="noti-title">Misty Tison</span> added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
								<p className="noti-time"><span className="notification-time">8 mins ago</span></p>
								</div>
							</div>
							</a>
						</li>
						<li className="notification-message">
							<a href="activities.html">
							<div className="media">
								<span className="avatar">
								<img alt="" src="assets/img/profiles/avatar-17.jpg" />
								</span>
								<div className="media-body">
								<p className="noti-details"><span className="noti-title">Rolland Webber</span> completed task <span className="noti-title">Patient and Doctor video conferencing</span></p>
								<p className="noti-time"><span className="notification-time">12 mins ago</span></p>
								</div>
							</div>
							</a>
						</li>
						<li className="notification-message">
							<a href="activities.html">
							<div className="media">
								<span className="avatar">
								<img alt="" src="assets/img/profiles/avatar-13.jpg" />
								</span>
								<div className="media-body">
								<p className="noti-details"><span className="noti-title">Bernardo Galaviz</span> added new task <span className="noti-title">Private chat module</span></p>
								<p className="noti-time"><span className="notification-time">2 days ago</span></p>
								</div>
							</div>
							</a>
						</li>
						</ul>
					</div>
					<div className="topnav-dropdown-footer">
						<a href="activities.html">View all Notifications</a>
					</div>
					</div>
				</li>
				{/* <!-- /Notifications --> */}
			
				<li className="nav-item dropdown has-arrow main-drop">
					<a href="login.html">
					<span className="user-img">
						<img src="assets/img/ham logo.png" alt="" />
						<span className="status online"></span>
					</span>
					<span>logout</span>
					</a>
				</li>
				</ul>
				{/* <!-- /Header Menu --> */}
			</div>
			{/* <!-- /Header --> */}
				
			{/* <!-- Sidebar --> */}
			<div className="sidebar" id="sidebar">
			<div className="sidebar-inner slimscroll">
						<div id="sidebar-menu" className="sidebar-menu">
							<ul className="mt-3">
								<li>
									<a className="active" href="index.html"><i className="la la-dashboard"></i> <span> Dashboard</span></a>
								</li>	
								<li><a href="user.html"><i className="la la-users"></i> <span>Users</span></a></li>
								<li><a href="add-user.html"><i className="la la-user-plus"></i> <span>Add users</span></a></li>
								<li><a href="roads.html"><i className="la la-road"></i> <span>Roads</span></a></li>
								<li><a href="routes.html"><i className="la la-route"></i><span>Routes</span></a></li>							
							</ul>
						</div>
			</div>
			</div>
			{/* <!-- /Sidebar --> */}

			{/* <!-- Page Wrapper --> */}
			<div className="page-wrapper">
				{/* <!-- Page Content --> */}
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
				{/* <!-- /Page Content --> */}
			</div>
			{/* <!-- /Page Wrapper --> */}
    	</div>
		{/* <!-- /Main Wrapper --> */}

		{/* <!-- jQuery --> */}
		<script src="./assets/js/jquery-3.5.1.min.js"></script>

			{/* <!-- Bootstrap Core JS --> */}
		<script src="./assets/js/popper.min.js"></script>
		<script src="./assets/js/bootstrap.min.js"></script>

		{/* <!-- Slimscroll JS --> */}
		<script src="./assets/js/jquery.slimscroll.min.js"></script>
		
		{/* <!-- Custom JS --> */}
		<script src="./assets/js/app.js"></script>
		
    </body>
  </html>
  );
}

export default App;
