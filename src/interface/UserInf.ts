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
import {$PoolConn} from "tarsus/core/database";

interface UserInf {
    getUserList(Request: getUserListReq, Response: getUserListRes): Promise<getUserListRes>

    getUserById(Request: queryIdReq, Response: getUserByIdRes): Promise<getUserByIdRes>

    delUserById(Request: queryIdReq, Response: baseRes): Promise<baseRes>

    saveUser(Request: User, Response: baseRes): Promise<baseRes>

    batchDelUser(Request: queryIdsReq, Response: baseRes): Promise<baseRes>

    batchSetUser(Request: batchSetUserReq, Response: baseRes): Promise<baseRes>
}

@TarsusInterFace("record")
class UserImpl implements UserInf {
    @TarsusMethod
    @Stream("queryIdReq", "getUserByIdRes")
    getUserById(Request: queryIdReq, Response: getUserByIdRes): Promise<getUserByIdRes> {
        const id = Request.id
        let sql = `
        select * from user where id = ?
        `
        let params = [id]
        return new Promise(async (resolve) => {
            Response.code = 0
            Response.message = "ok"
            const conn = await $PoolConn()
            conn.query(sql, params, (err, resu) => {
                if (err) {
                    Response.message = err.message;
                    Response.code = 600;
                    resolve(Response)
                    conn.release()
                    return
                }
                Response.data = resu;
                resolve(Response)
                conn.release()
            })
        });
    }

    @TarsusMethod
    @Stream("getUserListReq", "getUserListRes")
    getUserList(Request: getUserListReq, Response: getUserListRes): Promise<getUserListRes> {
        return Promise.resolve(undefined);
    }

    @TarsusMethod
    @Stream("queryIdsReq", "baseRes")
    batchDelUser(Request: queryIdsReq, Response: baseRes): Promise<baseRes> {
        const ids = Request.ids
        let ids_in = "(" + ids.toString() + ")"
        let sql = `
        delete  from user where id in ?
        `
        let params = [ids_in]
        return new Promise(async (resolve) => {
            Response.code = 0
            Response.message = "ok"
            const conn = await $PoolConn()
            conn.query(sql, params, (err, resu) => {
                if (err) {
                    Response.message = err.message;
                    Response.code = 600;
                    resolve(Response)
                    conn.release()
                    return
                }
                resolve(Response)
                conn.release()
            })
        });
    }

    @TarsusMethod
    @Stream("batchSetUserReq", "baseRes")
    batchSetUser(Request: batchSetUserReq, Response: baseRes): Promise<baseRes> {
        return Promise.resolve(undefined);
    }

    @TarsusMethod
    @Stream("queryIdReq", "baseRes")
    delUserById(Request: queryIdReq, Response: baseRes): Promise<baseRes> {
        const id = Request.id
        let sql = `
        delete  from user where id = ?
        `
        let params = [id]
        return new Promise(async (resolve) => {
            Response.code = 0
            Response.message = "ok"
            const conn = await $PoolConn()
            conn.query(sql, params, (err, resu) => {
                if (err) {
                    Response.message = err.message;
                    Response.code = 600;
                    resolve(Response)
                    conn.release()
                    return
                }
                resolve(Response)
                conn.release()
            })
        });
    }

    @TarsusMethod
    @Stream("User", "baseRes")
    saveUser(Request: User, Response: baseRes): Promise<baseRes> {
        return Promise.resolve(undefined);
    }

}

export default UserImpl