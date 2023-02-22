import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

import copyright from "../images/footer/copyright.svg";

const Footer: React.FC<PageProps> = () => (
  <div className="bg-footer-color text-center p-6 lg:p-24 lg:pb-6 lg:pt-44 text-white relative">
    <div className="flex justify-center mb-10 -mt-48">
      <div className="p-10 border bg-white rounded sm:w-1/2">
        <h2 className="text-3xl text-primary-text-color font-medium mb-4">
          Subscribe to our newsletter!
        </h2>
        <p className="text-secondary-text-color mb-10">
          Sign up for our newsletter and stay in the loop on all the latest
          updates and exclusive content.
        </p>
        <label className="relative flex justify-center">
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-4 pl-4 pr-8 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm 2xl:w-2/4 xl:w-3/4 w-full"
            placeholder="Your Email Address"
            type="text"
            name="email"
          />
          <button className="btn-primary absolute right-[26%]">
            Subscribe
          </button>
        </label>
      </div>
    </div>
    <div>
      <h2 className=" mb-6 text-xl font-medium">POLO THEMES</h2>
      <div className="md:flex md:gap-6 justify-center mb-12">
        <div className="flex justify-center gap-6 mb-6 md:mb-0">
          <p>Terms and Conditions</p>
          <p>Support</p>
        </div>
        <div className="sm:flex sm:gap-6 justify-center">
          <div className="flex gap-6 justify-center mb-6 sm:mb-0">
            <p>Privacy Policy</p>
            <p>Licensing</p>
          </div>
          <div className="flex justify-center gap-6">
            <p>Help Center</p>
            <p>About</p>
          </div>
        </div>
      </div>
      <span className="flex justify-center item-center gap-2">
        <img src={copyright} />
        <p className="text-white">2023 copyright All right Reserved</p>
      </span>
    </div>
  </div>
);

export default Footer;
