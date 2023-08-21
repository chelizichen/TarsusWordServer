import {
    baseRes,
    batchSetUserReq,
    getUserByIdRes,
    getUserListReq,
    getUserListRes,
    queryIdReq,
    queryIdsReq, User
} from "../struct/User";
import {Stream, TarsusInterFace, TarsusMethod} from "tarsus/core/microservice";

interface UserInf {
    getUserList(Request:getUserListReq,Response:getUserListRes):Promise<getUserListRes>
    getUserById(Request:queryIdReq,Response:getUserByIdRes):Promise<getUserByIdRes>
    delUserById(Request:queryIdReq,Response:baseRes):Promise<baseRes>
    saveUser(Request:User,Response:baseRes):Promise<baseRes>
    batchDelUser(Request:queryIdsReq,Response:baseRes):Promise<baseRes>
    batchSetUser(Request:batchSetUserReq,Response:baseRes):Promise<baseRes>
}

@TarsusInterFace("record")
class UserImpl implements UserInf {
    @TarsusMethod
    @Stream("queryIdReq","getUserByIdRes")
    getUserById(Request: queryIdReq, Response: getUserByIdRes): Promise<getUserByIdRes> {
        return Promise.resolve(undefined);
    }

    @TarsusMethod
    @Stream("getUserListReq","getUserListRes")
    getUserList(Request: getUserListReq, Response: getUserListRes): Promise<getUserListRes> {
        return Promise.resolve(undefined);
    }
    @TarsusMethod
    @Stream("queryIdsReq","baseRes")
    batchDelUser(Request: queryIdsReq, Response: baseRes): Promise<baseRes> {
        return Promise.resolve(undefined);
    }
    @TarsusMethod
    @Stream("batchSetUserReq","baseRes")
    batchSetUser(Request: batchSetUserReq, Response: baseRes): Promise<baseRes> {
        return Promise.resolve(undefined);
    }
    @TarsusMethod
    @Stream("queryIdReq","baseRes")
    delUserById(Request: queryIdReq, Response: baseRes): Promise<baseRes> {
        return Promise.resolve(undefined);
    }
    @TarsusMethod
    @Stream("User","baseRes")
    saveUser(Request: User, Response: baseRes): Promise<baseRes> {
        return Promise.resolve(undefined);
    }

}

export default UserImpl