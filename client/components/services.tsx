"use client";
import storageService from "@/services/storage-service";
import Link from "next/link";
import { useState } from "react";

function Services() {
	const [isOpen, setIsOpen] = useState(false);

	const services = [
		{
			title: "Men's haircut and washing",
			duration: "60 min",
			description:
				"Haircut, washing with energizing shampoo and conditioner, application of styling products.",
			price: "45 BGN",
		},
		{
			title: "Men's haircut and short beard styling",
			duration: "60 min",
			description:
				"Haircut, styling of a short beard, washing with energizing shampoo and conditioner, application of moisturizing products.",
			price: "65 BGN",
		},
		{
			title: "Men's haircut and long beard styling",
			duration: "60 min",
			description:
				"Haircut, styling of a long beard, washing with energizing shampoo and conditioner, application of moisturizing products.",
			price: "70 BGN",
		},
		{
			title: "Men's haircut and royal shaving",
			duration: "60 min",
			description:
				"Haircut, washing with energizing shampoo and conditioner, wet shaving with professional products.",
			price: "80 BGN",
		},
		{
			title: "Buzz cut",
			duration: "30 min",
			description: "Clippers with a single guard.",
			price: "35 BGN",
		},
	];

	return (
		<section id="services" className="w-screen h-auto pb-10 sm:pb-20 bg-[#FAF5F1] px-4 sm:px-6 lg:px-0">
			<div className="w-full relative h-auto flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start pt-6 sm:pt-10">
				<h1 className="z-20 font-cabinet relative font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl text-center lg:text-left lg:ml-20 mt-10 lg:mt-20 text-bordo leading-tight">
					Men's haircut <br /> and beard <br />
					styling
				</h1>
				<img
					className="z-10 w-[60%] sm:w-[50%] md:w-[40%] lg:w-auto lg:scale-[70%] xl:scale-[70%] mt-8 lg:mt-0 lg:absolute lg:-right-32 2xl:right-20"
					src="head.png"
					alt=""
				/>
			</div>
			<span className="w-screen h-auto flex justify-center mt-20 sm:mt-32 lg:mt-44 2xl:mt-48 px-4 sm:px-6 lg:px-0">
				<p className="z-20 font-bold font-cabinet text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-bordo w-full sm:w-[80%] md:w-[70%] lg:w-[40%]">
					Looking for the perfect service for professional beard styling and
					men's haircut in Sofia? Welcome to BARBERS BULGARIA – we are a center
					for comprehensive men's care with a team of proven professionals who
					will take care of your impeccable look.
				</p>
			</span>
			<span className="w-screen h-auto flex justify-center mt-12 sm:mt-20 px-4 sm:px-6 lg:px-0">
				<details
					className={`relative w-full max-w-[650px] mx-auto`}
					onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
				>
					<summary className="list-none select-none text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl w-full font-cabinet font-bold cursor-pointer text-[#FAF5F1] py-3 sm:py-4 lg:py-2 2xl:py-5 px-3 bg-bordo flex items-center justify-center">
						Prices for the services
						<span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-1 sm:mt-2 lg:mt-3 ml-3 sm:ml-5">+</span>
					</summary>
					<div className="mt-4 text-left">
						{services.map((service, index) => (
							<div
								key={index}
								className="transition-all duration-150 border-b border-bordo pb-4 mb-4 last:border-none last:mb-0 opacity-100"
							>
								<h2 className="font-cabinet font-bold text-lg sm:text-xl md:text-2xl text-gray-800">
									{service.title}
								</h2>
								<p className="font-cabinet text-base sm:text-lg text-gray-600">
									<strong>Duration:</strong> {service.duration}
								</p>
								<p className="font-cabinet text-base sm:text-lg text-gray-600">
									<strong>Description:</strong> {service.description}
								</p>
								<p className="font-cabinet text-base sm:text-lg text-gray-600">
									<strong>Price:</strong> {service.price}
								</p>
							</div>
						))}
					</div>
				</details>
			</span>

			<span className="w-screen h-auto flex justify-center mt-5 px-4 sm:px-6 lg:px-0">
				<div className="list-none w-full max-w-[650px] mx-auto lg:w-[650px] xl:w-[650px] font-cabinet font-bold flex flex-col sm:flex-row justify-between text-[#FAF5F1] bg-bordo items-center p-4 sm:p-6 lg:pl-10 lg:pr-10 rounded-lg lg:rounded-none">
					<p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-center sm:text-left mb-4 sm:mb-0">Make reservation right now</p>
					<Link
						href={storageService.retrieveAccessToken() ? "/book" : "/login"}
					>
						<button className="px-6 sm:px-7 py-3 sm:py-5 bg-[#FAF5F1] rounded-full text-bordo text-base sm:text-lg lg:text-lg whitespace-nowrap cursor-pointer hover:bg-gray-100 transition-colors">
							Book now
						</button>
					</Link>
				</div>
			</span>
		</section>
	);
}

export default Services;
