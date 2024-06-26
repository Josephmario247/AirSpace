import React from "react";
import { Link } from "react-router-dom";
import {
  estate_frontal,
  estate_home2,
  estate_home5,
  estate_keys,
  estate_sky,
} from "../assets/images";
import { PiAlarm, PiWarehouse } from "react-icons/pi";
import FeatureSlide from "../components/FeatureSlide";

export default function Home() {
  
  return (
    <main className="flex flex-col bg-white p-4">
      <section className="container mx-auto flex flex-col md:flex-row-reverse gap-4 md:gap-8 md:items-center">
        <aside className=" flex-1 relative h-72 min-h-[288px] md:min-h-[500px] w-full rounded-2xl overflow-hidden">
          <img
            src={estate_sky}
            alt=""
            className="absolute h-full w-full top-0 left-0 object-cover"
          />
        </aside>
        <aside className=" flex-1 flex flex-col gap-3 py-5 md:py-10">
          <h2 className="text-slate-800 font-semibold text-2xl sm:text-3xl md:text-5xl leading-snug ">
            AirSpace is on misssion to change the view of Real Estate{" "}
          </h2>
          <p className="text-slate-700 text-base sm:text-lg text-justify leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            odio expedita ullam aliquam molestias, sed esse, perspiciatis ipsum
            ad quia aut. Eveniet esse delectus, excepturi aliquam libero
            accusamus! Distinctio, reprehenderit!
          </p>
          <div className=" flex flex-col xl:flex-row xl:gap-6">
            <div className="bg-white hover:drop-shadow-2xl rounded-md p-4 mt-4 flex item-center gap-4">
              <div className="h-8 md:h-12 w-8 md:w-12 rounded-full grid place-items-center bg-orange-500 flex-shrink-0 text-slate-800 text-2xl md:text-3xl">
                <PiWarehouse />
              </div>
              <div className="flex flex-col">
                <h4 className="text-slate-800 font-semibold text-xl md:text-2xl">
                  Modern Villa
                </h4>
                <p className="text-slate-700 text-xs sm:text-sm text-justify leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium temporibus doloribus nemo aut cum optio.
                </p>
              </div>
            </div>

            <div className="bg-white hover:drop-shadow-2xl rounded-md p-4 mt-4 flex item-center gap-4">
              <div className="h-8 md:h-12 w-8 md:w-12 rounded-full grid place-items-center bg-orange-500 flex-shrink-0 text-slate-800 text-2xl md:text-3xl">
                <PiAlarm />
              </div>
              <div className="flex flex-col">
                <h4 className="text-slate-800 font-semibold text-xl md:text-2xl">
                  Secure Payment
                </h4>
                <p className="text-slate-700 text-xs sm:text-sm text-justify leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium temporibus doloribus nemo aut cum optio.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>
      <section className="relative py-20 md:pt-40 px-4 to-slate-950 from-slate-700 bg-gradient-to-b -mx-4 mt-10">
        <img
          src={estate_home5}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-5 container mx-auto flex flex-col md:flex-row md:justify-between gap-6 py-10 md:pt-20">
          <div className="relative">
            <h3 className="bg-white pr-6 p-2 rounded-md rounded-bl-none text-slate-700 text-lg sm:text-2xl font-semibold capitalize w-max">
              We are here
            </h3>
            <h3 className="bg-white pr-6 p-2 pt-0 rounded-none rounded-br-md text-slate-700 text-lg sm:text-2xl font-semibold capitalize w-max">
              For you
            </h3>
            <div className="bg-white p-2 pt-0 pr-4 rounded-none rounded-br-md rounded-bl-md text-slate-700 text-lg sm:text-2xl font-semibold capitalize w-max flex">
              {Array(4)
                .fill(1)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-4 md:h-6 w-4 md:w-6 rounded-full relative bg-orange-500 grid place-items-center border border-slate-300 -ml-1"
                  ></div>
                ))}
            </div>
          </div>
          <div className="relative max-w-xs">
            <div className="flex gap-4 justify-around text-white pb-4">
              <div className="flex flex-col text-center">
                <h5 className="font-bold text-2xl sm:text-3xl">170+</h5>
                <p className="text-xs sm:text-base">Apartments Available</p>
              </div>
              <div className="flex flex-col text-center">
                <h5 className="font-bold text-2xl sm:text-3xl">73+</h5>
                <p className="text-xs sm:text-base">Condo Erected</p>
              </div>
            </div>
            <div className="grid gap-3 md:gap-5 grid-cols-2 md:grid-cols-3">
              {["Furniture", "Home", "Rent", "100%", "Brand", "Pool"].map(
                (el, i) => (
                  <div
                    key={i}
                    className="bg-slate-600 hover:bg-slate-700 text-white text-center py-1 px-4 rounded-[2rem] p-4 "
                  >
                    {el}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row top-10 gap-8 md:gap-x-20 md:item-center mx-auto container">
        <aside className="flex flex-1 flex-col gap-3 py-5 md:py-10">
          <h2 className="text-orange-400 font-semibold text-lg md:text-xl ">
            Discover Our Services
          </h2>
          <h1 className="text-slate-700 font-semibold text-xl md:text-2xl capitalize">
            what we are providing
          </h1>
          <p className="text-slate-700 text-base sm:text-lg text-justify leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
            laboriosam quibusdam aspernatur quos fugit debitis dolores aperiam
            facilis placeat. Odit!
          </p>
          <p className="text-slate-700 text-base sm:text-lg text-justify leading-relaxed mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem quaerat ea optio odio molestias officia cupiditate
            porro, iure quidem hic itaque facilis facere ut molestiae eveniet?
            Consequuntur dolorem corrupti modi.
          </p>
        </aside>
        <aside className="flex-1 relative h-100 w-100 min-h-[300px] md:min-h-[100px] w-50 md:min-w-[100px] md:m-10 rounded-3xl overflow-hidden">
          <img
            src={estate_home2}
            alt=""
            className="absolute h-full w-full top-0 left-0 object-cover"
          />
        </aside>
      </section>
      <section className="flex flex-col md:flex-row-reverse top-10 gap-8 md:gap-x-20 md:item-center mx-auto mt-3 container">
        <aside className="flex flex-1 flex-col gap-3 py-5 md:py-10">
          <h1 className="text-slate-700 font-semibold text-xl md:text-2xl capitalize">
            the shortest distance between paradise and the place you call home.
            <hr className="border-yellow mt-3"></hr>
          </h1>
          <p className="text-slate-700 text-base sm:text-lg text-justify leading-relaxed mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
            laboriosam quibusdam aspernatur quos fugit debitis dolores aperiam
            facilis placeat. Odit!
          </p>
          <p className="text-slate-700 text-base sm:text-lg text-justify leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem quaerat ea optio odio molestias officia cupiditate
            porro, iure quidem hic itaque facilis facere ut molestiae eveniet?
            Consequuntur dolorem corrupti modi.
          </p>
        </aside>
        <aside className="flex-1 relative h-100 w-100 min-h-[300px] md:min-h-[100px] w-50 md:min-w-[100px] rounded-3xl mt-5 overflow-hidden">
          <img
            src={estate_frontal}
            alt=""
            className="absolute h-full w-full top-0 left-0 object-cover"
          />
        </aside>
      </section>
      <section className="bg-[#f7faff]">
        <section className="container mx-auto flex flex-col gap-6 py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col">
              <h4 className="text-lg md:text-2xl font-semibold text-slate-800 capitalize">
                discover our featured properties
              </h4>
              <p className="text-slate-700 text-base sm:text-lg text-justify leading-relaxed">
                discover best deals for your ideal dream house
              </p>
            </div>
            <Link
              to="/properties"
              className="py-2 px-6 md:px-8 w-max border border-solid md:hover:shad border-slate-700 text-sm md:text-base rounded-full"
            >
              See More
            </Link>
          </div>
          <div className="py-8 w-full">
            <FeatureSlide />
          </div>
        </section>
      </section>
    </main>
  );
}
