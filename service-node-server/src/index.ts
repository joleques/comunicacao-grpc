import 'dotenv/config';
import * as grpc from 'grpc';
import { ProductHandler } from './handlers/ProductHandler';
import { ProductServiceService } from '../../infra/protobuf/produto_grpc_pb';
import {  Product } from '../../infra/protobuf/produto_pb'
import DataBase from './handlers/DataBase';

const port: string | number = process.env.PORT || 50051;

type StartServerType = () => void;
export const startServer: StartServerType = (): void => {
    // create a new gRPC server
    const server: grpc.Server = new grpc.Server();

    const dataBase: DataBase = new DataBase();
    const productHandler: ProductHandler = new ProductHandler(dataBase);

    // register all the handler here...
    server.addService(ProductServiceService, productHandler);

    // define the host/port for server
    server.bindAsync(
        `0.0.0.0:${ port }`,
        grpc.ServerCredentials.createInsecure(),
        (err: Error, port: number) => {
            if (err != null) {
                return console.error(err);
            }
            console.log(`gRPC listening on ${ port }`);
        },
    );

    // start the gRPC server
    server.start();
};


startServer();