import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      {/* <div
        className="w-full h-20 -mt-20 bg-gradient-to-t from-gray-100 
      to-transparent bottom-0 z-20"
      /> */}
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        className=""
      >
        <div>
          <img src="https://links.papareact.com/gi1" loading="lazy" />
        </div>
        <div>
          <img src="https://links.papareact.com/6ff" loading="lazy" />
        </div>
        <div>
          <img src="https://links.papareact.com/7ma" loading="lazy" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
