import Events from "./components/Events";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Articles from "./pages/Articles";
import FAQS from "./pages/FAQS";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Events />
      <Testimonials />
      <Gallery />
      <FAQS />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
