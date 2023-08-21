import {queryIdReq} from "../struct/User";
import {getUserPlanByIdRes} from "../struct/Plan";
import {Stream, TarsusInterFace, TarsusMethod} from "tarsus/core/microservice";

interface PlanInf {
    getUserPlanById(Request: queryIdReq, Response: getUserPlanByIdRes): Promise<getUserPlanByIdRes>
}

@TarsusInterFace("plan")
class PlanImpl implements PlanInf {
    @TarsusMethod
    @Stream("queryIdReq", "getUserPlanByIdRes")
    getUserPlanById(Request: queryIdReq, Response: getUserPlanByIdRes): Promise<getUserPlanByIdRes> {
        return Promise.resolve(undefined);
    }
}

export default PlanImpl;