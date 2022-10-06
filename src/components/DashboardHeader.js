import { Link } from "react-router-dom";
const DashboardHeader = () => {
	const openNav = () => {
        document.dispatchEvent(new CustomEvent('openNav'));
    }
    return(
        <>

<header className="header afterlog-heade">
		<div className="container-fluid">
			<div className="row align-items-center">
				<div className="col-lg-3 col-6">
					<div className="logo">
						<Link to="/"><img alt="logo.png" src="/assets/frontend/images/logo.png"/></Link>
					</div>
				</div>
				<div className="col-lg-9 col-6">
					<div className="d-flex justify-content-end align-items-center">
						<div className="toplogin mobilesearchbtn ms-1 d-block">
							<Link><img src="/assets/frontend/images/icon/map.png" height="20px" /></Link>
						</div>
						<div className="toplogin ms-3 d-block position-relative">
							<Link className="notification position-relative">
                            <img src="assets/frontend/images/icon/whistle1.png" height="20px" /> 
                            </Link>
								<span className="noticount">5</span>
							<div id="notifications">
								<h3 className="h6">Notifications <a href="javascript:void(0);" onClick="alertBell();" id="alertBell" title="Toggle Notifiction Sound"><i className="fa fa-bell-slash-o" aria-hidden="true"></i></a></h3>
								<div className="notificationsBody">	 
									<div className="areaeven d-flex">
										<img src="https://sporthon.net/uploads/profile_pictures/1649405038.png" alt="User Avatar" className="imgnotify" />
										<div className="media-body"> 
											<a href="javascript:void(0)" onClick="shownotif();">You have an event join invitation from Team Team IGI</a>  
											<small className="text-muted d-block">5 months ago</small>
										</div>
									</div>
									<div className="areaeven d-flex">
										<img src="https://sporthon.net/uploads/profile_pictures/1649405038.png" alt="User Avatar" className="imgnotify" />
										<div className="media-body"> 
											<a href="javascript:void(0)" onClick="shownotif();">You have an event join invitation from Team Team IGI</a>  
											<small className="text-muted d-block">5 months ago</small>
										</div>
									</div>
									<div className="areaeven d-flex">
										<img src="https://sporthon.net/uploads/profile_pictures/1649405038.png" alt="User Avatar" className="imgnotify" />
										<div className="media-body"> 
											<a href="javascript:void(0)" onClick="shownotif();">You have an event join invitation from Team Team IGI</a>  
											<small className="text-muted d-block">5 months ago</small>
										</div>
									</div>
									<div className="areaeven d-flex">
										<img src="https://sporthon.net/uploads/profile_pictures/1649405038.png" alt="User Avatar" className="imgnotify" />
										<div className="media-body"> 
											<a href="javascript:void(0)" onClick="shownotif();">You have an event join invitation from Team Team IGI</a>  
											<small className="text-muted d-block">5 months ago</small>
										</div>
									</div>
									<div className="areaeven d-flex">
										<img src="https://sporthon.net/uploads/profile_pictures/1649405038.png" alt="User Avatar" className="imgnotify" />
										<div className="media-body"> 
											<a href="javascript:void(0)" onClick="shownotif();">You have an event join invitation from Team Team IGI</a>  
											<small className="text-muted d-block">5 months ago</small>
										</div>
									</div>
								</div>
								<div className="seeAll"><a href="javascript:void()" onClick="shownotif();">See All</a></div>
							</div>
						</div>
						<div className="toplogin ms-3">
							<a href="#" className="text-white"><i className="fa fa-user-circle"></i> Hello, John</a>
						</div>
						<div className="topsidemenu ms-1">
							<span onClick={openNav} className="btn"><i className="fa fa-bars" aria-hidden="true"></i></span>
							{/* <a href="javascript:void(0);" className="btn" onClick="openNav()"><i className="fa fa-bars" aria-hidden="true"></i></a> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>

        <section className="mobilesearch">
		<div className="container">
			<div className="msrch">
				<form>
					<div className="d-flex justify-content-center">
						<div>
							<div className="typetextpnl">
								<input type="text" name="" className="form-control" placeholder="Find Teams, Tournaments, Leagues, Groups, Companies.." />
							</div>
						</div>
						<div>
							<div className="typelocation position-relative">
								<input type="text" name="" className="form-control" placeholder="Location.." />
								<a className="removelocation" href="#"><i className="fas fa-times"></i></a>
								<span className="typeicon"><i className="fas fa-map-marker-alt"></i></span>
							</div>
						</div>
						<div>
							<button className="toploginBtn"><i className="fas fa-search"></i></button>
						</div>
						<div>
							<a href="#" className="toploginBtn closemobile-search d-block"><i className="fas fa-times"></i></a>
						</div>
					</div>
				</form>
			</div>
		</div>
	</section>
	<div id="mySidenav" className="sidenav">
	  	<a href="javascript:void(0)" className="closebtn" onClick="closeNav()">&times;</a>
	  	<div className="sidemenu">
		  <a href="#">About</a>
		  <a href="#">Services</a>
		  <a href="#">Clients</a>
		  <a href="#">Contact</a>
		</div>
	</div>
        </>
    )
}
export default DashboardHeader;