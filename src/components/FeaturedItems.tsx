import React from "react";
import FeaturedCard from "./ComponentAsset/FeaturedCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Animated } from "react-animated-css";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { motion, useScroll, Variants } from "framer-motion";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export default function FeaturedItems() {
  const { scrollYProgress } = useScroll();
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <section id="featured" className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          {/* <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Our featured items
            </h2> */}
          {/* <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
          > */}
          <motion.div
            // className="card"
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              x: 1 % 2 === 0 ? 50 : -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0, // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Our featured items
            </h2>
          </motion.div>
          {/* </motion.div> */}
          <motion.div
            // className="card"
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              x: 2 % 2 === 0 ? 50 : -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0, // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
          >
            <p className="mt-4 text-base font-normal leading-7 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              faucibus massa dignissim tempus.
            </p>
          </motion.div>
        </div>

        {/* <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4"> */}
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          // responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          className="w-full gap-10 mt-4"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-70-px"
        >
          <FeaturedCard
            url={
              "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-1.png"
            }
          />
          <FeaturedCard
            url={
              "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-2.png"
            }
          />
          <FeaturedCard
            url={
              "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-3.png"
            }
          />
          <FeaturedCard
            url={
              "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-4.png"
            }
          />
          <FeaturedCard
            url={
              "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-3.png"
            }
          />
        </Carousel>
        {/* </div> */}
      </div>
    </section>
  );
}
