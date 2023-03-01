import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

import contactLeftBg from "../../images/svg/contact-left-bg.svg";
import contactRightBg from "../../images/svg/contact-right-bg.svg";

const CTA: React.FC<PageProps> = () => (
  <div className="flex justify-center pt-24 pb-16 px-5 sm:px-20 lg:px-28 relative mb-24">
    <div className=" text-center">
      <h4 className="text-text-color-900 font-semibold text-xl mb-6">
        We would love to hear from you!
      </h4>
      <p className="text-text-color-600 mb-10">
        Contact us to learn more about our products or to request a demo.
      </p>
      <button className="btn-primary">
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwrwzFjfTVPkqqMMPHMxcLrMTBRTLGFTMNzLThwkfftMHHswzXFvxXKCPxhXmdNHhwBTTh"
          target={"_blank"}
        >
          Get started
        </a>
      </button>
    </div>
    <img
      src={contactLeftBg}
      alt="contact-left-bg"
      className="absolute top-0 left-0 -z-10 w-16 sm:w-20 lg:w-28"
    />
    <img
      src={contactRightBg}
      alt="contact-right-bg"
      className="absolute bottom-0 right-0 -z-10 w-16 sm:w-20 lg:w-28"
    />
  </div>
);

export default CTA;
