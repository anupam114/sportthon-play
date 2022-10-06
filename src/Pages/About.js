import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const About = () => {
  return (
    <>
      <Header />
      <Navbar />

      <section class="innerbanner" style={{backgroundImage: 'url(/assets/frontend/images/home-bg.jpg)'}}></section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center text-maroon text-uppercase fw-bold fs-2 mb-5 pagetitle">
            About Us
          </h2>
          <div className="text-center mb-3 mt-5">
            <img alt="abt" src="/assets/frontend/images/about.png" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h3 className="text-center mb-4 text-black">
                We are an awesome bunch of Athletes, Students,TechGeeks.
                Venturing on bringing sports community together.{" "}
              </h3>
            </div>
            <div className="col-lg-12 text-start">
              <h5 className="fw-normal mb-3 h6">
                Sportthon Moving from place to place but let you in touch with
                your passion for sports. Sportthon Founded in 2019 , based in
                Pittsburgh, Pennsylvania. We aim to expand the sports culture
                with no limits . it allow to follow and create all favorite
                sports , get sports news and sports events happening around you
                with similar passionate people.
              </h5>
              <h5 className="fw-normal mb-3 h6">
                The working team network comes from diverse background and work
                remotely to make it convenient to connect the sports
                enthusiastic together. Sportthon brings positive impact on the
                society, sports enhance the body mentally and physically and
                bring understanding in the society. We bring closer to you ,
                every step towards following your passion being a better sports
                person and following healthier path.
              </h5>
              <h5 className="fw-normal mb-3 h6">
                Sportthon vision to bring health and sports in everyday life of
                the community however we believe sportthon platform will bring
                lost sports, team sports, traditional sports more value to the
                societies.
              </h5>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default About;
