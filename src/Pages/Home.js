import Header from '../components/Header';
import MobileSearch from '../components/MobileSearch';
import HomeBanner from '../components/HomeBanner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Testimonial from '../components/Testimonial';
import AppSection from '../components/AppSection';
import HomepageContent from '../components/HomepageContent';
// import HomePageCard from '../components/HomepageCard';
const Home = () => {
  return (
    <>
      <Header />
      <MobileSearch />
      <Navbar />
      <HomeBanner />
      <HomepageContent/>
      <Testimonial/>
      <AppSection/>
      <Footer />
    </>
  );
};
export default Home;
