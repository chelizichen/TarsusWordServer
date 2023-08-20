import { LoadInterface, LoadTaro, LoadStruct, LoadServer, TarsusMsApplication } from 'tarsus/core/microservice';
import WordImpl from './interface/Word';


@TarsusMsApplication
class MicroService {
    static main() {
        LoadInterface([WordImpl]);
        LoadTaro()
        LoadStruct()
        LoadServer();
    }
}

MicroService.main()