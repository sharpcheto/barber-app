"use client";

import { useEffect, useState } from "react";
import storageService from "@/services/storage-service";

const AuthGuard = ({ onAuthChange }: { onAuthChange: (isAuthenticated: boolean) => void }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const user = storageService.retrieveAccessToken();
      onAuthChange(!!user);
      setIsLoading(false);
    };
    checkAuth();
  }, [onAuthChange]);

  if (isLoading) {
    return null; 
  }

  return null; 
};

export default AuthGuard;
