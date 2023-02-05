import Header from "./components/Header";

import "./App.css";
import Info from "./components/Info";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div class="App">
      <Header />
      <Info />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
