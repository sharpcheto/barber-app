import { LoginRequest, RegisterRequest, BAApplicationApi, AccessTokenResponse, RefreshRequest } from "../webapi";
import { AxiosResponse } from "axios";
import { WebApiService } from "./web-api-service"

export class AuthenticationService extends WebApiService {
  applicationApi: BAApplicationApi;

  constructor() {
    super();
    this.applicationApi = new BAApplicationApi();
  }

  public async makeLoginRequest(email: string, password: string, twoFactorCode?: string, twoFactorRecoveryCode?: string): Promise<AxiosResponse<AccessTokenResponse, any>> {
    const loginRequest: LoginRequest = ({
        email: email,
        password: password,
        twoFactorCode: twoFactorCode,
        twoFactorRecoveryCode: twoFactorRecoveryCode,
    });

    return await this.applicationApi.loginPost(loginRequest, undefined, undefined, this.generateHeader());
  }

  public async makeRegisterRequest(email: string, password: string): Promise<AxiosResponse<void, any>> {
    const registerRequest: RegisterRequest = ({
        email: email,
        password: password,
    });

    return await this.applicationApi.registerPost(registerRequest, this.generateHeader());
  }

  public async refreshToken(refreshToken: string): Promise<AxiosResponse<AccessTokenResponse, any>> {
    const refreshRequest: RefreshRequest = ({
        refreshToken: refreshToken,
    });

    return await this.applicationApi.refreshPost(refreshRequest, this.generateHeader());
  }
}

const authenticationService = new AuthenticationService();
export default authenticationService;