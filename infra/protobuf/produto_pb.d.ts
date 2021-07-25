// package: 
// file: produto.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class Product extends jspb.Message { 
    getId(): string;
    setId(value: string): Product;
    getDescription(): string;
    setDescription(value: string): Product;
    getValue(): string;
    setValue(value: string): Product;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Product.AsObject;
    static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Product;
    static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
    export type AsObject = {
        id: string,
        description: string,
        value: string,
    }
}

export class ProductList extends jspb.Message { 
    clearProductsList(): void;
    getProductsList(): Array<Product>;
    setProductsList(value: Array<Product>): ProductList;
    addProducts(value?: Product, index?: number): Product;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductList.AsObject;
    static toObject(includeInstance: boolean, msg: ProductList): ProductList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductList;
    static deserializeBinaryFromReader(message: ProductList, reader: jspb.BinaryReader): ProductList;
}

export namespace ProductList {
    export type AsObject = {
        productsList: Array<Product.AsObject>,
    }
}

export class ProductRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): ProductRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProductRequest): ProductRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductRequest;
    static deserializeBinaryFromReader(message: ProductRequest, reader: jspb.BinaryReader): ProductRequest;
}

export namespace ProductRequest {
    export type AsObject = {
        id: string,
    }
}
