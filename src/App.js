import logo from "./logo.svg";
import "./App.css";
import Nav from "./component/Nav/Nav";
import Page1 from "./component/Page1/Page1";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <ParallaxProvider>
        <Nav />
        <Page1 />
      </ParallaxProvider>
    </div>
  );
}

export default App;
