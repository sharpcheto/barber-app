import {UserUM} from "@/webapi";
import {UserVM} from "@/webapi";
import {WebApiService} from "@/services/web-api-service";
import {AxiosResponse} from "axios";
import {UserApi} from "@/webapi/apis/user-api";
export class UserService extends WebApiService {
    userApi: UserApi;
    constructor() {
        super();
        this.userApi = new UserApi();
    }
    public async makeUserPutRequest(user: UserUM, userEmail: string): Promise<AxiosResponse<boolean, any>> {
        return await this.userApi.userPut(user, userEmail, this.generateHeader());
    }
    public async makeUserCurrentGetRequest(): Promise<AxiosResponse<UserVM, any>> {
        return await this.userApi.userCurrentGet(this.generateHeader());
    }
}
const userService = new UserService()
export default userService