import {baseRes, getCurrRecordLenRes, getUserRecordRes, queryIdReq, setRecordReq} from "../struct/Record";
import {Stream, TarsusInterFace, TarsusMethod} from "tarsus/core/microservice";

interface Record {
    getUserRecord(Request: queryIdReq, Response: getUserRecordRes): Promise<getUserRecordRes>

    addUserRecord(Request: queryIdReq, Response: baseRes): Promise<baseRes>

    delUserRecord(Request: queryIdReq, Response: baseRes): Promise<baseRes>

    setRecord(Request: setRecordReq, Response: baseRes): Promise<baseRes>

    getCurrRecordLen(Request: queryIdReq, Response: getCurrRecordLenRes): Promise<getCurrRecordLenRes>

}

@TarsusInterFace("record")
class RecordImpl implements Record {
    setRecord(Request: setRecordReq, Response: baseRes): Promise<baseRes> {
        throw new Error("Method not implemented.");
    }

    getCurrRecordLen(Request: queryIdReq, Response: getCurrRecordLenRes): Promise<getCurrRecordLenRes> {
        throw new Error("Method not implemented.");
    }

    @TarsusMethod
    @Stream('queryIdReq', 'baseRes')
    addUserRecord(Request: queryIdReq, Response: baseRes): Promise<baseRes> {
        return Promise.resolve(undefined);
    }

    @TarsusMethod
    @Stream('queryIdReq', 'baseRes')
    delUserRecord(Request: queryIdReq, Response: baseRes): Promise<baseRes> {
        return Promise.resolve(undefined);
    }

    @TarsusMethod
    @Stream('queryIdReq', 'getUserRecordRes')
    getUserRecord(Request: queryIdReq, Response: getUserRecordRes): Promise<getUserRecordRes> {
        return Promise.resolve(undefined);
    }

}

export default RecordImpl