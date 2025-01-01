"use client";

import { useState } from "react";
import AuthGuard from "@/components/auth-guard"; // Import AuthGuard
import Link from "next/link";
import Image from "next/image"; // Using Next.js Image for optimization
import storageService from "@/services/storage-service";
import { useRouter } from "next/navigation";

function Navbar() {
	const [isLogged, setIsLogged] = useState<boolean | null>(null);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const router = useRouter();
	const toggleDropdown = () => {
		setIsDropdownOpen((prevState) => !prevState);
		console.log("toggleDropdown", isDropdownOpen);
	};
	const logout = () => {
		storageService.deleteUserData();
		setIsLogged(false);
		router.push("/");
	};
	return (
		<>
			<nav className="hidden xl:block xl:fixed top-0 w-full z-[50] bg-transparent text-black backdrop-blur-3xl bg-opacity-15 backdrop-filter">
				{/* AuthGuard manages login state */}
				<AuthGuard onAuthChange={setIsLogged} />

				<ul className="flex xl:h-15 2xl:h-20 bg-transparent space-x-5 items-center justify-between w-full">
					{/* Left-side navigation items */}
					<div className="flex space-x-5 justify-center items-center">
						<li className="p-3 rounded-xl ml-5">
							<Link
								href="/#services"
								className="font-bold font-cabinet relative nav-link cursor-pointer xl:text-md 2xl:text-xl tracking-wide"
							>
								Services
							</Link>
						</li>
						<li className="p-3 rounded-xl ml-5">
							<Link
								href="/#about"
								className="font-bold font-cabinet relative nav-link cursor-pointer xl:text-md 2xl:text-xl tracking-wide"
							>
								About Us
							</Link>
						</li>
					</div>

					{/* Right-side navigation items */}
					<div className="flex space-x-5 items-center">
						<li className="p-3 rounded-xl mr-5">
							<Link
								href={storageService.retrieveAccessToken() ? "/book" : "/login"}
							>
								<p className="z-50 xl:scale-[80%] font-bold font-cabinet cursor-pointer px-5 py-2 text-[#FAF5F1] bg-bordo transition-all hover:bg-bordo/90 relative tracking-wide xl:text-md 2xl:text-xl">
									Book Now
								</p>
							</Link>
						</li>
						<li className="p-3 rounded-xl xl:scale-[80%] absolute right-[10%] 2xl:right-[9%]">
							{isLogged ? (
								<div className="relative">
									<button className="cursor-pointer" onClick={toggleDropdown}>
										<Image
											src="/avatar.png" // Make sure the image is in the public folder or use an appropriate path
											alt="User Avatar"
											width={40}
											height={40}
											className="rounded-full hover:scale-105 transition-all"
										/>
									</button>

									{/* Dropdown menu */}
									{isDropdownOpen && (
										<div className="absolute top-12 right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
											<ul>
												<li className="w-full">
													<button className="w-full">
														<p className="w-full rounded-t-lg block px-4 font-cabinet font-semibold text-left py-2 hover:text-white hover:bg-bordo text-black">
															My reservations
														</p>
													</button>
												</li>
												<li className="w-full">
													<button className="w-full" onClick={logout}>
														<p className="w-full rounded-b-lg block px-4 font-cabinet font-semibold text-left py-2 hover:text-white hover:bg-bordo text-black">
															Logout
														</p>
													</button>
												</li>
											</ul>
										</div>
									)}
								</div>
							) : (
								<Link href="/login">
									<p className="z-50 font-bold font-cabinet cursor-pointer px-5 py-2 hover:bg-[#dad5d2] transition-all bg-[#FAF5F1] relative tracking-wide xl:text-md 2xl:text-xl">
										Log In
									</p>
								</Link>
							)}
						</li>

						{/* Logo */}
						<span className="logo xl:scale-[80%] absolute left-1/2 -translate-x-8">
							<Link href="/">
								<Image
									src="/favicon.ico" // Same here for favicon
									alt="Logo"
									width={48} // Adjust the size of the logo as needed
									height={48}
									className="rounded-full"
								/>
							</Link>
						</span>
					</div>
				</ul>
			</nav>

			<nav className="block xl:hidden fixed top-0 w-full z-[50] bg-transparent text-black ">
				{/* AuthGuard manages login state */}
				<AuthGuard onAuthChange={setIsLogged} />

				<div className="flex justify-between items-center px-5 py-4">
					{/* Logo */}
					<Link href="/" className="flex items-center">
						<Image
							src="/favicon.ico"
							alt="Logo"
							width={40}
							height={40}
							className="rounded-full"
						/>
					</Link>

					{/* Mobile Menu Toggle */}
					<button
						className="block xl:hidden p-2 bg-transparent z-[20]"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<span
							className={`block w-6 h-1 bg-black mb-1 transform transition-all ${
								isMenuOpen ? "rotate-45 translate-y-2" : ""
							}`}
						></span>
						<span
							className={`block w-6 h-1 bg-black mb-1 ${
								isMenuOpen ? "opacity-0" : ""
							}`}
						></span>
						<span
							className={`block w-6 h-1 bg-black transform transition-all ${
								isMenuOpen ? "-rotate-45 -translate-y-2" : ""
							}`}
						></span>
					</button>
				</div>

				{/* Mobile Menu */}
				<div
					className={`fixed top-0 left-0 h-screen w-full bg-white z-[10] transform backdrop-filter bg-opacity-50 backdrop-blur-xl transition-transform duration-300 ease-in-out ${
						isMenuOpen ? "translate-x-0" : "-translate-x-full"
					}`}
				>
					<ul className="grid place-content-center place-items-center h-screen space-y-5 p-5">
						<li>
							<Link
								href="/#services"
								className="font-bold font-cabinet text-9xl"
								onClick={() => setIsMenuOpen(false)}
							>
								Services
							</Link>
						</li>
						<li>
							<Link
								href="/#about"
								className="font-bold font-cabinet text-9xl"
								onClick={() => setIsMenuOpen(false)}
							>
								About Us
							</Link>
						</li>
						
						{isLogged ? (
							<>
								<li>
									<button
										className="font-bold font-cabinet text-9xl"
										onClick={() => {
											toggleDropdown();
											setIsMenuOpen(false);
										}}
									>
										My Reservations
									</button>
								</li>
								<li>
									<button
										className="font-bold font-cabinet text-xl text-red-500"
										onClick={logout}
									>
										Logout
									</button>
								</li>
							</>
						) : (
							<li>
								<Link href="/login" onClick={() => setIsMenuOpen(false)}>
									<p className="font-bold font-cabinet text-7xl bg-gray-200 px-20 py-10 rounded-lg">
										Log In
									</p>
								</Link>
							</li>
						)}
						<li>
							<Link
								href={storageService.retrieveAccessToken() ? "/book" : "/login"}
								onClick={() => setIsMenuOpen(false)}
							>
								<p className="font-bold font-cabinet text-7xl bg-bordo text-white px-20 py-10 rounded-lg">
									Book Now
								</p>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
