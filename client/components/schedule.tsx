function Schedule() {
    const scheduler = {
        Monday: [
          {
            startTime: "9:00 AM",
            endTime: "10:00 AM",
          },
        ],
        Tuesday: [
          {
            startTime: "10:00 AM",
            endTime: "11:00 AM",
          },
        ],
        Wednesday: [
          {
            startTime: "11:00 AM",
            endTime: "12:00 PM",
          },
        ],
        Thursday: [
          {
            startTime: "12:00 PM",
            endTime: "1:00 PM",
          },
        ],
        Friday: [
          {
            startTime: "1:00 PM",
            endTime: "2:00 PM",
          },
        ],
        Saturday: [
          {
            startTime: "2:00 PM",
            endTime: "3:00 PM",
          },
        ],
        Sunday: [
          {
            startTime: "3:00 PM",
            endTime: "4:00 PM",
          },
        ],
      };
      
  return (
		<section id="schedule" className="w-screen min-h-screen sm:h-screen bg-[#FAF5F1] px-4 sm:px-6 lg:px-0">
			<span className="w-full h-auto flex justify-center items-center pt-6 sm:pt-10">
				<h1 className="font-cabinet relative font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl text-bordo text-center">
					Our Schedule
				</h1>
			</span>
			<div className="w-full h-full flex justify-center items-start relative px-4 sm:px-6 lg:px-0">
				<span className="hidden lg:block h-[100px] w-1 rounded-2xl mt-10 2xl:mt-20 bg-bordo left-[17%] 2xl:left-[15%] absolute"></span>
        <div className="w-full sm:w-3/4 lg:w-3/4 xl:w-[90%] 2xl:w-3/4 mt-8 sm:mt-12 lg:-mt-[5.5%] 2xl:mt-10 lg:scale-[70%] 2xl:scale-90">
          {Object.entries(scheduler).map(([day, times], index) => (
            <div
              key={index}
              className="mb-4 sm:mb-6 p-4 bg-white shadow-md rounded-lg flex flex-col items-start hover:translate-x-2 lg:hover:translate-x-10 transition-all"
            >
              <h2 className="text-lg sm:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-bold font-cabinet text-bordo">{day}</h2>
              {times.map((time, idx) => (
                <p key={idx} className="text-gray-600 font-cabinet text-base sm:text-lg">
                  {time.startTime} - {time.endTime}
                </p>
              ))}
            </div>
          ))}
        </div>
			</div>
		</section>
	);
}

export default Schedule