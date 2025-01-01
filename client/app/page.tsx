"use client";

import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Schedule from "@/components/schedule";
import Services from "@/components/services";
import About from "@/components/about";
import storageService from "@/services/storage-service";
import { REFRESH_TOKEN_CHEKING_INTERVAL } from "@/shared/constants";
import authenticationService from "@/services/authentication-service";
import { useRouter } from "next/navigation";
import { ResponseData } from "@/services/apiTypes";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const tokenCheck = async () => {
      if (!storageService.retrieveAccessToken()) {
        return;
      }

      const expiration = storageService.retrieveTokenExpiresDate();
      const now = new Date(Date.now() + REFRESH_TOKEN_CHEKING_INTERVAL);

      if (expiration! < now) {
        try {
          const refreshToken = storageService.retrieveRefreshToken();

          if (!refreshToken) {
            console.log("Refresh token missing. Redirecting to login...");
            storageService.deleteUserData();
            router.push("/login"); // Redirect to login
            return;
          }

          const response = await authenticationService.refreshToken(refreshToken);
          const responseData = response.data as unknown as ResponseData;

          const newAccessToken = responseData.accessToken;
          const newRefreshToken = responseData.refreshToken;
          const newExpiration = responseData.expiration;

          storageService.saveAccessToken(newAccessToken);
          storageService.saveRefreshToken(newRefreshToken);
          storageService.saveTokenExpiresDate(newExpiration);
        } catch (error) {
          console.error("Error refreshing access token:", error);
          storageService.deleteUserData();
          router.push("/login"); // Redirect to login
        }
      }
    };

    // Call the tokenCheck function immediately
    tokenCheck();

    // Set up periodic checks for token expiration
    const intervalId = setInterval(tokenCheck, REFRESH_TOKEN_CHEKING_INTERVAL);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [router]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Schedule />
        <About />
        <Services />
      </main>
      <Footer />
    </>
  );
}
