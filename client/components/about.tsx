function About() {
  return (
		<section id="about" className="w-screen h-auto relative mt-32 xl:-mb-20 2xl:mb-10">
			<div className="absolute grid grid-cols-2 w-full h-full">
				<div className="bg-[#FAF5F1]"></div>
				<div className="bg-white relative flex justify-end items-start"></div>
			</div>
			<div className="w-full h-full grid space-x-0 grid-cols-2">
				<img className="ml-20 z-10" src="about.png" alt="" />
				<h1 className="text-bordo z-20 font-cabinet mt-20 font-bold text-left xl:text-7xl 2xl:text-9xl">
					About Barbers <br />
					Bulgaria
				</h1>
			</div>
			<div className="w-full relative h-auto grid mt-80 space-x-0 grid-cols-2">
				<p className="absolute -top-64 left-60 text-bordo z-20 font-cabinet xl:text-xl 2xl:text-2xl  xl:-translate-x-20 font-bold w-[30%]">Our story at Barbers Bulgaria began with a passion for male individuality and the belief that appearance and self-confidence are interconnected. We created this club with the aim of providing not just services, but a complete experience – from haircuts and shaves to care for the face, body, and nails.</p>
				<div className="relative">
					<img className="ml-20 z-10 w-[80%]" src="about2.png" alt="" />
				</div>
				<p className="text-bordo z-20 font-cabinet mt-20 xl:translate-x-10 xl:-translate-y-12 2xl:translate-x-32 font-bold text-left xl:text-xl 2xl:text-3xl w-[70%]">
					Our atmosphere is exceptionally individual, and each of our services
					is specially tailored to a male audience. At Barbers Bulgaria, we
					believe that appearance is a key element in highlighting a man's style
					and self-confidence. That’s why we offer a space where you can enjoy
					treatments enriched with modern interiors and favorite drinks. We are
					here to emphasize your individuality and help you radiate class and
					confidence.
				</p>
			</div>
		</section>
	); 
}

export default About