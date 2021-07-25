// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var produto_pb = require('./produto_pb.js');

function serialize_Empty(arg) {
  if (!(arg instanceof produto_pb.Empty)) {
    throw new Error('Expected argument of type Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Empty(buffer_arg) {
  return produto_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Product(arg) {
  if (!(arg instanceof produto_pb.Product)) {
    throw new Error('Expected argument of type Product');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Product(buffer_arg) {
  return produto_pb.Product.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ProductList(arg) {
  if (!(arg instanceof produto_pb.ProductList)) {
    throw new Error('Expected argument of type ProductList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ProductList(buffer_arg) {
  return produto_pb.ProductList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ProductRequest(arg) {
  if (!(arg instanceof produto_pb.ProductRequest)) {
    throw new Error('Expected argument of type ProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ProductRequest(buffer_arg) {
  return produto_pb.ProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProductServiceService = exports.ProductServiceService = {
  list: {
    path: '/ProductService/List',
    requestStream: false,
    responseStream: false,
    requestType: produto_pb.Empty,
    responseType: produto_pb.ProductList,
    requestSerialize: serialize_Empty,
    requestDeserialize: deserialize_Empty,
    responseSerialize: serialize_ProductList,
    responseDeserialize: deserialize_ProductList,
  },
  save: {
    path: '/ProductService/Save',
    requestStream: false,
    responseStream: false,
    requestType: produto_pb.Product,
    responseType: produto_pb.Product,
    requestSerialize: serialize_Product,
    requestDeserialize: deserialize_Product,
    responseSerialize: serialize_Product,
    responseDeserialize: deserialize_Product,
  },
  getProduct: {
    path: '/ProductService/getProduct',
    requestStream: false,
    responseStream: false,
    requestType: produto_pb.ProductRequest,
    responseType: produto_pb.Product,
    requestSerialize: serialize_ProductRequest,
    requestDeserialize: deserialize_ProductRequest,
    responseSerialize: serialize_Product,
    responseDeserialize: deserialize_Product,
  },
};

exports.ProductServiceClient = grpc.makeGenericClientConstructor(ProductServiceService);
