const Footer = () => {
    return(
        <footer>
		<div className="footertop">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 mb-3">
						<div className="footerlogo mb-3">
							<img alt="Brand" src="sporthon-play/assets/frontend/images/logo.png" />
						</div>
						<p><i className="fas fa-map-marker-alt"></i> 4620 Henry St, Project Olympus, Pittsburgh, PA 15213</p>
						<p><i className="far fa-envelope"></i> sportthons@gmail.com</p>
						<ul className="footersocial mt-4">
							<li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
							<li><a href="/"><i className="fab fa-twitter"></i></a></li>
							<li><a href="/"><i className="fab fa-instagram"></i></a></li>
							<li><a href="/"><i className="fab fa-angellist"></i></a></li>
							<li><a href="/"><i className="fab fa-youtube"></i></a></li>
						</ul>
					</div>
					<div className="col-lg-3 mb-3">
						<h3 className="text-white fs-5 mb-3">Company</h3>
						<ul className="footernav">
							<li><a href="/"> About</a></li>
							<li><a href="/"> Company News</a></li>
							<li><a href="/"> Features</a></li>
							<li><a href="/"> Partners</a></li>
						</ul>
					</div>
					<div className="col-lg-3 mb-3">
						<h3 className="text-white fs-5 mb-3">Support</h3>
						<ul className="footernav">
							<li><a href="/"> Help Center</a></li>
							<li><a href="/"> FAQs</a></li>
							<li><a href="/"> Privacy Policy</a></li>
							<li><a href="/"> Responsible Disclosure Policy</a></li>
						</ul>
					</div>
					<div className="col-lg-3 mb-3">
						<h3 className="text-white fs-5 mb-3">Community</h3>
						<ul className="footernav">
							<li><a href="/"> Sports Photography</a></li>
							<li><a href="/"> Sports Science</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div className="footer-bottom">
			<div className="container">
				&copy;  20222 SPORTTHON. All rights reserved.
			</div>
		</div>
	</footer>
    )
}
export default Footer;