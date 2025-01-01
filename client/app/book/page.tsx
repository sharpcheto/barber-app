"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import userService from "@/services/user-service"
import reservationService from "@/services/reservation-service"
import { UserVM } from "@/webapi/models/user-vm";
import { ReservationIM } from "@/webapi";
function Book() {
	
	const [isDisabled, setIsDisabled] = useState(true);
	const [selectedServiceIndex, setSelectedServiceIndex] = useState<number>(-1);
	const [isServiceSelected, setIsServiceSelected] = useState("");
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState("");
	const [currentUser, setCurrentUser] = useState<UserVM | null>(null);
	useEffect( () => {
	  const fetchUser = async () => {
		try {
		  const response: any = await userService.makeUserCurrentGetRequest();
		  if (JSON.stringify(currentUser) !== JSON.stringify(response.data)) {
			setCurrentUser(response.data);
		  }
		  console.log(response.data);
		} catch (error) {
		  console.error("Error fetching current user:", error);
		}
	  };
	  fetchUser()
	}, [currentUser]);

	useEffect( () => {
		if (!isServiceSelected) return;
		const fetchDateAndTime = async () => {
		  try {
			const response: any = await reservationService.makeReservationIdGetRequest();
			const reservations = response.data;
			const currentDate = selectedDate.toISOString().split("T")[0];
			const currentTime = selectedTime.split(":")[0];
			const reservation = reservations.find(
			  (reservation:any) =>
				reservation.date === currentDate && reservation.time === parseInt(currentTime)
			);
			if (reservation) {
			  setIsDisabled(true);
			} else {
			  setIsDisabled(false);
			}

		  } catch (error) {
			console.error("Error fetching reservations:", error);
		  }
		};
		fetchDateAndTime()
	  },[selectedDate, selectedTime,isServiceSelected])


	const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedDate(new Date(e.target.value));
	};

	const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedTime(e.target.value);
	};

	const handleBackToService = () => {
		setIsServiceSelected("");
		setIsDisabled(false);
	};

	const handleSubmit = async () => {
		const reservationData:ReservationIM = {
			date: selectedDate.toISOString().split("T")[0],
			time: parseInt(selectedTime.split(":")[0]),
			service: services[selectedServiceIndex].title,
		};
		await reservationService.makeReservationPostRequest(
			reservationData,
		).then(()=> {
			window.location.href = "/";
		})
	};

	const handleToggle = (index: number) => {
		const allCheckboxes: NodeListOf<HTMLInputElement> =
			document.querySelectorAll("input[type='checkbox']");

		allCheckboxes.forEach((checkbox, i) => {
			checkbox.checked = i === index ? !checkbox.checked : false;
		});

		const anyChecked = Array.from(allCheckboxes).some(
			(checkbox) => checkbox.checked,
		);
		setIsDisabled(!anyChecked);

		// Save selected service index
		if (anyChecked) {
			setSelectedServiceIndex(index);
		}
	};

	const services = [
		{
		  title: "Men's haircut and washing",
		  duration: "60 min",
		  description: "Haircut, washing with energizing shampoo and conditioner, application of styling products.",
		  price: "45 BGN"
		},
		{
		  title: "Men's haircut and short beard styling",
		  duration: "60 min",
		  description: "Haircut, styling of a short beard, washing with energizing shampoo and conditioner, application of moisturizing products.",
		  price: "65 BGN"
		},
		{
		  title: "Men's haircut and long beard styling",
		  duration: "60 min",
		  description: "Haircut, styling of a long beard, washing with energizing shampoo and conditioner, application of moisturizing products.",
		  price: "70 BGN"
		},
		{
		  title: "Men's haircut and royal shaving",
		  duration: "60 min",
		  description: "Haircut, washing with energizing shampoo and conditioner, wet shaving with professional products.",
		  price: "80 BGN"
		},
		{
		  title: "Buzz cut",
		  duration: "30 min",
		  description: "Clippers with a single guard.",
		  price: "35 BGN"
		}
	  ];
	  

	return (
		<>
			<Navbar />
			<main className="w-screen relative h-screen grid place-items-center">
				<h1 className="absolute z-20 left-[10%] top-[15%] font-cabinet font-bold text-bordo text-7xl">
					<Link
						className="nav-link relative"
						onClick={handleBackToService}
						href=""
					>
						Services
					</Link>
					<span className="text-black"> \ </span>{" "}
					{isServiceSelected && (
						<>
							<Link className="nav-link relative" href="">
								{isServiceSelected}
							</Link>{" "}
							<span className="text-black"> \ </span>
						</>
					)}
				</h1>
				<section
					className={`${
						isServiceSelected ? `overflow-hidden` : `overflow-auto`
					} w-[80%] relative h-[50%] shadow-xl bg-white border-bordo border-4 rounded-xl`}
				>
					<div
						className={isServiceSelected ? `py-0 px-0 appoint` : `py-5 px-10`}
					>
						{isServiceSelected ? (
							<div className="w-full h-full grid grid-cols-2 place-items-center place-content-center font-cabinet">
								{/* Calendar and Time Picker */}
								<div className="flex justify-center flex-col mt-6 w-full h-full z-50 translate-x-1/4">
									{/* Date Picker on the left */}
									<div className="w-1/2">
										<h3 className="font-semibold text-xl text-bordo">
											Select date
										</h3>
										<input
											type="date"
											value={selectedDate.toISOString().split("T")[0]} // Format date to YYYY-MM-DD
											onChange={handleDateChange}
											min={new Date().toISOString().split("T")[0]} // Ensure the user can't select past dates
											className="mt-2 px-4 py-2 border border-gray-300 text-bordo rounded-lg shadow-sm w-full"
										/>
									</div>

									{/* Time Picker on the right */}
									<div className="w-1/2 mt-5">
										<h3 className="font-semibold text-xl text-bordo">
											Select hour
										</h3>
										<select
											value={selectedTime}
											onChange={handleTimeChange}
											className="mt-2 border border-gray-300 text-bordo rounded-lg shadow-sm w-full px-4 py-2"
										>
											{/* Fixed times */}
											<option value="15:00">15:00</option>
											<option value="16:00">16:00</option>
											<option value="17:00">17:00</option>
										</select>
									</div>
								</div>

								{/* Summary of the selected date and time on the right */}
								<div className="p-4 bg-white h-full flex justify-center items-start flex-col w-full">
									<span className="font-cabinet w-full h-full">
										<h3 className="font-semibold text-xl text-center text-bordo">
											Your appointment
										</h3>
										<div className="border-b mt-5 rounded-t-xl border-bordo relative pb-4 mb-4 hover:bg-[#F8F9FA] transition-all last:border-none last:mb-0 cursor-pointer">
											<h2 className="font-cabinet text-center font-bold mb-3 text-2xl text-gray-800">
												{services[selectedServiceIndex]?.title}
											</h2>
											<p className="font-cabinet text-xl text-gray-600">
												<strong>Duration:</strong>{" "}
												{services[selectedServiceIndex]?.duration}
											</p>
											<p className="font-cabinet text-xl text-gray-600">
												<strong>Description:</strong>{" "}
												{services[selectedServiceIndex]?.description}
											</p>
											<p className="font-cabinet text-xl text-gray-600">
												<strong>Price:</strong>{" "}
												{services[selectedServiceIndex]?.price}
											</p>
										</div>
										<p className="mt-2 font-cabinet text-bordo text-xl">
											Date: {selectedDate.toLocaleDateString()}
										</p>
										<p className="mt-1 font-cabinet text-bordo text-xl">
											Hour: {selectedTime}
										</p>

										<p className="mt-2 font-cabinet absolute right-5 bottom-[22%] 2xl:bottom-[27%] text-bordo text-xl">
											Phone: {currentUser?.phoneNumber}
										</p>
										<p className="mt-1 font-cabinet absolute right-5 bottom-[15%] 2xl:bottom-[21%] text-bordo text-xl">
											Full name: {currentUser?.firstName} {currentUser?.lastName}
										</p>
										<p className="mt-1 font-cabinet absolute right-5 bottom-[8%] 2xl:bottom-[15%] text-bordo text-xl">
											Email: {currentUser?.email}
										</p>
									</span>
								</div>
							</div>
						) : (
							services.map((service, index) => (
								<div
									key={index}
									className="service-item border-b p-5 rounded-t-xl border-bordo relative pb-4 mb-4 hover:bg-[#F8F9FA] transition-all last:border-none last:mb-0 cursor-pointer"
									onClick={() => handleToggle(index)}
								>
									<input
										id={`checkbox-${index}`}
										type="checkbox"
										defaultChecked={selectedServiceIndex === index}
										className="hidden"
									/>
									<label
										htmlFor={`checkbox-${index}`}
										className="custom-checkbox absolute right-5 top-5"
									></label>
									<h2 className="font-cabinet font-bold mb-3 text-2xl text-gray-800">
										{service.title}
									</h2>
									<p className="font-cabinet text-xl text-gray-600">
										<strong>Duration:</strong> {service.duration}
									</p>
									<p className="font-cabinet text-xl text-gray-600">
										<strong>Description:</strong> {service.description}
									</p>
									<p className="font-cabinet text-xl text-gray-600">
										<strong>Price:</strong> {service.price}
									</p>
								</div>
							))
						)}
					</div>
				</section>
				<button
					onClick={() => {
						isServiceSelected ? handleSubmit() : setIsServiceSelected("When?");
					}}
					disabled={isDisabled}
					className={`font-cabinet text-2xl font-bold px-5 py-3 rounded-xl absolute top-[80%] left-[85.5%] 
					${
						isDisabled
							? "bg-gray-400 text-[#F8F9FA] cursor-not-allowed"
							: "bg-bordo text-white cursor-pointer"
					}
					${
						isServiceSelected
							? "-translate-x-20"
							: ""
					}`}
				>
					{isServiceSelected ? "Make a book" : "Next"}
				</button>
			</main>
			<Footer />
		</>
	);
}

export default Book;
