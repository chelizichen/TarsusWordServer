import {TarsusInterFace, TarsusMethod, Stream} from "tarsus/core/microservice";
import {$PoolConn} from 'tarsus/core/database'
import moment from 'moment'
//
import {
    getWordListReq,
    getWordListRes,
    getTranslateListReq,
    getTranslateListRes,
    DelReq,
    DelOrSaveRes,
    Word,
    WordTranslate
} from "../struct/Word";
import {sign} from "crypto";
import {queryIdReq} from "../struct/Record";


interface WordServerInf {
    getWordList(Request: getWordListReq, Response: getWordListRes): Promise<getWordListRes>

    getTranslateList(Request: getTranslateListReq, Response: getTranslateListRes): Promise<getTranslateListRes>

    delWordById(Request: queryIdReq, Response: DelOrSaveRes): Promise<DelOrSaveRes>

    delTranslateByID(Request: queryIdReq, Response: DelOrSaveRes): Promise<DelOrSaveRes>

    saveWord(Request: Word, Response: DelOrSaveRes): Promise<DelOrSaveRes>

    saveTranslate(Request: WordTranslate, Response: DelOrSaveRes): Promise<DelOrSaveRes>
}

@TarsusInterFace("word")
class WordImpl implements WordServerInf {
    @TarsusMethod
    @Stream("getWordListReq", "getWordListRes")
    getWordList(Request: getWordListReq, Response: getWordListRes): Promise<getWordListRes> {
        return new Promise(async (resolve, reject) => {
            const {page = 1, size = 10, keyword = '', start_time, desc = "1", end_time} = Request
            const conn = await $PoolConn();
            let current = (page - 1) * 10;
            let where = ' where 1 = 1 '
            let select = `
select words.*,COUNT(word_translates.id) AS total_trans 
from words 
LEFT JOIN word_translates ON words.id = word_translates.word_id
`
            let total = 'select count(*) as total from words';
            let limit = `limit ${current},${size}`
            if (keyword) {
                where += ` and en_name like %${keyword}% `
            }
            if (start_time && end_time) {
                where += ` and create_time between ${start_time} and ${end_time} `
            }
            where += ` GROUP BY words.id order by create_time ${desc == "1" ? 'desc' : ''} `

            let signal = {
                total: false,
                list: false
            }

            conn.query(total + where, function (_, resu) {
                console.log('total', total + where)
                console.log('total', resu[0])
                // Response.total = resu[0].total;
                Response.total = resu[0].total;
                signal.total = true
                if (signal.total && signal.list) {
                    resolve(Response)
                    conn.release()
                }

            })

            conn.query(select + where + limit, function (_, resu) {
                console.log('select', select + where + limit)
                console.log('select', resu)
                Response.list = resu.map(item => {
                    item.create_time = moment(item.create_time).format("YYYY-MM-DD HH:mm:ss")
                    return item;
                });
                // Response.list = [];
                signal.list = true
                if (signal.total && signal.list) {
                    resolve(Response)
                    conn.release()
                }
            })

        })
    }

    @TarsusMethod
    @Stream("getTranslateListReq", "getTranslateListRes")
    getTranslateList(Request: getTranslateListReq, Response: getTranslateListRes): Promise<getTranslateListRes> {
        return new Promise(async (resolve, reject) => {
            const {page = 1, size = 10, keyword = '', start_time, desc = "1", end_time} = Request
            const conn = await $PoolConn();
            let current = (page - 1) * 10;
            let where = ' where 1 = 1 and '
            let select = 'select * from words'
            let total = 'select (*) as total from words';
            let limit = `limit${current},${size}`
            if (keyword) {
                where += ` en_name like %${keyword}% and `
            }
            if (start_time && end_time) {
                where += `create_time between ${start_time} and ${end_time}`
            }
            where += `order by create_time ${desc == "1" ? 'desc' : ''}`

            let signal = {
                total: false,
                list: false
            }

            conn.query(total + where, function (_, resu) {
                Response.total = resu[0].total;
                signal.total = true
                if (signal.total && signal.list) {
                    resolve(Response)
                }

            })

            conn.query(select + where + limit, function (_, resu) {
                Response.list = resu;
                signal.list = true
                if (signal.total && signal.list) {
                    resolve(Response)
                }
            })

        })
    }

    @TarsusMethod
    @Stream("DelReq", "DelOrSaveRes")
    delWordById(Request: DelReq, Response: DelOrSaveRes): Promise<DelOrSaveRes> {
        return new Promise(async (resolve, reject) => {
            const conn = await $PoolConn();
            let sql = `delete from words where id = ${Request.id}`;
            conn.query(sql, function () {
                Response.message = "删除成功";
                resolve(Response)
            })
        })
    }

    @TarsusMethod
    @Stream("DelReq", "DelOrSaveRes")
    delTranslateByID(Request: DelReq, Response: DelOrSaveRes): Promise<DelOrSaveRes> {
        return new Promise(async (resolve, reject) => {
            const conn = await $PoolConn();
            let sql = `delete from word_translates where id = ${Request.id}`;
            conn.query(sql, function () {
                Response.message = "删除成功";
                resolve(Response)
            })
        })
    }

    @TarsusMethod
    @Stream("Word", "DelOrSaveRes")
    saveWord(Request: Word, Response: DelOrSaveRes): Promise<DelOrSaveRes> {
        const {en_name, create_time, own_mark, type} = Request
        const params = [en_name, create_time, own_mark, type]
        let sql = `
            insert into words(en_name,create_time,own_mark,type)values(?,?,?,?)
        `
        return new Promise(async (resolve, reject) => {
            const conn = await $PoolConn();
            conn.query(sql, params, (err) => {
                if (err) {
                    Response.code = 600
                    Response.message = "db insert error " + sql;
                    resolve(Response)
                } else {
                    Response.code = 0;
                    Response.message = "插入成功"
                    resolve(Response)
                }
                conn.release();
            })
        })
    }

    @TarsusMethod
    @Stream("WordTranslate", "DelOrSaveRes")
    saveTranslate(Request: WordTranslate, Response: DelOrSaveRes): Promise<DelOrSaveRes> {
        const {en_type, cn_name, create_time, own_mark, word_id} = Request;
        const params = [en_type, cn_name, create_time, own_mark, word_id]
        let sql = `
            insert into word_translates(en_type,cn_name,create_time,own_mark,word_id)
            values (?,?,?,?,?)
        `
        return new Promise(async (resolve, reject) => {
            const conn = await $PoolConn();
            conn.query(sql, params, (err) => {
                if (err) {
                    Response.code = 600
                    Response.message = "db insert error " + sql;
                    resolve(Response)
                } else {
                    Response.code = 0;
                    Response.message = "插入成功"
                    resolve(Response)
                }
                conn.release();
            })
            resolve(Response)
        })
    }

}

export default WordImpl