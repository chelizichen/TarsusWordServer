import {User} from "./User";

const {TarsusReadStream} = require("tarsus-cli/taro");

export class Plan {
    public id: number;
    public user_id: string;
    public plan_mark: string;
    public plan_start_time: string;
    public plan_end_time: string;
    public create_time: string;

    constructor(...args: any[]) {
        const _TarsusReadStream = new TarsusReadStream("Plan", args);
        this.id = _TarsusReadStream.read_int(1);
        this.user_id = _TarsusReadStream.read_string(2);
        this.plan_mark = _TarsusReadStream.read_string(3);
        this.plan_start_time = _TarsusReadStream.read_string(4);
        this.plan_end_time = _TarsusReadStream.read_string(5);
        this.create_time = _TarsusReadStream.read_string(6);
    }
};

export class PlanDetail {
    public id: number;
    public plan_id: number;
    public plan_dates: Array<PlanWords>;

    constructor(...args: any[]) {
        const _TarsusReadStream = new TarsusReadStream("PlanDetail", args);
        this.id = _TarsusReadStream.read_int(1);
        this.plan_id = _TarsusReadStream.read_int(2);
        this.plan_dates = _TarsusReadStream.read_list(3, "List<PlanWords>");
    }
};

export class PlanWords {
    public word_ids: Array<number>;
    public date: string;

    constructor(...args: any[]) {
        const _TarsusReadStream = new TarsusReadStream("PlanWords", args);
        this.word_ids = _TarsusReadStream.read_list(1, "List<int>");
        this.date = _TarsusReadStream.read_string(2);
    }
};

export class getUserPlanByIdRes {
    public user: User;
    public data: Array<PlanWords>;
    public code: number;
    public total: number;
    public message: string;

    constructor(...args: any[]) {
        const _TarsusReadStream = new TarsusReadStream("getUserPlanByIdRes", args);
        this.user = _TarsusReadStream.read_struct(1, "User");
        this.data = _TarsusReadStream.read_list(2, "List<PlanWords>");
        this.code = _TarsusReadStream.read_int(3);
        this.total = _TarsusReadStream.read_int(4);
        this.message = _TarsusReadStream.read_string(5);
    }
};
