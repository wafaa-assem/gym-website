import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import WorkOuts from "./components/WorkOuts/WorkOuts";
import Pricing from "./components/Pricing/Pricing";
import Community from "./components/Community/Community";
import Faq from "./components/Faq/Faq";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";

// default config
AOS.init({
  duration: 2500,
  delay: 400,
});

const App = () => {
  return (
    <div className="overflow-hidden bg-gray-400/5">
      <Header />
      <Banner />
      <About />
      <WorkOuts />
      <Pricing />
      <Community />
      <Faq />
      <Join />
      <Footer />
    </div>
  );
};

export default App;
