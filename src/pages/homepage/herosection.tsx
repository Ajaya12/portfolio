import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

import allbrainyLogo from "../../images/svg/allbrainy-logo.svg";
import truemarkLogo from "../../images/svg/truemark-logo.svg";
import leftBackground from "../../images/svg/left-background.svg";
import rightBackground from "../../images/svg/right-background.svg";

const HeroSection: React.FC<PageProps> = () => (
  <div className="relative flex items-center justify-center h-screen">
    <div className="mb-12 text-center ">
      <div className="flex mb-2.5 justify-center">
        <img src={allbrainyLogo} alt="All brainy logo" />
      </div>
      <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold text-blue-500 mb-2.5">
        All Brainy
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-text-color-900 mb-2.5">
        Product Development Lab
      </h2>
      <span className="flex items-center justify-center gap-2 mb-8">
        <p className="text-2xl font-bold text-truemark-primary">by</p>
        <img src={truemarkLogo} alt="" />
      </span>
      <div className="flex justify-center ">
        <p className="w-10/12 mb-8 text-primary-text-color md:w-7/12">
          Helping businesses through <br/>e-commerce themes and Micro SAAS
          {/* Our Micro SAAS products aim to ease the business operations within the tools(slack, hubspot, top tracker) you are already using.
          We build business friendly E-Commerce themes for different platforms like Shopify and Spree using latest technolgies(Reactjs, tailwindcss). */}
        </p>
      </div>
      <button className="btn-primary">
        <a href="#ourproduct">Our Products</a>
      </button>
    </div>
    <img
      src={leftBackground}
      alt="left background"
      className="absolute top-0 hidden -left-32 lg:block "
    />
    <img
      src={rightBackground}
      alt="right background"
      className="absolute bottom-0 hidden lg:block -right-28 -z-10"
    />
    <div className="blue-blur"></div>
  </div>
);

export default HeroSection;
