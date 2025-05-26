import React from "react";
import NavBar from "./NavBar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { FiCoffee } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer/>
    </>
  );
}

export default HomePage;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[450px]"
        style={{
          backgroundImage: "url(/coffe.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Aroma Sriwijaya</h1>
            <p className="mb-5 text-2xl font-semibold">
              Premium Indonesian Coffee Beans for Global Markets
            </p>
            <button className="btn bg-amber-800 border-amber-800 text-white shadow-none">
              View Coffee Catalog <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Section2() {
  return (
    <>
      <div className="hero bg-[#fefbea] min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="\coffee-beans.jpg"
            className="w-xl rounded-lg shadow-2xl"
          />
          <div>
            <p className="bg-amber-100 text-amber-800 w-max p-1.5 rounded-lg text-sm font-medium">
              Direct from Indonesia
            </p>
            <h1 className="text-5xl font-bold text-amber-800">
              Exceptional Coffee Beans from the Heart of Indonesia
            </h1>
            <p className="py-6">
              Aroma Sriwijaya works directly with local farmers across Indonesia
              to source the finest Arabica and Robusta coffee beans. Our
              commitment to quality and sustainability ensures that every bean
              we export meets the highest standards.
            </p>
            <button className="btn btn-primary bg-amber-800 border-amber-800">
              Learn About Our Process
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Section3() {
  return (
    <>
      <div className="hero bg-white min-h-screen ">
        <div className="hero-content flex-col">
          <div className="text-center flex justify-center items-center flex-col w-2xl">
            <p className="bg-amber-100 text-amber-800 w-max p-1.5 rounded-lg text-sm font-medium text-center">
              Why Choose Us
            </p>
            <h1 className="font-bold text-4xl">Our Commitment to Excellence</h1>
            <h1 className="text-xl">
              Discover why coffee businesses around the world trust Aroma
              Sriwijaya for their premium Indonesian coffee needs.
            </h1>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="w-72 h-56 bg-white rounded-lg m-4 p-4 border-amber-100 border-2 flex flex-col gap-2">
              <RiGlobalLine className="text-5xl text-amber-800" />
              <h1 className="font-semibold text-xl">Global Reach</h1>
              <h1>
                We export to roasteries and wholesalers worldwide, with
                efficient logistics and reliable delivery.
              </h1>
            </div>
            <div className="w-72 h-56 bg-white rounded-lg m-4 p-4 border-amber-100 border-2 flex flex-col gap-2">
              <FiCoffee className="text-5xl text-amber-800" />
              <h1 className="font-semibold text-xl">Global Reach</h1>
              <h1>
                We export to roasteries and wholesalers worldwide, with
                efficient logistics and reliable delivery.
              </h1>
            </div>
            <div className="w-72 h-56 bg-white rounded-lg m-4 p-4 border-amber-100 border-2 flex flex-col gap-2">
              <LuLeaf className="text-5xl text-amber-800" />
              <h1 className="font-semibold text-xl">Global Reach</h1>
              <h1>
                We export to roasteries and wholesalers worldwide, with
                efficient logistics and reliable delivery.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Section4() {
  return (
    <>
      <div className="hero bg-amber-800 min-h-screen ">
        <div className="hero-content flex-col">
          <div className="text-center flex justify-center items-center flex-col w-2xl">
            <h1 className="font-bold text-4xl text-white">
              Featured Coffee Selections
            </h1>
            <h1 className="text-xl text-amber-100">
              Explore our premium coffee varieties from different regions of
              Indonesia.
            </h1>
          </div>

          {/* card */}
          <div className="flex gap-3">
            <div className="card bg-amber-700 w-96 shadow-sm border-1 border-amber-600">
              <figure className="bg-white">
                <img
                  src="\product.jpeg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-left">
                <h1 className="card-title text-white text-2xl ">
                  Sumatra Mandheling
                </h1>
                <p className="text-amber-200 text-md">Aceh, North Sumatra</p>
                <p className="text-amber-100 text-md">
                  Bold, earthy, and full-bodied with notes of dark chocolate,
                  cedar, and a subtle spice finish.
                </p>
                <div className="card-actions flex justify-center items-center">
                  <button className="btn w-[340px]  ">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="card bg-amber-700 w-96 shadow-sm border-1 border-amber-600">
              <figure className="bg-white">
                <img
                  src="\product2.jpeg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-left">
                <h1 className="card-title text-white text-2xl ">
                  Toraja Kalosi
                </h1>
                <p className="text-amber-200 text-md">South Sulawesi</p>
                <p className="text-amber-100 text-md">
                  Complex and well-balanced with notes of dark chocolate,
                  spices, and a clean, syrupy body.
                </p>
                <div className="card-actions flex justify-center items-center">
                  <button className="btn w-[340px]  ">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="card bg-amber-700 w-96 shadow-sm border-1 border-amber-600">
              <figure className="bg-white">
                <img
                  src="\product3.jpeg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-left">
                <h1 className="card-title text-white text-2xl ">
                  Java Robusta
                </h1>
                <p className="text-amber-200 text-md">East Java</p>
                <p className="text-amber-100 text-md">
                  Strong and bold with woody notes, a hint of dark chocolate,
                  and a smooth, lingering finish.
                </p>
                <div className="card-actions flex justify-center items-center">
                  <button className="btn w-[340px]  ">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
