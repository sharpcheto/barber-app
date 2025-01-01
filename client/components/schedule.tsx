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
		<section id="schedule" className="w-screen h-screen bg-[#FAF5F1]">
			<span className="w-full  h-auto flex justify-center items-center pt-10">
				<h1 className="font-cabinet relative font-bold xl:text-7xl 2xl:text-9xl text-bordo">
					Our Schedule
				</h1>
			</span>
			<div className="w-full h-full flex justify-center items-start xl:relative">
				<span className="h-[100px] w-1 rounded-2xl xl:mt-10 2xl:mt-20 bg-bordo xl:left-[17%] 2xl:left-[15%] xl:absolute"></span>
        <div className="2xl:w-3/4 xl:w-[90%] xl:-mt-[5.5%] 2xl:mt-10 xl:scale-[70%] 2xl:scale-90">
          {Object.entries(scheduler).map(([day, times], index) => (
            <div
              key={index}
              className="mb-6 p-4 bg-white shadow-md rounded-lg flex flex-col items-start hover:translate-x-10 transition-all"
            >
              <h2 className="xl:text-xl 2xl:text-2xl font-bold font-cabinet text-bordo">{day}</h2>
              {times.map((time, idx) => (
                <p key={idx} className="text-gray-600 font-cabinet">
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