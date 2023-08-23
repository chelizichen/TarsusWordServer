import {
    baseRes,
    batchSetUserReq,
    getUserByIdRes,
    getUserListReq,
    getUserListRes,
    queryIdReq,
    queryIdsReq, User
} from "../struct/User";
import {Stream, TarsusInterFace, TarsusMethod,TarsusReflect} from "tarsus/core/microservice";
import {$PoolConn} from "tarsus/core/database";
import {$BuildIn, $ExcuteQuery, $QueryOne, $Resolve} from "../utils/queryBuilder";

interface UserInf {
    getUserList(Request: getUserListReq, Response: getUserListRes): Promise<getUserListRes>

    getUserById(Request: queryIdReq, Response: getUserByIdRes): Promise<getUserByIdRes>

    delUserById(Request: queryIdReq, Response: baseRes): Promise<baseRes>

    saveUser(Request: User, Response: baseRes): Promise<baseRes>

    batchDelUser(Request: queryIdsReq, Response: baseRes): Promise<baseRes>

    batchSetUser(Request: batchSetUserReq, Response: baseRes): Promise<baseRes>
}

@TarsusReflect("user")
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


}

export default UserImpl