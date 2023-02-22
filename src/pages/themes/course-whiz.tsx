import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Header from "../../components/header";
import Card from "../../components/others/card";
import Footer from "../../components/footer";

import user from "../../images/svg/user.svg";
import downArrowIcon from "../../images/svg/chevron-down.svg";
import bootstrapIcon from "../../images/svg/bootstrap.svg";
import updatedIcon from "../../images/svg/updated.svg";
import versionIcon from "../../images/svg/version.svg";
import cartIcon from "../../images/svg/cart.svg";
import previewIcon from "../../images/svg/preview.svg";

import cardImage from "../../images/home/cardimage.png";
import cart from "../../images/home/cart.svg";

import bookingOne from "../../images/detail-page/booking-1.jpg";
import bookingTwo from "../../images/detail-page/booking-2.jpg";
import bookingThree from "../../images/detail-page/booking-3.jpg";
import bookingFour from "../../images/detail-page/booking-4.jpg";
import bookingFive from "../../images/detail-page/booking-5.jpg";
import bookingSix from "../../images/detail-page/booking-6.jpg";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className="container mx-auto relative">
        <div className="mb-8">
          <Header />
        </div>

        <div className="mb-10">
          <div className="mb-8">
            <span className="flex gap-2 mb-2">
              <img src={user} alt="user" />
              <p className="text-secondary-text-color">Theresa Webb</p>
            </span>

            <h1 className="text-2xl font-semibold text-primary-text-color mb-2">
              Booking – Multipurpose Booking and Directory Theme
            </h1>
            <p className="text-secondary-text-color">Storefront</p>
          </div>

          <div className="md:flex gap-6">
            <div className="md:w-3/4 mb-10 md:mb-0">
              <img
                src={bookingOne}
                alt="booking1"
                className="rounded mb-8 shadow-lg"
              />
              <div className="flex overflow-auto gap-4">
                <img
                  src={bookingTwo}
                  alt="booking2"
                  className="rounded border w-2/4 h-2/4"
                />
                <img
                  src={bookingThree}
                  alt="booking3"
                  className="rounded border w-2/4 h-2/4"
                />
                <img
                  src={bookingFour}
                  alt="booking4"
                  className="rounded border w-2/4 h-2/4"
                />
                <img
                  src={bookingFive}
                  alt="booking5"
                  className="rounded border w-2/4 h-2/4"
                />
                <img
                  src={bookingSix}
                  alt="booking6"
                  className="rounded border w-1/4 h-1/4"
                />
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="p-2 border rounded mb-8">
                <div className="flex border-b mb-3.5">
                  <p className="text-secondary-text-color font-medium px-2 py-4 w-6/12">
                    Overview
                  </p>
                  <p className="text-secondary-text-color font-medium px-2 py-4 w-6/12">
                    Buy license
                  </p>
                </div>
                <div className="px-4 mb-3.5">
                  <p className="text-primary-text-color mb-3.5">
                    1 license purchased.
                  </p>
                  <p className="text-primary-text-color">
                    2 months <span className="text-blue-500">support</span>{" "}
                    left.
                  </p>
                </div>

                <div className="flex justify-between p-4 bg-gray-bg border rounded mb-3.5">
                  <p className="text-black">Extend support</p>
                  <span className="flex gap-3">
                    <p className="text-blue-500 font-medium hidden xl:flex">
                      12 months
                    </p>
                    <img src={downArrowIcon} alt="down arrow" />
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-xl font-semibold text-blue-500">$39.00</p>
                  <button className="btn-primary">Extend</button>
                </div>
              </div>

              <div className="mb-8">
                <span className="flex items-center gap-2.5 py-2.5 border-b">
                  <img src={bootstrapIcon} alt="bootstrap icon" />
                  <p className="text-secondary-text-color">
                    Built with the latest Bootstrap 5
                  </p>
                </span>
                <span className="flex items-center gap-2.5 py-2.5 border-b">
                  <img src={versionIcon} alt="bootstrap icon" />
                  <p className="text-secondary-text-color">Version 1.2.0</p>
                </span>
                <span className="flex items-center gap-2.5 py-2.5 border-b">
                  <img src={updatedIcon} alt="bootstrap icon" />
                  <p className="text-secondary-text-color">
                    Updated 2 weeks ago
                  </p>
                </span>
              </div>
              <div className="flex items-center justify-between mb-8">
                <p className="text-blue-500 underline italic">Documentation</p>
                <span className="flex gap-2 items-center">
                  <img src={cartIcon} alt="cart" />
                  <p className="text-xl text-black">
                    200
                    <span className="text-secondary-text-color text-base">
                      sales
                    </span>
                  </p>
                </span>
              </div>

              <div className="flex flex-col 2xl:flex-row gap-4 mb-8">
                <button className="btn-primary-outline">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className="stroke-blue-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_409_144)">
                      <path
                        d="M9.99967 11.6667C10.9201 11.6667 11.6663 10.9205 11.6663 10C11.6663 9.07952 10.9201 8.33333 9.99967 8.33333C9.0792 8.33333 8.33301 9.07952 8.33301 10C8.33301 10.9205 9.0792 11.6667 9.99967 11.6667Z"
                        stroke=""
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.3337 10C16.1112 13.8892 13.3337 15.8333 10.0003 15.8333C6.66699 15.8333 3.88949 13.8892 1.66699 10C3.88949 6.11084 6.66699 4.16667 10.0003 4.16667C13.3337 4.16667 16.1112 6.11084 18.3337 10Z"
                        stroke=""
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_409_144">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="2xl:hidden">Preview</p>
                </button>
                <button className="btn-primary-outline w-full">
                  Add to Cart
                </button>
                <button className="btn-primary w-full">Buy now</button>
              </div>

              <div className="p-4 border rounded">
                <span className="flex mb-6">
                  <p className="w-full text-primary-text-color">Created:</p>
                  <p className="w-full text-black">Jan 2, 2022</p>
                </span>
                <span className="flex mb-6">
                  <p className="w-full text-primary-text-color">
                    Compatible Browsers:
                  </p>
                  <p className="w-full text-black">
                    Firefox, Safari, Opera, Chrome, Edge, Brave
                  </p>
                </span>
                <span className="flex">
                  <p className="w-full text-primary-text-color">
                    High Resolution:
                  </p>
                  <p className="w-full text-black">Yes</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex border-b mb-8">
            <p className="text-secondary-text-color font-medium pr-6 py-4">
              Description
            </p>
            <p className="text-secondary-text-color font-medium px-6 py-4">
              Features
            </p>
            <p className="text-secondary-text-color font-medium px-6 py-4">
              Changelog
            </p>
          </div>
          <div className="md:flex gap-6 text-secondary-text-color">
            <div className="w-full mb-8 md:mb-0">
              <p className="mb-6">
                Booking is a multipurpose theme with stunning designs, a
                complete booking management system, and many outstanding
                features. Crafted for all the websites that offer booking
                services. Mainly we have focused on the below domains,
              </p>
              <ul className="list-disc mb-6 px-6 flex flex-col gap-3">
                <li>
                  Hotel booking – Big hotel listings to mid-sized hotel chains
                  to small hotels, resorts, etc
                </li>
                <li>Flight booking</li>
                <li>Cab booking (Car rental services)</li>
                <li>Tour booking (Tour operator, Travel agency)</li>
                <li>Directory Listing</li>
              </ul>
              <p className="mb-4">
                Each domain features a complete set of pages to allow you to
                build a fully functional website. You can also create any
                website that offers booking, listing, and directory by mixing
                and matching existing layouts.
              </p>
              <p>
                Suitable for Hotel, Hostel, Motel, Chalet, Hotel Chains, Luxury
                Apartment, Private Accommodation, Bed and Breakfast (B&B),
                Booking Online Rooms, Reservation Online System, Resort,
                Vacation Rooms, Rooms Rental, Holiday Structures, Travel
                Apartments, Beach Houses, Vacation Rentals, Cabins, Cottages,
                Cab, Taxi, Flight booking, Tour operator, Travel agency,
                Directly listing, and more.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-4">
                <h4 className="text-primary-text-color text-lg font-medium mb-4">
                  Design
                </h4>
                <p>
                  We have designed this theme with a simple and minimal look yet
                  it provides a powerful user experience. Each page you see has
                  a clear purpose and message that conveys to the user. We have
                  created this design with editability in mind, if you
                  edit/remove any section it won’t affect the overall design.
                  With visual hierarchy, clean typography, and readable color
                  contrast, this theme is perfect peace for your next project.
                </p>
              </div>
              <div>
                <h4 className="text-primary-text-color text-lg font-medium mb-4">
                  Developer friendly theme
                </h4>
                <p className="mb-4">
                  Booking has been built with the same coding practice as
                  Bootstrap core itself so that you can customize and extend our
                  components super easily, just like Bootstrap.
                </p>
                <ul className="list-disc flex flex-col px-6 gap-3">
                  <li>
                    Utility and Component-oriented code architecture for fast,
                    responsive UI development.
                  </li>
                  <li>Fewer third-party plugins dependency.</li>
                  <li>
                    Automated workflow with Gulp automation tool to boost your
                    production.
                  </li>
                  <li>Dynamic color schemes using SASS to save your time.</li>
                  <li>
                    Well-commented code structure so you can easily copy/paste
                    or remove code blocks.
                  </li>
                  <li>
                    Professional and possibly prompt support via the online
                    ticket support system.
                  </li>
                  <li>
                    Detailed documentation for a better understanding of theme
                    setup, components, changing the color scheme, etc.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 lg:mb-20">
          <div className="flex justify-between items-center mb-8">
            <p className="font-medium text-primary-text-color">
              Related Themes
            </p>
            <button className="btn-primary-outline">View all</button>
          </div>
          <div className="sm:flex flex-col lg:flex-row gap-6">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Home | Polo Themes</title>
    <meta
      name="description"
      content="Polothemes sells e-commerce themes (figma, tailwindcss, nextjs), currently nextjs themes only support shopify"
    ></meta>
  </>
);
