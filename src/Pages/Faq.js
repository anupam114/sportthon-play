import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const Faq = () => {
  return (
    <>
      <Header />
      <Navbar />

      <section className="innerbanner" style={{backgroundImage: 'url(/assets/frontend/images/home-bg.jpg)'}}></section>

      <section className="py-5">
	<div className="container">
		<h2 className="text-center text-maroon text-uppercase fw-bold fs-2 mb-5 pagetitle">Faq's</h2>
		<div className="accordion faqpanel" id="accordionExample">
		  <div className="accordion-item">
		    <h2 className="accordion-header" id="headingOne">
		      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
		        What is SPORTTHON?
		      </button>
		    </h2>
		    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
		      <div className="accordion-body">
		        <p className="fw-bold">Answer:</p>
		        <p>Sportthon is a free social networking site, designed to bring the sports community together through a social network dedicated to athletes. Connect with friends, find and meet new players, form teams, and organize matches now on Sportthon today!</p>
		      </div>
		    </div>
		  </div>
		  <div className="accordion-item">
		    <h2 className="accordion-header" id="headingTwo">
		      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
		        Where can I get some help?
				</button>
		    </h2>
		    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
		      <div className="accordion-body">
		        <p className="fw-bold">Answer:</p>
		        <p>Please send a mail to sportthons@gmail.com , for any issues. give atleast few hours to respond back</p>
		      </div>
		    </div>
		  </div>
		  <div className="accordion-item">
		    <h2 className="accordion-header" id="headingThree">
		      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
		        What sports does Sportthon deal with?
		      </button>
		    </h2>
		    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
		      <div className="accordion-body">
		        <p className="fw-bold">Answer:</p>
		        <p>All sports, all age groups, any skill levels, any place, anywhere, anytime.  </p>
		      </div>
		    </div>
		  </div>
		  <div className="accordion-item">
		    <h2 className="accordion-header" id="headingFour">
		      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
		        What services does Sportthon provide?
		      </button>
		    </h2>
		    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
		      <div className="accordion-body">
		        <p className="fw-bold">Answer:</p>
		        <p>Sportthon is a one-stop-shop for everything sports; from helping you build your local rec-team, to managing your sports league, Sportthon allows you to socialize with other sports lovers while giving you access to unlimited sports resources including live news, scores,event-updates, and more! </p>
		      </div>
		    </div>
		  </div>
		  <div className="accordion-item">
		    <h2 className="accordion-header" id="headingFive">
		      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
		        Where can I use Sportthon?
		      </button>
		    </h2>
		    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
		      <div className="accordion-body">
		        <p className="fw-bold">Answer:</p>
		        <p>Sportthon is available around the world! Sign up today and plug in your location to find nearby Sportthons, leagues, sports shops, tournaments, and everything else an athlete would need!</p>
		      </div>
		    </div>
		  </div>
		  <div className="accordion-item">
		    <h2 className="accordion-header" id="headingSix">
		      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
		        How does Sportthon help in e-commerce?
		      </button>
		    </h2>
		    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
		      <div className="accordion-body">
		        <p className="fw-bold">Answer:</p>
		        <p>Sportthon assists in helping consumers find market products, services, and brands that retailers and business owners want to display to their consumers. This will ultimately provide a better online experience for Sportthon by rewarding them with discounts on goods and services. </p>
		      </div>
		    </div>
		  </div>
		  <div className="accordion-item">
		    <h2 className="accordion-header" id="headingSeven">
		      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
		        What is Sportthon's mission?
		      </button>
		    </h2>
		    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
		      <div className="accordion-body">
		        <p className="fw-bold">Answer:</p>
		        <p>Sportthon strives to create a complete sports social network where sports fans of all types can interact with other sports enthusiasts. </p>
		      </div>
		    </div>
		  </div>
		  <div className="accordion-item">
		    <h2 className="accordion-header" id="headingEight">
		      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
		        What can Sportthon do with local sports leagues?
		      </button>
		    </h2>
		    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
		      <div className="accordion-body">
		        <p className="fw-bold">Answer:</p>
		        <p>Sportthon allows you to put yourself into the spotlight. In creating a Sportthon team you can engage with status posts with other Sportthon members. By creating a league on Sportthon, you can reach out to others and build your network.   </p>
		      </div>
		    </div>
		  </div>
		  <div className="accordion-item">
		    <h2 className="accordion-header" id="headingNine">
		      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
		        Is the content I post on Sportthon mine?
		      </button>
		    </h2>
		    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
		      <div className="accordion-body">
		        <p className="fw-bold">Answer:</p>
		        <p>You own all of the content and information you post on Sportthon, meaning, you can control how it is shared through your privacy and the settings. Also, for content that is covered by intellectual property rights (photos and videos, i.e IP content) you specifically give Sportthon the permission, subject to your privacy and application settings: you grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use any IP content that you post on or in connection with Sportthon.</p>
		      </div>
		    </div>
		  </div>
		  <div className="accordion-item">
		    <h2 className="accordion-header" id="headingTen">
		      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
		        How does Sportthon handle copyright?
		      </button>
		    </h2>
		    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
		      <div className="accordion-body">
		        <p className="fw-bold">Answer:</p>
		        <p>We respect other people's rights and expect you to do the same. As a member of Sportthon, you will not post content or take any action on Sportthon that infringes or violates someone else's rights or otherwise violates the law. Sportthon administrators have the ability to remove any content or information you post on Sportthon if they believe that it violates Sportthon's policies. If we remove your content for infringing someone else's copyright, and you believe we removed it by mistake, we will provide you with an opportunity to appeal. If you repeatedly infringe other people's intellectual property rights, we will disable your account from Sportthon.</p>
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
export default Faq;
