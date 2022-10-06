const RightBar = () => {
    return(
        <div className="col-lg-3 pe-lg-0 ">
					<div className="right-sidebar bg-white shadow h-100 py-3 px-2">
						<form>
							<div className="d-flex mb-4">
								<div className="sideselect flex-fill pe-1">
									<select className="form-control" id="myselection">
										<option value="One">Players</option>
										<option value="Two">Teams</option>
									</select>
								</div>
								<div className="seidesearch position-relative flex-fill">
									<input type="text" className="form-control" name="" placeholder="Search...." />
									<button className="sidesrchbtn"><i className="fas fa-search"></i></button>
								</div>
							</div>
							<div className="px-1">
								<h5 className="fs-6 text-secondary mb-3">Want To Follow?</h5>
								<div id="showOne" className="myDiv">
									<div className="palylistall">
										<div className="player-follwlist d-flex align-items-center mb-4">
											<div className="listplayerimg me-2">
												<img src="frontend/images/image1.jpg" />
											</div>
											<div className="listplayername flex-fill">
												Aniruddha Unn
											</div>
											<div>
												<button className="btn followplayer">Follow</button>
											</div>
										</div>
										<div className="player-follwlist d-flex align-items-center mb-4">
											<div className="listplayerimg me-2">
												<img src="frontend/images/image2.jpg" />
											</div>
											<div className="listplayername flex-fill">
												Aniruddha Unn
											</div>
											<div>
												<button className="btn followplayer">Follow</button>
											</div>
										</div>
										<div className="player-follwlist d-flex align-items-center mb-4">
											<div className="listplayerimg me-2">
												<img src="frontend/images/image3.jpg" />
											</div>
											<div className="listplayername flex-fill">
												Aniruddha Unn
											</div>
											<div>
												<button className="btn followplayer">Follow</button>
											</div>
										</div>
										<div className="player-follwlist d-flex align-items-center mb-4">
											<div className="listplayerimg me-2">
												<img src="frontend/images/image1.jpg" />
											</div>
											<div className="listplayername flex-fill">
												Aniruddha Unn
											</div>
											<div>
												<button className="btn followplayer">Follow</button>
											</div>
										</div>
										<div className="player-follwlist d-flex align-items-center mb-4">
											<div className="listplayerimg me-2">
												<img src="frontend/images/image2.jpg" />
											</div>
											<div className="listplayername flex-fill">
												Aniruddha Unn
											</div>
											<div>
												<button className="btn followplayer">Follow</button>
											</div>
										</div>
										<div className="player-follwlist d-flex align-items-center mb-4">
											<div className="listplayerimg me-2">
												<img src="frontend/images/image3.jpg" />
											</div>
											<div className="listplayername flex-fill">
												Aniruddha Unn
											</div>
											<div>
												<button className="btn followplayer">Follow</button>
											</div>
										</div>
									</div>
								</div>
								<div id="showTwo" className="myDiv">
									<div className="palylistall">
										<div className="player-follwlist d-flex align-items-center mb-4">
											<div className="listplayerimg me-2">
												<img src="frontend/images/logoteam1.jpg" />
											</div>
											<div className="listplayername flex-fill">
												Royal Challengers
												<small>Cricket</small>
											</div>
											<div>
												<button className="btn followplayer">Follow</button>
											</div>
										</div>
										<div className="player-follwlist d-flex align-items-center mb-4">
											<div className="listplayerimg me-2">
												<img src="frontend/images/logoteam1.jpg" />
											</div>
											<div className="listplayername flex-fill">
												Royal Challengers
												<small>Cricket</small>
											</div>
											<div>
												<button className="btn followplayer">Follow</button>
											</div>
										</div>
										<div className="player-follwlist d-flex align-items-center mb-4">
											<div className="listplayerimg me-2">
												<img src="frontend/images/logoteam1.jpg" />
											</div>
											<div className="listplayername flex-fill">
												Royal Challengers
												<small>Cricket</small>
											</div>
											<div>
												<button className="btn followplayer">Follow</button>
											</div>
										</div>
										<div className="player-follwlist d-flex align-items-center mb-4">
											<div className="listplayerimg me-2">
												<img src="frontend/images/logoteam1.jpg" />
											</div>
											<div className="listplayername flex-fill">
												Royal Challengers
												<small>Cricket</small>
											</div>
											<div>
												<button className="btn followplayer">Follow</button>
											</div>
										</div>
										<div className="player-follwlist d-flex align-items-center mb-4">
											<div className="listplayerimg me-2">
												<img src="frontend/images/logoteam1.jpg" />
											</div>
											<div className="listplayername flex-fill">
												Royal Challengers
												<small>Cricket</small>
											</div>
											<div>
												<button className="btn followplayer">Follow</button>
											</div>
										</div>
										<div className="player-follwlist d-flex align-items-center mb-4">
											<div className="listplayerimg me-2">
												<img src="frontend/images/logoteam1.jpg" />
											</div>
											<div className="listplayername flex-fill">
												Royal Challengers
												<small>Cricket</small>
											</div>
											<div>
												<button className="btn followplayer">Follow</button>
											</div>
										</div>
									</div>
								</div>
								<div className="text-center mt-3"><a href="#" className="text-maroon fw-bold">View More</a></div>
							</div>
							
						</form>
					</div>
				</div>
    )
}
export default RightBar;