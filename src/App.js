import "./App.css"
import Header from "./components/Header/Header.js"
import Carousel from "./components/Carousel/Carousel.js"
import Footer from "./components/Footer/Footer.js"
import mainPageCarouselImage0 from "./images/main-page-carousel/0.png"
import mainPageCarouselImage1 from "./images/main-page-carousel/1.png"

function App() {
  return (
    <div id="App">
      <Header />
      <div id="Hero">
        <Carousel show={1}>
          <img src={ mainPageCarouselImage0 } alt=""/>
          <img src={ mainPageCarouselImage1 } alt=""/>
        </Carousel>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
