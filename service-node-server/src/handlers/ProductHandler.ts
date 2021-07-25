import * as grpc from 'grpc';
import { Empty, Product, ProductList, ProductRequest } from '../../../infra/protobuf/produto_pb'
import { IProductServiceServer } from '../../../infra/protobuf/produto_grpc_pb';
import DataBase from './DataBase';

export class ProductHandler implements IProductServiceServer {

    private dataBase: DataBase

    constructor(dataBase: DataBase){
        this.dataBase = dataBase;
    }

    save = (req: grpc.ServerUnaryCall<Product>, callback: grpc.sendUnaryData<Product>): void => {
        const product: Product = new Product();
        product.setId(this.dataBase.lastId());
        product.setDescription(req.request.getDescription());
        product.setValue(req.request.getValue());
        this.dataBase.addProduct(product);
        console.log("Add na base......");
        callback(null, product);
    }

    getProduct = (req: grpc.ServerUnaryCall<ProductRequest>, callback: grpc.sendUnaryData<Product>): void => {
        const products = this.dataBase.getAll();
        let objReturn = null;

        products.forEach(product => {
            if (product.getId() == req.request.getId()) {
                objReturn = product;
                return;
            }

        });
        console.log("Produto buscado.....");
        callback(null, objReturn);
    };

    list = (call: grpc.ServerUnaryCall<Empty>, callback: grpc.sendUnaryData<ProductList>): void => {
        const reply: ProductList = new ProductList();

        const products: Array<Product> = this.dataBase.getAll();

        reply.setProductsList(products);

        console.log("Retorna todos.....");
        callback(null, reply);
    };


}
