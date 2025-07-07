function About() {
  return (
		<section id="about" className="w-screen h-auto relative mt-16 sm:mt-20 lg:mt-32 mb-10 lg:-mb-20 2xl:mb-10 px-4 sm:px-6 lg:px-0">
			<div className="absolute grid grid-cols-1 lg:grid-cols-2 w-full h-full">
				<div className="bg-[#FAF5F1]"></div>
				<div className="bg-white relative flex justify-end items-start"></div>
			</div>
			<div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 lg:space-x-0">
				<div className="flex justify-center lg:justify-start order-2 lg:order-1">
					<img className="w-[80%] sm:w-[70%] lg:w-auto lg:ml-20 z-10" src="about.png" alt="" />
				</div>
				<div className="flex items-center lg:items-start order-1 lg:order-2">
					<h1 className="text-bordo z-20 font-cabinet mt-4 lg:mt-20 font-bold text-center lg:text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-9xl leading-tight">
						About Barbers <br />
						Bulgaria
					</h1>
				</div>
			</div>
			<div className="w-full relative h-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 mt-20 sm:mt-32 lg:mt-80 lg:space-x-0">
				<div className="order-1 lg:order-1">
					<p className="relative lg:absolute lg:-top-64 lg:left-60 text-bordo z-20 font-cabinet text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl lg:-translate-x-20 font-bold w-full lg:w-[30%] text-center lg:text-left px-4 lg:px-0">
						Our story at Barbers Bulgaria began with a passion for male individuality and the belief that appearance and self-confidence are interconnected. We created this club with the aim of providing not just services, but a complete experience – from haircuts and shaves to care for the face, body, and nails.
					</p>
				</div>
				<div className="relative order-2 lg:order-2 flex justify-center lg:justify-start">
					<img className="w-[80%] sm:w-[70%] lg:w-[80%] lg:ml-20 z-10" src="about2.png" alt="" />
				</div>
			</div>
			<div className="w-full mt-12 lg:mt-0 px-4 lg:px-0">
				<p className="text-bordo z-20 font-cabinet lg:mt-20 lg:translate-x-10 lg:-translate-y-12 2xl:translate-x-32 font-bold text-center lg:text-left text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-3xl w-full lg:w-[70%] ml-auto lg:ml-0">
					Our atmosphere is exceptionally individual, and each of our services
					is specially tailored to a male audience. At Barbers Bulgaria, we
					believe that appearance is a key element in highlighting a man's style
					and self-confidence. That's why we offer a space where you can enjoy
					treatments enriched with modern interiors and favorite drinks. We are
					here to emphasize your individuality and help you radiate class and
					confidence.
				</p>
			</div>
		</section>
	); 
}

export default About