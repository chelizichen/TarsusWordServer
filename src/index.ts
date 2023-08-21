import { LoadInterface, LoadTaro, LoadStruct, LoadServer, TarsusMsApplication } from 'tarsus/core/microservice';
import WordImpl from './interface/Word';
import RecordImpl from "./interface/Record";


@TarsusMsApplication
class MicroService {
    static main() {
        LoadInterface([WordImpl,RecordImpl]);
        LoadTaro()
        LoadStruct()
        LoadServer();
    }
}

MicroService.main()