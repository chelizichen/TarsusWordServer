import {
    getPlanDetailByIdRes,
    getPlanWordsByIdRes,
    getUserPlanByIdRes,
    getUserPlansRes,
    PlanDetail, PlanWords
} from "../struct/Plan";
import {Stream, TarsusInterFace, TarsusMethod} from "tarsus/core/microservice";
import {baseRes, queryIdReq} from "../struct/Record";
import moment from "moment";
import {$PoolConn} from "tarsus/core/database";
import {$ExecuteQuery} from "../utils/queryBuilder";

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
    async getPlanById(Request: queryIdReq, Response: getPlanDetailByIdRes): Promise<getPlanDetailByIdRes> {
        const id = Request.id;
        const sql = 'select * from plan_detail where id = ?'
        const parmas = [id]
        const data = await $ExecuteQuery(sql, parmas)
        Response.code = 0;
        Response.message = "ok"
        Response.data = data[0]
        return Response;
    }

    @TarsusMethod
    @Stream("queryIdReq", "getPlanWordsByIdRes")
    async getPlanWordsById(Request: queryIdReq, Response: getPlanWordsByIdRes): Promise<getPlanWordsByIdRes> {
        const sql = `select * from plan_words where plan_id = ? `
        const id = Request.id;
        const params = [id]
        const data = await $ExecuteQuery<PlanWords>(sql,params)
        Response.code = 0
        Response.message = "ok"
        Response.total = data.data.length
        Response.data = data.data
        // const data = await
        return Promise.resolve(Response);
    }

    @TarsusMethod
    @Stream("queryIdReq", "getUserPlansRes")
    getPlansByUser(Request: queryIdReq, Response: getUserPlansRes): Promise<getUserPlansRes> {
        const id = Request.id;

        return new Promise(async (resolve) => {
            let sql = `select * from plan_detail where user_id = ? order by id desc`
            const data = await $ExecuteQuery<any>(sql, [id])
            Response.data = data.data.map(item => {
                item.create_time = moment(item.create_time).format("YYYY-MM-DD HH:mm:ss")
                item.plan_start_time = moment(item.plan_start_time).format("YYYY-MM-DD HH:mm:ss")
                item.plan_end_time = moment(item.plan_end_time).format("YYYY-MM-DD HH:mm:ss")
                return item
            })
            Response.total = Response.data.length;
            console.log("Response", Response);
            resolve(Response)
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
        let {user_id, is_mark, plan_start_time, plan_end_time, create_time = ''} = Request
        if (!create_time) {
            create_time = moment().format('YYYY-MM-DD HH:mm:ss')
        }
        Response.code = 0;
        Response.message = 'ok'
        return new Promise(async (resolve) => {
            let sql = `
            insert into plan_detail
            (user_id,is_mark,plan_start_time,plan_end_time,create_time)
            values(?,?,?,?,?)
            `
            let params = [user_id, is_mark, plan_start_time, plan_end_time, create_time]
            const conn = await $PoolConn()
            conn.query(sql, params, function (err) {
                if (err) {
                    Response.message = err.message
                    Response.code = 600
                    resolve(Response)
                    return conn.release();
                }
                resolve(Response);
                return conn.release();
            })
        });

    }

    @TarsusMethod
    @Stream("PlanWords", "baseRes")
    savePlanWords(Request: PlanWords, Response: baseRes): Promise<baseRes> {
        let {word_ids, mark_date, is_mark, user_id, plan_id} = Request;
        if (!word_ids.length) {
            Response.message = "请选择单词"
            Response.code = 500;
            return Promise.resolve(Response);
        }
        Response.code = 0;
        Response.message = 'ok'
        return new Promise(async (resolve) => {
            let sql = `
            insert into plan_words
            (user_id,is_mark,mark_date,word_ids,plan_id)
            values(?,?,?,?,?)
            `
            let params = [user_id, is_mark, mark_date, word_ids, plan_id]
            const conn = await $PoolConn()
            conn.query(sql, params, function (err) {
                if (err) {
                    Response.message = err.message
                    Response.code = 600
                    resolve(Response)
                    return conn.release();
                }
                resolve(Response);
                return conn.release();
            })
        });
    }
}

export default PlanImpl;