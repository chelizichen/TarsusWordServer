import {
    baseRes,
    batchSetUserReq,
    getUserByIdRes,
    getUserListReq,
    getUserListRes,
    queryIdReq,
    queryIdsReq, queryUsersNameRes, User
} from "../struct/User";
import {TarsusReflect} from "tarsus/core/microservice";

interface UserInf {
    getBaseUserInfoList(Request: queryIdsReq, Response: queryUsersNameRes): Promise<queryUsersNameRes>

    getUserList(Request: getUserListReq, Response: getUserListRes): Promise<getUserListRes>

    getUserById(Request: queryIdReq, Response: getUserByIdRes): Promise<getUserByIdRes>

    delUserById(Request: queryIdReq, Response: baseRes): Promise<baseRes>

    saveUser(Request: User, Response: baseRes): Promise<baseRes>

    batchDelUser(Request: queryIdsReq, Response: baseRes): Promise<baseRes>

    batchSetUser(Request: batchSetUserReq, Response: baseRes): Promise<baseRes>
}

@TarsusReflect("UserServer","user")
class UserImpl implements UserInf {
    getUserList(Request: getUserListReq, Response: getUserListRes): Promise<getUserListRes> {
        throw new Error("Method not implemented.");
    }
    getUserById(Request: queryIdReq, Response: getUserByIdRes): Promise<getUserByIdRes> {
        throw new Error("Method not implemented.");
    }
    delUserById(Request: queryIdReq, Response: baseRes): Promise<baseRes> {
        throw new Error("Method not implemented.");
    }
    saveUser(Request: User, Response: baseRes): Promise<baseRes> {
        throw new Error("Method not implemented.");
    }
    batchDelUser(Request: queryIdsReq, Response: baseRes): Promise<baseRes> {
        throw new Error("Method not implemented.");
    }
    batchSetUser(Request: batchSetUserReq, Response: baseRes): Promise<baseRes> {
        throw new Error("Method not implemented.");
    }

    getBaseUserInfoList(Request: queryIdsReq, Response: queryUsersNameRes): Promise<queryUsersNameRes> {
        return Promise.resolve(undefined);
    }


}

export default UserImpl