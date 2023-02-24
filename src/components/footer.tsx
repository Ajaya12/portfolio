import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

import copyright from "../images/footer/copyright.svg";
import allbrainyLogo from "../images/svg/allbrainy-logo.svg";

const Footer: React.FC<PageProps> = () => (
  <div className="bg-footer-color text-center p-12 text-text-color-600 relative">
    <div>
      <div className="flex justify-center items-center gap-1 mb-2.5">
        <img src={allbrainyLogo} alt="all brainy logo" />
        <h2 className="text-2xl font-semibold text-text-color-500">
          All<span className="text-blue-500">Brainy</span>
        </h2>
      </div>
      <p className="mb-14">8 The Green STE R, Dover, Delaware, USA, 19901</p>
      <div className="md:flex md:gap-6 justify-center mb-12 text-text-color-900">
        <div className="flex justify-center gap-6 mb-6 md:mb-0">
          <p>Home</p>
          <p>Products</p>
          <p>Resources</p>
        </div>
        <div className="sm:flex sm:gap-6 justify-center">
          <div className="flex gap-6 justify-center mb-6 sm:mb-0">
            <p>About us</p>
            <p>Solutions</p>
            <p>Pricing</p>
          </div>
        </div>
      </div>

      <p className="text-xs">© Copyright 2023 - Allbrainy</p>
    </div>
  </div>
);

export default Footer;
