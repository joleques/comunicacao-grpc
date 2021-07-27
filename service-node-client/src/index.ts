import bodyParser from 'body-parser';
import express from 'express';
import { AddressInfo } from "net";
import { ProductServiceClient } from "../../infra/protobuf/produto_grpc_pb";
import { Empty, Product, ProductRequest } from '../../infra/protobuf/produto_pb';
                   
const grpc = require("../../infra/node_modules/grpc");

const port = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const credentials = grpc.credentials.createInsecure();

const client = new ProductServiceClient('localhost:50051', credentials);

app.post(["/node/produto"], (req: express.Request, res: express.Response): void => {   
    const product: Product = new Product();
    product.setDescription(req.body.description);
    product.setValue(req.body.value);

    client.save(product, (error, product) => {
        console.log("Produto criado.....")
        res.send({
            id: product.getId(),
            description: product.getDescription(),
            value: product.getValue()
        })
    })
});


app.get(["/node/buscar-produtos"], (req: express.Request, res: express.Response): void => {   

    client.list(new Empty(), (error, products) => {
        const returnObj = []
        if (!error) {
            products.getProductsList().forEach(element => {
                returnObj.push({
                    id: element.getId(),
                    description: element.getDescription()
                })               
            });
            res.send(returnObj)

        } else {
            console.error(error)
            res.send(error)
        }
    });
    
});

app.get(["/node/produto/:produtoId"], (req: express.Request, res: express.Response): void => {   
    const product = new ProductRequest();
    product.setId(req.params.produtoId);

    const prod = client.getProduct(product, (error, productReturn) => {
        if (!error) {
            res.send({
                id: productReturn.getId(),
                description: productReturn.getDescription()
            })
        } else {
            console.error(error)
            res.send(error)
        }

    })
});

const server = app.listen(port, (): void => {
    console.log(`Ready on http://localhost:${(server.address() as AddressInfo).port}`);
});

process.on("SIGTERM", async () => {
   server.close();
});