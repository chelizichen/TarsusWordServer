import {LoadInterface, LoadTaro, LoadStruct, LoadServer, TarsusMsApplication} from 'tarsus/core/microservice';
import WordImpl from './interface/Word';
import RecordImpl from "./interface/Record";
import PlanImpl from "./interface/PlanInf";


@TarsusMsApplication
class MicroService {
    static main() {
        LoadInterface([WordImpl, RecordImpl, PlanImpl]);
        LoadTaro()
        LoadStruct()
        LoadServer();
    }
}

MicroService.main()