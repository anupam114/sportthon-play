import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const Partners = () => {
  return (
    <>
      <Header />
      <Navbar />

      <section className="innerbanner" style={{backgroundImage: 'url(/assets/frontend/images/home-bg.jpg)'}}></section>

      <section className="py-5">
	<div className="container">
		<h2 className="text-center text-maroon text-uppercase fw-bold fs-2 mb-5 pagetitle">All Partners</h2>
		<div className="row justify-content-center">
			<div className="col-lg-3 col-md-4 col-6 mb-4 text-center">
				<div className="partnerbox border rounded shadow">
					<div className="partnerlogo">
						<img alt="part.png" src="/assets/frontend/images/part.png" />
					</div>
					<div className="partnerlogocontent">
						<h2>Carnegie Mellon University</h2>
						<p>United States</p>
					</div>
				</div>
			</div>

			<div className="col-lg-3 col-md-4 col-6 mb-4 text-center">
				<div className="partnerbox border rounded shadow">
					<div className="partnerlogo">
						<img alt="part.png1" src="/assets/frontend/images/part.png" />
					</div>
					<div className="partnerlogocontent">
						<h2>Carnegie Mellon University</h2>
						<p>United States</p>
					</div>
				</div>
			</div>

			<div className="col-lg-3 col-md-4 col-6 mb-4 text-center">
				<div className="partnerbox border rounded shadow">
					<div className="partnerlogo">
						<img alt="part.png2" src="/assets/frontend/images/part.png" />
					</div>
					<div className="partnerlogocontent">
						<h2>Carnegie Mellon University</h2>
						<p>United States</p>
					</div>
				</div>
			</div>

			<div className="col-lg-3 col-md-4 col-6 mb-4 text-center">
				<div className="partnerbox border rounded shadow">
					<div className="partnerlogo">
						<img alt="part.png3" src="/assets/frontend/images/part.png" />
					</div>
					<div className="partnerlogocontent">
						<h2>Carnegie Mellon University</h2>
						<p>United States</p>
					</div>
				</div>
			</div>

		</div>
	</div>
</section>
      <Footer />
    </>
  );
};
export default Partners;
