import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

import cardImage from "../../images/home/cardimage.png";
import cart from "../../images/home/cart.svg";

const Card: React.FC<PageProps> = () => (
  <div className="lg:w-1/3 mb-8 lg:mb-0 border rounded border-strokes">
    <img src={cardImage} className="rounded-t " />
    <div className="px-4 py-6">
      <p className="text-secondary-text-color text-sm mb-2">Technologies:</p>
      <div className="flex gap-2 mb-4">
        <div className="bg-purple-tag px-2 py-1 rounded">
          <p className="text-sm text-black">Spree</p>
        </div>
        <div className="bg-blue-tag px-2 py-1 rounded">
          <p className="text-sm text-black">Tailwindcss</p>
        </div>
        <div className="bg-green-tag px-2 py-1 rounded">
          <p className="text-sm text-black">Shopify</p>
        </div>
        <div className="bg-red-tag px-2 py-1 rounded">
          <p className="text-sm text-black">Nextjs</p>
        </div>
      </div>
      <p className="text-lg text-primary-text-color font-semibold mb-1">
        Booking – Multipurpose Booking and...
      </p>
      <p className="text-secondary-text-color text-sm mb-1">
        by <span className="font-medium">Brooklyn Simmons</span>
      </p>

      <p className="text-secondary-text-color mb-2">Storefront</p>

      <div className="flex items-center justify-between">
        <p className="text-blue-500 font-semibold text-xl">$32.00</p>
        <div className="flex gap-2">
          <button className="btn-primary-outline">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="stroke-blue-500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_308_10579)">
                <path
                  d="M6 21C7.10457 21 8 20.1046 8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21Z"
                  stroke=""
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21Z"
                  stroke=""
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 17H6V3H4"
                  stroke=""
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 5L20 6L19 13H6"
                  stroke=""
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_308_10579">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button className="btn-primary">Live Preview</button>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
