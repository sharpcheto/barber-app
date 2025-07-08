"use client"

import Link from "next/link";
import { useRef,useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import storageService from "@/services/storage-service";


function Hero() {
	const textPerfectRef = useRef(null)
	const textExRef = useRef(null)
	useEffect(() => {
    textPerfectRef.current ? new SplitType(textPerfectRef.current) : null;
    textExRef.current ? new SplitType(textExRef.current) : null;
    const PerfectChars = document.querySelectorAll("h1 .char");
    const ExChars = document.querySelectorAll("h2 .char");

	
    for (let i = 0; i < PerfectChars.length; i++) {
      PerfectChars[i].classList.add("translate-y-[200%]");
    }

    for (let i = 0; i < ExChars.length; i++) {
      ExChars[i].classList.add("translate-y-[200%]");
    }

    gsap.to(PerfectChars, {
      y: 0,
      stagger: 0.05,
      duration: 0.6,
      opacity: 1,
      delay: 0,
    });
    
	gsap.to(ExChars, {
      y: 0,
      stagger: 0.05,
      duration: 0.6,
      opacity: 1,
      delay: 0.5,
    });

  }, []);
		return (
      <section className="relative grid grid-cols-1 lg:grid-cols-2 w-screen min-h-screen">
        <div className="w-full z-20 bg-white text-black p-4 sm:p-6 lg:p-6 grid place-content-center place-items-start order-2 lg:order-1 relative overflow-visible">
          <span className="lg:translate-x-[20%] -translate-y-0 w-full lg:w-[120%] relative z-30">
            <p className="font-cabinet text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-5xl font-bold mb-2 sm:mb-4 xl:mb-0 2xl:mb-4 text-bordo">
              Your ultimate barber shop
            </p>
            <h1 className="font-cabinet text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-bold mb-4 lg:mb-4 2xl:mb-6 leading-tight lg:leading-none relative z-30">
              Your Pursuit of{" "}
              <span
                ref={textPerfectRef}
                className="translate-y-1 lg:translate-y-4 2xl:translate-y-6 overflow-hidden text-bordo inline-block rounded-xl backdrop-blur-xl backdrop-filter bg-white/20 border border-bordo/20 px-2 py-1"
              >
                Perfection
              </span>{" "}
              Our Work of{" "}
              <span
                ref={textExRef}
                className="overflow-hidden translate-y-1 lg:translate-y-5 2xl:translate-y-8 text-bordo inline-block mb-1 rounded-xl backdrop-blur-xl backdrop-filter bg-white/20 border border-bordo/20 px-2 py-1"
              >
                Excellence
              </span>
            </h1>
            <p className="font-cabinet text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-3xl w-full lg:w-[50%] font-semibold mb-6 lg:mb-0">
              Experience premium grooming services tailored to your
              individuality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Link
                href={storageService.retrieveAccessToken() ? "/book" : "/login"}
              >
                <button className="w-full sm:w-auto lg:scale-[80%] 2xl:scale-100 bg-bordo transition-all rounded-md font-bold lg:-ml-3 lg:mt-4 2xl:mt-10 px-8 lg:px-10 py-3 lg:py-2 text-white font-cabinet text-lg lg:text-xl hover:bg-bordo/90">
                  Book Now
                </button>
              </Link>
              <Link href={`/#schedule`}>
                <button className="w-full sm:w-auto lg:scale-[80%] 2xl:scale-100 bg-transparent border-2 border-bordo text-bordo rounded-md font-bold lg:-ml-3 2xl:ml-5 lg:mt-4 2xl:mt-10 px-8 lg:px-10 py-3 lg:py-2 font-cabinet text-lg lg:text-xl">
                  See schedule
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 lg:-ml-7 2xl:ml-5 mt-6 lg:mt-4 2xl:mt-10 w-full lg:w-[50%] lg:scale-[80%] 2xl:scale-100">
              <div className="flex flex-col relative">
                <span className="w-1 h-full bg-bordo right-4 lg:right-8 2xl:right-14 absolute"></span>
                <p className="font-cabinet text-2xl lg:text-3xl font-bold text-black">
                  <span className="text-bordo text-xl lg:text-2xl 2xl:text-4xl">+</span>{" "}
                  4.9
                </p>
                <p className="font-cabinet text-sm lg:text-xl font-semibold">Rating</p>
              </div>
              <div className="flex flex-col relative">
                <span className="w-1 h-full bg-bordo right-4 lg:right-6 2xl:right-14 absolute"></span>
                <p className="font-cabinet text-2xl lg:text-3xl font-bold text-black">
                  <span className="text-bordo text-xl lg:text-2xl 2xl:text-4xl">+</span>
                  100
                </p>
                <p className="font-cabinet text-sm lg:text-xl font-semibold">Customers</p>
              </div>
              <div className="flex flex-col relative">
                <p className="font-cabinet text-2xl lg:text-3xl font-bold text-black">
                  <span className="text-bordo text-xl lg:text-2xl 2xl:text-4xl">+</span>5
                </p>
                <p className="font-cabinet text-sm lg:text-xl font-semibold">Years</p>
              </div>
            </div>
          </span>
        </div>
        <div className="w-full z-10 bg-[#FAF5F1] order-1 lg:order-2 min-h-[50vh] lg:min-h-full">
          <div className="grid grid-cols-1 place-content-center place-items-center relative h-full w-full">
            <img
              src="cut.png"
              className="w-[60%] sm:w-[50%] lg:w-[50%] rounded-xl rotate-[-24deg] absolute h-[60%] lg:h-[70%]"
              alt="image"
            />
            <img
              src="cut.png"
              className="w-[60%] sm:w-[50%] lg:w-[50%] rounded-xl -rotate-12  absolute h-[60%] lg:h-[70%]"
              alt="image"
            />
            <img
              src="cut.png"
              className="w-[60%] sm:w-[50%] lg:w-[50%] rounded-xl rotate-0 absolute h-[60%] lg:h-[70%]"
              alt="image"
            />
          </div>
        </div>
      </section>
    );
}

export default Hero