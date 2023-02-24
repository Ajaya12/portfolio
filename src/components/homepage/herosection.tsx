import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

import allbrainyLogo from "../../images/svg/allbrainy-logo.svg";
import truemarkLogo from "../../images/svg/truemark-logo.svg";

const HeroSection: React.FC<PageProps> = () => (
  <div>
    <div className="text-center mb-12">
      <div className="flex mb-2.5 justify-center">
        <img src={allbrainyLogo} alt="All brainy logo" />
      </div>
      <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold text-blue-500 mb-2.5">
        AllBrainy
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-text-color-900 mb-2.5">
        Product Development Lab
      </h2>
      <span className="flex justify-center items-center gap-2 mb-8">
        <p className="text-2xl font-bold text-truemark-primary">by</p>
        <img src={truemarkLogo} alt="" />
      </span>
      <div className=" flex justify-center">
        <p className="text-primary-text-color mb-8 w-10/12 md:w-7/12">
          Our mission is to provide intelligent solutions that help businesses
          work smarter, not harder. With Allbrainy, you can streamline your
          processes and achieve better results with less effort.
        </p>
      </div>
      <button className="btn-primary">Our Products</button>
    </div>
  </div>
);

export default HeroSection;
