import {
  LOCAL_STORAGE_ACCESS_TOKEN_KEY,
  LOCAL_STORAGE_REFRESH_TOKEN_KEY,
  LOCAL_STORAGE_EXPIRATION_DATE_KEY,
} from "../shared/constants";

class StorageService {
  private isClient(): boolean {
    return typeof window !== "undefined";
  }

  public retrieveAccessToken(): string | null {
    if (!this.isClient()) return null; // Check if running on the client
    try {
      const accessToken = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
      return accessToken || null;
    } catch (e) {
      console.error("Error retrieving access token:", e);
      localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
      return null;
    }
  }

  public saveAccessToken(accessToken: string | null): void {
    if (!this.isClient()) return; // Check if running on the client
    if (accessToken) {
      localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY, accessToken);
    } else {
      localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    }
  }

  public retrieveRefreshToken(): string | null {
    if (!this.isClient()) return null; // Check if running on the client
    try {
      const refreshToken = localStorage.getItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY);
      return refreshToken || null;
    } catch (e) {
      console.error("Error retrieving refresh token:", e);
      localStorage.removeItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY);
      return null;
    }
  }

  public saveRefreshToken(refreshToken: string | null): void {
    if (!this.isClient()) return; // Check if running on the client
    if (refreshToken) {
      localStorage.setItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY, refreshToken);
    } else {
      localStorage.removeItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY);
    }
  }

  public saveTokenExpiresDate(date: string | null): void {
    if (!this.isClient()) return; // Check if running on the client
    if (date) {
      localStorage.setItem(LOCAL_STORAGE_EXPIRATION_DATE_KEY, date);
    } else {
      localStorage.removeItem(LOCAL_STORAGE_EXPIRATION_DATE_KEY);
    }
  }

  public retrieveTokenExpiresDate(): Date | null {
    if (!this.isClient()) return null; // Check if running on the client
    try {
      const date = localStorage.getItem(LOCAL_STORAGE_EXPIRATION_DATE_KEY);
      return date ? new Date(date) : null;
    } catch (e) {
      console.error("Error retrieving token expiration date:", e);
      localStorage.removeItem(LOCAL_STORAGE_EXPIRATION_DATE_KEY);
      return null;
    }
  }

  public checkForUserLogin(): boolean {
    if (!this.isClient()) return false; // Check if running on the client
    const token = this.retrieveAccessToken();
    const refreshToken = this.retrieveRefreshToken();
    const expirationDate = this.retrieveTokenExpiresDate();
    return !!(token && refreshToken && expirationDate);
  }

  public deleteUserData(): void {
    if (!this.isClient()) return; // Check if running on the client
    localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    localStorage.removeItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY);
    localStorage.removeItem(LOCAL_STORAGE_EXPIRATION_DATE_KEY);
  }
}

const storageService = new StorageService();
export default storageService;
