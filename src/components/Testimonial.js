import Caraosel from "react-bootstrap/Carousel";
const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="container">
        <h2 className="text-center text-white fs-3 mb-5">Testimonial</h2>

        <Caraosel 
        className="text-center text-white"
        indicators={false}
        >
          <Caraosel.Item>
            <img
              className="rounded-circle shadow-1-strong mb-4"
              src="/sporthon-play/assets/frontend/images/image1.jpg"
              alt="avatar"
            />
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h5 className="mb-3">Maria Kate</h5>
                <p>Photographer</p>
                <p className="text-light">
                  <i className="fas fa-quote-left pe-2"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                  quibusdam illo, beatae quia fugit consequatur laudantium velit
                  magnam error. Consectetur distinctio fugit doloremque.
                </p>
              </div>
            </div>
          </Caraosel.Item>
          <Caraosel.Item>
            <img
              className="rounded-circle shadow-1-strong mb-4"
              src="/sporthon-play/assets/frontend/images/image1.jpg"
              alt="avatar"
            />
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h5 className="mb-3">Maria Kate</h5>
                <p>Photographer</p>
                <p className="text-light">
                  <i className="fas fa-quote-left pe-2"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                  quibusdam illo, beatae quia fugit consequatur laudantium velit
                  magnam error. Consectetur distinctio fugit doloremque.
                </p>
              </div>
            </div>
          </Caraosel.Item>
        </Caraosel>
      </div>
    </section>
  );
};
export default Testimonial;
