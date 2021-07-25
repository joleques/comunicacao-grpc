// package: 
// file: produto.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as produto_pb from "./produto_pb";

interface IProductServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    list: IProductServiceService_IList;
    save: IProductServiceService_ISave;
    getProduct: IProductServiceService_IgetProduct;
}

interface IProductServiceService_IList extends grpc.MethodDefinition<produto_pb.Empty, produto_pb.ProductList> {
    path: "/ProductService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<produto_pb.Empty>;
    requestDeserialize: grpc.deserialize<produto_pb.Empty>;
    responseSerialize: grpc.serialize<produto_pb.ProductList>;
    responseDeserialize: grpc.deserialize<produto_pb.ProductList>;
}
interface IProductServiceService_ISave extends grpc.MethodDefinition<produto_pb.Product, produto_pb.Product> {
    path: "/ProductService/Save";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<produto_pb.Product>;
    requestDeserialize: grpc.deserialize<produto_pb.Product>;
    responseSerialize: grpc.serialize<produto_pb.Product>;
    responseDeserialize: grpc.deserialize<produto_pb.Product>;
}
interface IProductServiceService_IgetProduct extends grpc.MethodDefinition<produto_pb.ProductRequest, produto_pb.Product> {
    path: "/ProductService/getProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<produto_pb.ProductRequest>;
    requestDeserialize: grpc.deserialize<produto_pb.ProductRequest>;
    responseSerialize: grpc.serialize<produto_pb.Product>;
    responseDeserialize: grpc.deserialize<produto_pb.Product>;
}

export const ProductServiceService: IProductServiceService;

export interface IProductServiceServer {
    list: grpc.handleUnaryCall<produto_pb.Empty, produto_pb.ProductList>;
    save: grpc.handleUnaryCall<produto_pb.Product, produto_pb.Product>;
    getProduct: grpc.handleUnaryCall<produto_pb.ProductRequest, produto_pb.Product>;
}

export interface IProductServiceClient {
    list(request: produto_pb.Empty, callback: (error: grpc.ServiceError | null, response: produto_pb.ProductList) => void): grpc.ClientUnaryCall;
    list(request: produto_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: produto_pb.ProductList) => void): grpc.ClientUnaryCall;
    list(request: produto_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: produto_pb.ProductList) => void): grpc.ClientUnaryCall;
    save(request: produto_pb.Product, callback: (error: grpc.ServiceError | null, response: produto_pb.Product) => void): grpc.ClientUnaryCall;
    save(request: produto_pb.Product, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: produto_pb.Product) => void): grpc.ClientUnaryCall;
    save(request: produto_pb.Product, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: produto_pb.Product) => void): grpc.ClientUnaryCall;
    getProduct(request: produto_pb.ProductRequest, callback: (error: grpc.ServiceError | null, response: produto_pb.Product) => void): grpc.ClientUnaryCall;
    getProduct(request: produto_pb.ProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: produto_pb.Product) => void): grpc.ClientUnaryCall;
    getProduct(request: produto_pb.ProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: produto_pb.Product) => void): grpc.ClientUnaryCall;
}

export class ProductServiceClient extends grpc.Client implements IProductServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public list(request: produto_pb.Empty, callback: (error: grpc.ServiceError | null, response: produto_pb.ProductList) => void): grpc.ClientUnaryCall;
    public list(request: produto_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: produto_pb.ProductList) => void): grpc.ClientUnaryCall;
    public list(request: produto_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: produto_pb.ProductList) => void): grpc.ClientUnaryCall;
    public save(request: produto_pb.Product, callback: (error: grpc.ServiceError | null, response: produto_pb.Product) => void): grpc.ClientUnaryCall;
    public save(request: produto_pb.Product, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: produto_pb.Product) => void): grpc.ClientUnaryCall;
    public save(request: produto_pb.Product, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: produto_pb.Product) => void): grpc.ClientUnaryCall;
    public getProduct(request: produto_pb.ProductRequest, callback: (error: grpc.ServiceError | null, response: produto_pb.Product) => void): grpc.ClientUnaryCall;
    public getProduct(request: produto_pb.ProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: produto_pb.Product) => void): grpc.ClientUnaryCall;
    public getProduct(request: produto_pb.ProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: produto_pb.Product) => void): grpc.ClientUnaryCall;
}
