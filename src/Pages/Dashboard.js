import Footer from "../components/Footer";
import DashboardHeader from "../components/DashboardHeader";
import MainArea from "../components/MainArea";
import Navbar from "../components/Navbar";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import WelcomeScreen from "../components/WelcomeScreen";

const Dashboard = ({children}) => {
  return (
    <>
    <DashboardHeader/>
    <Navbar/>
      <section
        class="innerbanner"
        style={{backgroundImage: 'url(/assets/frontend/images/home-bg.jpg)'}}
      ></section>
      <div class="bg-gray">
        <div class="container-fluid">
          <div class="row">
            <LeftBar/>
            {children}
            <RightBar/>
          </div>
        </div>
      </div>
      <WelcomeScreen/>
      <Footer/>
    </>
  );
};
export default Dashboard;
