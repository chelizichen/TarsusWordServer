import { TarsusInterFace, TarsusMethod,Stream } from "tarsus/core/microservice";
import { getWordListReq, getWordListRes, getTranslateListReq, getTranslateListRes, DelReq, DelOrSaveRes, Word, WordTranslate } from "../struct/Word";


interface WordServerInf {
    getWordList(Request: getWordListReq, Response: getWordListRes): Promise<getWordListRes>
    getTranslateList(Request: getTranslateListReq, Response: getTranslateListRes): Promise<getTranslateListRes>
    delWordById(Request: DelReq, Response: DelOrSaveRes): Promise<DelOrSaveRes>
    saveWord(Request: Word, Response: DelOrSaveRes): Promise<DelOrSaveRes>
    saveTranslate(Request: WordTranslate, Response: DelOrSaveRes): Promise<DelOrSaveRes>
}

@TarsusInterFace("word")
class WordImpl implements WordServerInf {
    @TarsusMethod
    @Stream("getWordListReq", "getWordListRes")
    getWordList(Request: getWordListReq, Response: getWordListRes): Promise<getWordListRes> {
        return new Promise((resolve,reject)=>{
            resolve(Response)
        })
    }
    @TarsusMethod
    @Stream("getTranslateListReq", "getTranslateListRes")
    getTranslateList(Request: getTranslateListReq, Response: getTranslateListRes): Promise<getTranslateListRes> {
        return new Promise((resolve,reject)=>{
            resolve(Response)
        })
    }
    @TarsusMethod
    @Stream("DelReq", "DelOrSaveRes")
    delWordById(Request: DelReq, Response: DelOrSaveRes): Promise<DelOrSaveRes> {
        return new Promise((resolve,reject)=>{
            resolve(Response)
        })
    }
    @TarsusMethod
    @Stream("Word", "DelOrSaveRes")
    saveWord(Request: Word, Response: DelOrSaveRes): Promise<DelOrSaveRes> {
        return new Promise((resolve,reject)=>{
            resolve(Response)
        })
    }
    @TarsusMethod
    @Stream("WordTranslate", "DelOrSaveRes")
    saveTranslate(Request: WordTranslate, Response: DelOrSaveRes): Promise<DelOrSaveRes> {
        return new Promise((resolve,reject)=>{
            resolve(Response)
        })
    }

}

export default WordImpl