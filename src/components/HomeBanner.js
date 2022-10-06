
const HomeBanner = () => {
    return(
        <section className="home-banner" style={{backgroundImage: 'url(sporthon-play/assets/frontend/images/home-bg.jpg)'}}>
		<div className="container">
			<div className="banner-content">
				<h1 className="text-center text-white fs-1 fw-bold">SPORTS BUILD NATIONS!!</h1>
				<div className="rw-words rw-words-1 text-center mt-3">
	 				<span>Water POLO -  Italian Men's team and USA women's team have won the 2019 FINA World water polo Championships</span>
	 				<span>RUGBY - South Africa won the Rugby 2019 world cup final against England</span>
	 				<span>SOCCER -  Team USA wins 2019 FIFA world cup women's final </span>
	 				<span>TENNIS - Novak Djokovic Wins Fifth Wimbledon Title By Beating Roger Federer</span>
	 				<span>SNOOKER -  Judd Trump Claims International Championship title for a second time</span>
	 				<span>CRICKET - England Team  has won the 12th Edition of the ICC cricket World cup </span>
				</div>

				<form>
					<div className="bannerSearch d-flex justify-content-center mt-4 align-items-center">
						<div className="typetextpnl">
							<input type="text" name="" className="form-control" placeholder="Find Teams, Tournaments, Leagues, Groups, Companies.."/>
						</div>
						<div className="typelocation position-relative">
							<input type="text" name="" className="form-control" placeholder="Location.."/>
							<a className="removelocation" href="/"><i className="fas fa-times"></i></a>
							<span className="typeicon"><i className="fas fa-map-marker-alt"></i></span>
						</div>
						<div className="bannersrchbtn">
							<button className="btn">Search</button>
						</div>
					</div>
				</form>
				<div className="loginsignup-btnlist text-center mt-4">
					<div className="btn-group">
						<a href="/" className="btn">Login</a>
						<span className="btn btnimg"><img alt="Banner" src="sporthon-play/assets/frontend/images/running.png"/></span>
						<a href="/" className="btn">Signup</a>
					</div>
				</div>
				<div className="playvideo text-center mt-3">
					<a href="/" className="playvideoicon" data-bs-toggle="modal" data-bs-target="#videoModal"><i className="fas fa-play-circle"></i></a>
				</div>
			</div>
		</div>
	</section>
    )
}
export default HomeBanner;