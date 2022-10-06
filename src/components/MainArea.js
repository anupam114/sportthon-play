import { Link } from "react-router-dom";

const MainArea = () => {
  return (
    <div className="col-lg-7">
      <div className="middle-top-head my-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="tophead-title">
          </div>
          <div className="d-flex align-items-center">
            <div className="me-4">
              <a href="#" className="color-black fs-5">
                <i className="fas fa-list-ol"></i>
              </a>
            </div>
            <div>
              <Link to="/create-team" className="btn btn-marooon">Create Team<i className="fas fa-plus ms-2"></i></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-sm border bg-white rounded overflow-hidden mb-4">
        <div className="teamtab">
          <ul
            className="nav nav-pills mb-3 nav-justified"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Created
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                tabindex="-1"
              >
                Joined
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content p-3" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-3">
                <div className="card rounded shadow-sm teamcard h-100">
                  <div className="card-image">
                    <a href="#">
                      <img src="/assets/frontend/images/playmatch.png" />
                    </a>
                  </div>
                  <div className="card-body border-top">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h4 className="tname fs-6 mb-0">
                        <a href="#" className="text-maroon">
                          Team Name
                        </a>
                      </h4>
                      <div className="ticon">
                        <img src="/assets/frontend/images/icons/icon-play.png" />
                      </div>
                    </div>
                    <p className="fs-13 text-secondary">
                      <i className="fas fa-map-marker-alt"></i> Champaign, IL
                    </p>
                    <p className="fs-13 text-secondary">Members: 20</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-3">
                <div className="card rounded shadow-sm teamcard h-100">
                  <div className="card-image">
                    <a href="#">
                      <img src="assets/frontend/images/playmatch.png" />
                    </a>
                  </div>
                  <div className="card-body border-top">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h4 className="tname fs-6 mb-0">
                        <a href="#" className="text-maroon">
                          Super Strickers
                        </a>
                      </h4>
                      <div className="ticon">
                        <img src="/assets/frontend/images/icons/icon-play.png" />
                      </div>
                    </div>
                    <p className="fs-13 text-secondary">
                      <i className="fas fa-map-marker-alt"></i> Champaign, IL
                    </p>
                    <div className="d-flex justify-content-between">
                      <p className="fs-13 text-secondary">Members: 20</p>
                      <p className="text-maroon fw-bold">P</p>
                    </div>
                    <button className="btn w-100 btn-light-maroon">
                      Send Invite <i className="fab fa-telegram-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainArea;
