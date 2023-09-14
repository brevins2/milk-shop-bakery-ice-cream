import { Link } from 'react-router-dom';

import { Route, Routes } from "react-router-dom";
// import Navbar from "./Navbar";
import Addroad from './Add-Road';
import Addroute from './Add-Route';
import Adduser from './Add-User';
import ForgotPassword from './Forgot-password';
import Index from './Index';
import Login from './Login';
import Roads from './Roads';
import Routeroads from './Routes';
import Users from './Users';

function Navbar(){
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
                                <a href="login">
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
                                        <Link className="active" to="/"><i className="la la-dashboard"></i> <span> Dashboard</span></Link>
                                    </li>	
                                    <li><Link to="/user"><i className="la la-users"></i> <span>Users</span></Link></li>
                                    <li><Link to="/add-user"><i className="la la-user-plus"></i> <span>Add users</span></Link></li>
                                    <li><Link to="roads"><i className="la la-road"></i> <span>Roads</span></Link></li>
                                    <li><Link to="routes"><i className="la la-route"></i><span>Routes</span></Link></li>							
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Sidebar --> */}

                    {/* <!-- Page Wrapper --> */}
                    <div className="page-wrapper">
                        {/* <!-- Page Content --> */}
                        <Routes>
                            <Route path="/" element={<Index />}/>
                            {/* <Route path="/login" element={<Login />}/> */}
                            {/* <Route path="/forgot-password" element={<ForgotPassword />}/> */}

                            <Route path="/user" element={<Users />}/>
                            <Route path="/roads" element={<Roads />}/>
                            <Route path="/routes" element={<Routeroads />}/>

                            <Route path="/add-road" element={<Addroad />}/>
                            <Route path="/add-route" element={<Addroute />}/>
                            <Route path="/add-user" element={<Adduser />}/>
                        </Routes>
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



export default Navbar;