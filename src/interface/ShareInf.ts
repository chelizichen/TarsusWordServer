import {
    getListBaseReq,
    getShareListRes,
    ShareDetail,
    ShareInfo,
    shareToUserReq,
    shareToUserRes,
    starShareReq
} from "../struct/Share";
import {baseRes, queryIdReq} from "../struct/User";
import {Stream, TarsusInterFace, TarsusMethod} from "tarsus/core/microservice";
import {$ExecuteQuery} from "../utils/queryBuilder";
import {Inject} from "tarsus/core/ioc";
import ShareService from "../service/ShareService";

interface ShareInf {
    getShareList(Request: getListBaseReq, Response: getShareListRes): Promise<getShareListRes>

    shareToUser(Request: shareToUserReq, Response: shareToUserRes): Promise<shareToUserRes>

    starShare(Request: starShareReq, Response: baseRes): Promise<baseRes>

    saveShare(Request: ShareInfo, Response: baseRes): Promise<baseRes>

    saveShareDetail(Request: ShareDetail, Response: baseRes): Promise<baseRes>

    delShare(Request: queryIdReq, Response: baseRes): Promise<baseRes>

}

@TarsusInterFace("share")
class ShareImpl implements ShareInf {

    @Inject(ShareService)
    private ShareService:ShareService

    @TarsusMethod
    @Stream("queryIdReq", "baseRes")
    async delShare(Request: queryIdReq, Response: baseRes): Promise<baseRes> {
        const id = Request.id;
        let sql = `
        delete share where id = ?
        `
        try {
            await $ExecuteQuery(sql, [id]);
            Response.message = "删除成功"
            Response.code = 0
        } catch (e) {
            {
                Response.code = 600;
                Response.message = "删除失败"
            }
        }
        return Response;
    }

    @TarsusMethod
    @Stream("getListBaseReq", "getShareListRes")
    getShareList(Request: getListBaseReq, Response: getShareListRes): Promise<getShareListRes> {
        return Promise.resolve(undefined);
    }

    @TarsusMethod
    @Stream("ShareInfo", "baseRes")
    async saveShare(Request: ShareInfo, Response: baseRes): Promise<baseRes> {
        const {user_id, create_time, img, update_time} = Request
        const sql = `
insert into share 
(user_id,create_time,img,update_time)
values
(?,?,?,?,?)
`;
        const params = [user_id, create_time, img, update_time]
        try {
            await $ExecuteQuery(sql, params);
            Response.message = "插入成功"
            Response.code = 0
        } catch (e) {
            {
                Response.code = 600;
                Response.message = "插入失败"
            }
        }
        return Response;
    }

    @TarsusMethod
    @Stream("ShareDetail", "baseRes")
    async saveShareDetail(Request: ShareDetail, Response: baseRes): Promise<baseRes> {
        const {content, word_ids_list, update_time, share_id} = Request
        const sql = `
insert into share 
(content,word_ids_list,update_time,share_id)
values
(?,?,?,?)
`;
        const params = [content, word_ids_list, update_time, share_id]
        try {
            await $ExecuteQuery(sql, params);
            Response.message = "插入成功"
            Response.code = 0
        } catch (e) {
            {
                Response.code = 600;
                Response.message = "插入失败"
            }
        }
        return Response;
    }



    @TarsusMethod
    @Stream("starShareReq", "baseRes")
    starShare(Request: starShareReq, Response: baseRes): Promise<baseRes> {
        return Promise.resolve(undefined);
    }
    @TarsusMethod
    @Stream("shareToUserReq", "shareToUserRes")
    async shareToUser(Request: shareToUserReq, Response: shareToUserRes): Promise<shareToUserRes> {
        const id:number = Request.user_id;
        const friend_ids = await this.ShareService.getFriendsById(id)
        return Promise.resolve(undefined);
    }
}