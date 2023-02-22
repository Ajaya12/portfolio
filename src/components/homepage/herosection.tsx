import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

import image1 from "../../images/home/image01.jpg";
import image2 from "../../images/home/image02.jpg";
import image3 from "../../images/home/image03.jpg";
import image4 from "../../images/home/image04.jpg";
import image5 from "../../images/home/image05.jpg";

const HeroSection: React.FC<PageProps> = () => (
  <div>
    <div className="text-center mb-12">
      <h1 className="text-2xl lg:text-4xl md:text-3xl font-medium text-black mb-6">
        Discover the <span className="text-blue-500">Best Themes</span> for Your
        Website
      </h1>
      <div className=" flex justify-center">
        <p className="text-primary-text-color w-10/12 md:w-7/12">
          Find the perfect theme for your online presence with our curated
          collection of the most stunning and functional themes available.
        </p>
      </div>
    </div>
    <div className=" align-bottom relative flex justify-center">
      <div className="absolute bottom-0 w-1/4 z-20 hero-image-left">
        <img src={image4} className="z-10 " />
      </div>
      <div className="absolute bottom-0 left-0 w-1/4">
        <img src={image5} className="z-10" />
      </div>
      <div className="w-1/3 z-30">
        <img src={image1} />
      </div>
      <div className="absolute bottom-0 hero-image-right w-1/4 z-20">
        <img src={image2} />
      </div>
      <div className="absolute right-0 bottom-0 w-1/4 z-10">
        <img src={image3} />
      </div>
    </div>
  </div>
);

export default HeroSection;
