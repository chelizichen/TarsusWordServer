import {User} from "../struct/User";
import {$PoolConn} from "tarsus/core/database";
import * as lodash from 'lodash';
import moment from "moment";
import {CronJob, CronJobParameters} from "cron";

type user_id = string

type UserMap = Record<user_id, User>

let InitMethods = {}

const Cron = (time: string, init: boolean = false) => {
    return function (value, context: ClassMethodDecoratorContext) {
        context.addInitializer(function () {
            value = value.bind(this)
            InitMethods[context.name] = {
                onTick: value,
                runOnInit: value,
                start: true,
                timeZone: "Asia/Shanghai",
                cronTime: time
            }
        })
    }
}

const Schedule = (value: any, context: ClassDecoratorContext) => {
    context.addInitializer(() => {
        setImmediate(() => {
            for (let v in InitMethods) {
                const cron_config = InitMethods[v]
                // 初始化执行
                new CronJob(cron_config)
            }
        })
    })
}

@Schedule
class CacheServer {
    public userMap: UserMap = {}
    public userSql = 'select * from users'

    // 每一天刷新一次
    @Cron("*/20 * * * *", true)
    public async UserCacheMethod() {
        const conn = await $PoolConn();
        const that = this;
        conn.query(that.userSql, function (_, resu) {
            if (!resu.length) {
                return
            }
            delete that.userMap;
            console.log("START-----------开始同步用户表", moment().format("YYYY-MM-DD"))
            that.userMap = lodash.keyBy(resu, "id")
            console.log('同步数据',JSON.stringify(that.userMap))
            console.log('同步数据',resu.length,"条")
            console.log("END-----------同步用户表结束", moment().format("YYYY-MM-DD"))

        })
    }
}

export default new CacheServer();