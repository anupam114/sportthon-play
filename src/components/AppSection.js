const AppSection = () => {
    return(
        <section className="appdownloadpnl">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 justify-content-center">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="px-lg-5">
								<p>Checkout our Mobile Apps</p>
								<h2 className="fw-bold fs-1 mb-4">Sportthon Mobile Apps</h2>
								<p>Worlds best social networking application for sports . You and Your team able to organize , Communicate , Socialize , Sponsorship and always staty in touch with sports community.</p>
								<ul className="downloadapp mt-4">
									<li><a href="#"><img alt="play" src="sporthon-play/assets/frontend/images/google-play.png" /></a></li>
									<li><a href="#"><img alt="app" src="sporthon-play/assets/frontend/images/ios-app.png" /></a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-6 ">
							<img alt="dow" src="sporthon-play/assets/frontend/images/app-screen.png" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}
export default AppSection;