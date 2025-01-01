"use client";
import authenticationService from "@/services/authentication-service";
import userService from "@/services/user-service";
import { UserUM } from "@/webapi/models/user-um";
import { useState } from "react";

function Register() {
	const [isLoading, setIsloading] = useState(false);
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsloading(true);
		const formData = new FormData(event.target as HTMLFormElement);

		const firstName = formData.get("firstName") as string | null;
		const lastName = formData.get("lastName") as string | null;
		const phoneNumber = formData.get("phoneNumber") as string | null;
		const email = formData.get("email") as string | null;
		const password = formData.get("password") as string | null;

		if (email && password && firstName && lastName) {
			try {
				await authenticationService.makeRegisterRequest(email, password);
				const user: UserUM = {
					firstName: firstName,
					lastName: lastName,
					phoneNumber: phoneNumber || "",
				};

				await userService.makeUserPutRequest(user, email);

				// Redirect to login
				window.location.href = "/login";
			} catch (error: any) {
				// Display error message using alert
				const message =
					error.response?.data?.message ||
					error.response?.data?.errors?.[
						Object.keys(error.response?.data.errors)[0]
					] ||
					"An unexpected error occurred";

				alert(`Verification error: ${message}`);
			} finally {
				setIsloading(false);
			}
		} else {
			alert("Please provide both email and password.");
		}
	};

	return (
		<main className="w-screen h-screen bg-[#FAF5F1]">
			<section className="w-full h-full grid grid-cols-2">
				<div className="w-full h-full flex justify-center items-center">
					<form onSubmit={handleSubmit} className="space-y-6 scale-125">
						<h2 className="text-2xl font-bold text-center font-cabinet text-bordo">
							Register
						</h2>

						<div className="space-y-2 w-[120%] -translate-x-5">
							<label
								htmlFor="firstName"
								className="block text-sm text-bordo font-cabinet font-bold"
							>
								First Name
							</label>
							<input
								type="text"
								id="text"
								name="firstName"
								className="w-full text-bordo px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordo focus:outline-none font-cabinet placeholder-bordo"
								placeholder="Enter your text"
								required
							/>
						</div>

						<div className="space-y-2 w-[120%] -translate-x-5">
							<label
								htmlFor="lastName"
								className="block text-sm text-bordo font-cabinet font-bold"
							>
								Last Name
							</label>
							<input
								type="text"
								id="text"
								name="lastName"
								className="w-full text-bordo px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordo focus:outline-none font-cabinet placeholder-bordo"
								placeholder="Enter your name"
								required
							/>
						</div>

						<div className="space-y-2 w-[120%] -translate-x-5">
							<label
								htmlFor="phoneNumber"
								className="block text-sm text-bordo font-cabinet font-bold"
							>
								Phone{" "}
							</label>
							<input
								type="tel"
								id="text"
								name="phoneNumber"
								className="w-full text-bordo px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordo focus:outline-none font-cabinet placeholder-bordo"
								placeholder="Enter your phone"
								required
							/>
						</div>

						<div className="space-y-2 w-[120%] -translate-x-5">
							<label
								htmlFor="email"
								className="block text-sm text-bordo font-cabinet font-bold"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="w-full text-bordo px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordo focus:outline-none font-cabinet placeholder-bordo"
								placeholder="Enter your email"
								required
							/>
						</div>

						<div className="space-y-2 w-[120%] -translate-x-5">
							<label
								htmlFor="password"
								className="block text-sm text-bordo font-cabinet font-bold"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								className="w-full px-4 py-2 text-bordo border border-gray-300 rounded-lg focus:ring-2 focus:ring-bordo focus:outline-none font-cabinet placeholder-bordo"
								placeholder="Enter your password"
								required
							/>
						</div>

						<div className="flex items-center justify-between w-[120%] -translate-x-5">
							<button
								type="submit"
								className="w-full py-2 bg-bordo text-white font-semibold rounded-lg hover:bg-bordo/90 transition-all font-cabinet"
							>
								{isLoading ? "Loading..." : "Register"}
							</button>
						</div>

						<div className="text-center">
							<a
								href="/login"
								className="text-sm text-bordo hover:underline font-cabinet"
							>
								Already have an account? Log in
							</a>
						</div>
					</form>
				</div>
				<div className="absolute w-1/2 bg-black opacity-30 h-screen left-1/2"></div>
				<img className="h-screen" src="login.png" alt="" />
			</section>
		</main>
	);
}

export default Register;
