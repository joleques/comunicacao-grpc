const PROTO_PATH = '../../infra/protobuf/produto.proto'
                   
const grpc = require('grpc')

const port = process.env.PORT || 8080;

const productsProto = grpc.load({root: __dirname, file: PROTO_PATH})

const notes = [
    { id: '1', description: 'Note 1', value: 'Content 1' },
    { id: '2', description: 'Note 2', value: 'Content 2' }
]

const server = new grpc.Server();

server.addService(productsProto.ProductService.service, {
    list: (_, callback) => {
        callback(null, notes)
    },
})


server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://127.0.0.1:50051')
server.start()
