import { Link } from "react-router-dom";
const Header = () => {
    const openNav = () => {
        document.dispatchEvent(new CustomEvent('openNav'));
    }
    return(
        <header className="header">
		<div className="container-fluid">
			<div className="row align-items-center">
				<div className="col-lg-3 col-6">
					<div className="logo">
						<Link to="/"><img alt="Header" src="assets/frontend/images/logo.png" /></Link>
					</div>
				</div>
				<div className="col-lg-9 col-6">
					<div className="d-flex justify-content-end align-items-center">
						<div className="topsearch">
							<form>
								<div className="d-flex">
									<div>
										<select className="topsearchselect">
											<option>Players</option>
											<option>Teams</option>
										</select>
									</div>
									<div>
										<input type="text" className="topsearchfield" name="" placeholder="Search..."/>
									</div>
									<div>
										<button className="toploginBtn"><i className="fas fa-search"></i></button>
									</div>
								</div>
							</form>
						</div>
						<div className="toplogin mobilesearchbtn ms-1">
							<span className="btn"><i className="fas fa-search"></i></span>
						</div>
						<div className="toplogin ms-1">
							<Link to='/login' className="btn">Login</Link>
							{/* <a href="/" className="btn">Login</a> */}
						</div>
						<div className="topsidemenu ms-1">
							<span onClick={openNav} className="btn"><i className="fa fa-bars" aria-hidden="true"></i></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
    )
}
export default Header;