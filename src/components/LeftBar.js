import { NavLink } from "react-router-dom";
const RightBar = () => {
  return (
    <div className="col-lg-2 ps-lg-0">
    <div className="left-sidebar bg-white shadow h-100">
      <div className="leftprofile-block">
        <div className="profiletoggle">
            <a className="dropdown-toggle position-relative" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="assets/frontend/images/image2.jpg" className="picon" /> Ramesh Babu
            </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
            </ul>
        </div>
      </div>
      <ul className="sidemenulist">
        <li><NavLink className={({ isActive }) => isActive ? "active" : "" } to="/moments"><span><img src="/assets/frontend/images/icons/icon3.png" /></span> Moments</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "active" : "" } to="/dashboard"><span><img src="/assets/frontend/images/icons/icon7.png" /></span> My Teams</NavLink></li>
      </ul>
    </div>
  </div>
  )
}
export default RightBar;
