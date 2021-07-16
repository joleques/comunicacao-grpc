import bodyParser from 'body-parser';
import express from 'express';
import { AddressInfo } from "net";
const PROTO_PATH = '../../infra/protobuf/produto.proto'
                   
const grpc = require('grpc')

const port = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const ProductService = grpc.load({root: __dirname, file: PROTO_PATH}).ProductService

const client = new ProductService('localhost:50051',
    grpc.credentials.createInsecure())


app.post(["/node/criar-produtos"], (req: express.Request, res: express.Response): void => {   
    console.log(req.body);
    res.send("Mensagem enviada....")
});

app.get(["/node/buscar-produtos"], (req: express.Request, res: express.Response): void => {   
    client.list({}, (error, products) => {
        if (!error) {
            console.log(products)
            res.send(products)
        } else {
            console.error(error)
            res.send(error)
        }
    })
    
});

const server = app.listen(port, (): void => {
    console.log(`Ready on http://localhost:${(server.address() as AddressInfo).port}`);
});
