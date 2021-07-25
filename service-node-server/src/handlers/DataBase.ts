
import {  Product } from '../../../infra/protobuf/produto_pb'

export default class DataBase{

    private products: Array<Product> = [];

    public addProduct(product: Product): void{
        this.products.push(product);
    }

    public getAll(): Array<Product>{
        return this.products;
    }

    public lastId(): string{
        const lastId = 1 + this.products.length;
        return lastId.toString();
    }

}