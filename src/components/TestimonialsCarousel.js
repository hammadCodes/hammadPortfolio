import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// AVATAR IMPORTS
import avatar1 from "../images/avatar/avatar-1.png";
import avatar2 from "../images/avatar/avatar-2.png";
import avatar3 from "../images/avatar/avatar-3.png";
import avatar4 from "../images/avatar/avatar-4.png";

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrow={true}
      infiniteLoop={true}
      showThumbs={false}
      autoPlay={true}
      interval={6000}
      swipeable={false}

    >
      <>
        <img loading="lazy"  src={avatar1} alt="" />
        <div className="myCarousel">
          <h3>Patrice L.</h3>
          <p>
            Hammad was a true pleasure to work with in every sense of the word.
            He is not only a skilled Shopify expert but also a collaborator. He
            was always available, a clear communicator, and responsive to any
            questions/comments I had throughout this project. Not only do I
            highly recommend Hammad for your Shopify project, I look forward to
            working with him again in the future."
          </p>
        </div>
      </>

      <>
        <img loading="lazy"  src={avatar4} alt="" />
        <div className="myCarousel">
          <h3>Rashe S.</h3>
          <p>
            Highly responsive contractor. Willing to do whatever it took to
            ensure product met my expectations. Highly recommend
          </p>
        </div>
      </>


      <>
        <img loading="lazy"  src={avatar2} alt="" />
        <div className="myCarousel">
          <h3>Monica C.</h3>
          <p>
            This is my second visit with him, and will not be my last. This guy
            is efficient, fast, asks questions to make sure he understands and
            gets it done! For all my shopify store owners, start here with him!
          </p>
        </div>
      </>

      <>
        <img loading="lazy"  src={avatar3} alt="" />
        <div className="myCarousel">
          <h3>Asad A.</h3>
          <p>
            Engr. Hammad is very professional and talented. He did a great job
            in very short time and I'll surely use his services again.
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
