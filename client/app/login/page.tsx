"use client";

import { ResponseData } from "@/services/apiTypes";
// import { useEffect } from "react";
import authenticationService from "@/services/authentication-service";
import storageService from "@/services/storage-service";
import { useState } from "react";
function Login() {
	const [isLoading, setIsLoading] = useState(false);
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);
	  
		const formData = new FormData(event.target as HTMLFormElement);
	  
		const email = formData.get("email") as string | null;
		const password = formData.get("password") as string | null;
	  
		if (email && password) {
		  try {
			const response = await authenticationService.makeLoginRequest(
			  email,
			  password,
			);
			const responseData: ResponseData = response.data as ResponseData;
	  
			// Save tokens and expiration
			storageService.saveAccessToken(responseData.accessToken);
			storageService.saveRefreshToken(responseData.refreshToken);
			storageService.saveTokenExpiresDate(responseData.expiration);
	  
			// Redirect to dashboard
			window.location.href = "/";
		  } catch (error: unknown) {
			// Display error message using alert
			let message = "An unexpected error occurred";
	  
			if (
			  error &&
			  typeof error === "object" &&
			  "response" in error &&
			  error.response &&
			  typeof error.response === "object" &&
			  "data" in error.response &&
			  error.response.data
			) {
			  const data = error.response.data as Record<string, any>;
	  
			  if (data.message) {
				message = data.message;
			  } else if (data.errors) {
				const firstKey = Object.keys(data.errors)[0];
				if (firstKey) {
				  message = data.errors[firstKey];
				}
			  }
			}
	  
			alert(`Verification error: ${message}`);
		  } finally {
			// Always reset loading state in both success and failure
			setIsLoading(false);
		  }
		} else {
		  alert("Please provide both email and password.");
		}
	  };
	  

	return (
		<main className="w-screen min-h-screen bg-[#FAF5F1]">
			<section className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
				<div className="w-full h-full flex justify-center items-center p-4 sm:p-6 lg:p-8 order-2 lg:order-1">
					<form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 w-full max-w-md lg:scale-125">
						<h2 className="text-xl sm:text-2xl font-bold text-center font-cabinet text-bordo">
							Login
						</h2>

						<div className="space-y-2 w-full">
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

						<div className="space-y-2 w-full">
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

						<div className="flex items-center justify-between w-full">
							<button
								type="submit"
								className="w-full py-2 bg-bordo text-white font-semibold rounded-lg hover:bg-bordo/90 transition-all font-cabinet"
							>
								{isLoading ? "Loading..." : "Login"}
							</button>
						</div>

						<div className="text-center">
							<a
								href="#"
								className="text-sm text-bordo hover:underline font-cabinet"
							>
								Forgot Password?
							</a>
						</div>

						<div className="text-center">
							<a
								href="/register"
								className="text-sm text-bordo hover:underline font-cabinet"
							>
								Don't have an account yet? Create one
							</a>
						</div>
					</form>
				</div>
				<div className="relative w-full h-64 sm:h-80 lg:h-screen order-1 lg:order-2">
					<div className="absolute inset-0 bg-black opacity-30 z-10"></div>
					<img className="w-full h-full object-cover" src="login.png" alt="" />
				</div>
			</section>
		</main>
	);
}

export default Login;
