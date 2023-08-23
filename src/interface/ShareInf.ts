import {getListBaseReq, getShareListRes, ShareDetail, ShareInfo, shareToUserReq, starShareReq} from "../struct/Share";
import {baseRes, queryIdReq} from "../struct/User";
import {Stream, TarsusInterFace, TarsusMethod} from "tarsus/core/microservice";

interface ShareInf {
    getShareList(Request: getListBaseReq, Response: getShareListRes): Promise<getShareListRes>

    shareToUser(Request: shareToUserReq, Response: baseRes): Promise<baseRes>

    starShare(Request: starShareReq, Response: baseRes): Promise<baseRes>

    saveShare(Request: ShareInfo, Response: baseRes): Promise<baseRes>

    saveShareDetail(Request: ShareDetail, Response: baseRes): Promise<baseRes>

    delShare(Request: queryIdReq, Response: baseRes): Promise<baseRes>

}

@TarsusInterFace("share")
class ShareImpl implements ShareInf {
    @TarsusMethod
    @Stream("queryIdReq", "baseRes")
    delShare(Request: queryIdReq, Response: baseRes): Promise<baseRes> {
        return Promise.resolve(undefined);
    }

    @TarsusMethod
    @Stream("getListBaseReq", "getShareListRes")
    getShareList(Request: getListBaseReq, Response: getShareListRes): Promise<getShareListRes> {
        return Promise.resolve(undefined);
    }

    @TarsusMethod
    @Stream("ShareInfo", "baseRes")
    saveShare(Request: ShareInfo, Response: baseRes): Promise<baseRes> {
        return Promise.resolve(undefined);
    }

    @TarsusMethod
    @Stream("ShareDetail", "baseRes")
    saveShareDetail(Request: ShareDetail, Response: baseRes): Promise<baseRes> {
        return Promise.resolve(undefined);
    }

    @TarsusMethod
    @Stream("shareToUserReq", "baseRes")
    shareToUser(Request: shareToUserReq, Response: baseRes): Promise<baseRes> {
        return Promise.resolve(undefined);
    }

    @TarsusMethod
    @Stream("starShareReq", "baseRes")
    starShare(Request: starShareReq, Response: baseRes): Promise<baseRes> {
        return Promise.resolve(undefined);
    }
}