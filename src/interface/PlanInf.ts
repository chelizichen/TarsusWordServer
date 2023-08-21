import {
    getPlanDetailByIdRes,
    getPlanWordsByIdRes,
    getUserPlanByIdRes,
    getUserPlansRes,
    PlanDetail, PlanWords
} from "../struct/Plan";
import {Stream, TarsusInterFace, TarsusMethod, $PoolConn} from "tarsus/core/microservice";
import {baseRes, queryIdReq} from "../struct/Record";

interface PlanInf {
    getLatestPlanByUser(Request: queryIdReq, Response: getPlanDetailByIdRes): Promise<getPlanDetailByIdRes>

    getPlansByUser(Request: queryIdReq, Response: getUserPlansRes): Promise<getUserPlansRes>

    getPlanById(Request: queryIdReq, Response: getPlanDetailByIdRes): Promise<getPlanDetailByIdRes>

    getPlanWordsById(Request: queryIdReq, Response: getPlanWordsByIdRes): Promise<getPlanWordsByIdRes>

    markPlanWords(Request: queryIdReq, Response: baseRes): Promise<baseRes>

    markPlan(Request: queryIdReq, Response: baseRes): Promise<baseRes>

    delPlan(Request: queryIdReq, Response: baseRes): Promise<baseRes>

    delPlanWords(Request: queryIdReq, Response: baseRes): Promise<baseRes>

    savePlan(Request: PlanDetail, Response: baseRes): Promise<baseRes>

    savePlanWords(Request: PlanWords, Response: baseRes): Promise<baseRes>
}

@TarsusInterFace("plan")
class PlanImpl implements PlanInf {


    @TarsusMethod
    @Stream("queryIdReq", "baseRes")
    delPlan(Request: queryIdReq, Response: baseRes): Promise<baseRes> {
        return new Promise(async (resolve, reject) => {
            const conn = await $PoolConn();
            let sql = `delete from plan_detail where id = ${Request.id}`;
            conn.query(sql, function () {
                Response.message = "删除成功";
                resolve(Response)
            })
        })
    }

    @TarsusMethod
    @Stream("queryIdReq", "baseRes")
    delPlanWords(Request: queryIdReq, Response: baseRes): Promise<baseRes> {
        return new Promise(async (resolve, reject) => {
            const conn = await $PoolConn();
            let sql = `delete from plan_words where id = ${Request.id}`;
            conn.query(sql, function () {
                Response.message = "删除成功";
                resolve(Response)
            })
        })
    }

    @TarsusMethod
    @Stream("queryIdReq", "getPlanDetailByIdRes")
    getLatestPlanByUser(Request: queryIdReq, Response: getPlanDetailByIdRes): Promise<getPlanDetailByIdRes> {
        const id = Request.id;

        return new Promise(async (resolve) => {
            const conn = await $PoolConn();
            conn.query('select * from plan_detail where user_id = ? desc limit 0,1', [id], (err, resu) => {
                if (err) {
                    Response.message = err.message
                    Response.code = 600;
                    resolve(Response)
                    conn.release()
                    return
                }
                Response.data = resu[0];
                Response.message = "ok"
                Response.code = 0;
                resolve(Response)
                conn.release()
            })
        })
    }

    @TarsusMethod
    @Stream("queryIdReq", "getPlanDetailByIdRes")
    getPlanById(Request: queryIdReq, Response: getPlanDetailByIdRes): Promise<getPlanDetailByIdRes> {
        const id = Request.id;

        return new Promise(async (resolve) => {
            const conn = await $PoolConn();
            conn.query('select * from plan_detail where id = ?', [id], (err, resu) => {
                if (err) {
                    Response.message = err.message
                    Response.code = 600;
                    resolve(Response)
                    conn.release()
                    return
                }
                Response.data = resu[0];
                Response.message = "ok"
                Response.code = 0;
                resolve(Response)
                conn.release()
            })
        })
    }

    @TarsusMethod
    @Stream("queryIdReq", "getPlanWordsByIdRes")
    getPlanWordsById(Request: queryIdReq, Response: getPlanWordsByIdRes): Promise<getPlanWordsByIdRes> {
        return Promise.resolve(undefined);
    }

    @TarsusMethod
    @Stream("queryIdReq", "getPlanWordsByIdRes")
    getPlansByUser(Request: queryIdReq, Response: getUserPlansRes): Promise<getUserPlansRes> {
        const id = Request.id;

        return new Promise(async (resolve) => {
            const conn = await $PoolConn();
            conn.query('select * from plan_detail where user_id = ? desc', [id], (err, resu) => {
                if (err) {
                    Response.message = err.message
                    Response.code = 600;
                    resolve(Response)
                    conn.release()
                    return
                }
                Response.data = resu;
                Response.message = "ok"
                Response.code = 0;
                Response.total = Response.data.length;
                resolve(Response)
                conn.release()
            })
        })
    }

    @TarsusMethod
    @Stream("queryIdReq", "baseRes")
    markPlan(Request: queryIdReq, Response: baseRes): Promise<baseRes> {
        return Promise.resolve(undefined);
    }

    @TarsusMethod
    @Stream("queryIdReq", "baseRes")
    markPlanWords(Request: queryIdReq, Response: baseRes): Promise<baseRes> {
        return Promise.resolve(undefined);
    }

    @TarsusMethod
    @Stream("PlanDetail", "baseRes")
    savePlan(Request: PlanDetail, Response: baseRes): Promise<baseRes> {
        return Promise.resolve(undefined);
    }

    @TarsusMethod
    @Stream("PlanWords", "baseRes")
    savePlanWords(Request: PlanWords, Response: baseRes): Promise<baseRes> {
        return Promise.resolve(undefined);
    }
}

export default PlanImpl;