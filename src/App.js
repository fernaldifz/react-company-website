import { useRef } from "react"
import CompanyAppBar from "./components/CompanyAppBar";
import ImageSlider from "./components/ImageSlider";
import OurValues from "./components/OurValues";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "./input.css"

function App() {
  const myRef = useRef();

  return (
    <div>
      <div ref={myRef} />
      <CompanyAppBar />
      <ImageSlider />
      <OurValues />
      <ContactUs myRef={myRef} />
      <Footer />
    </div>
  );
}

export default App;
