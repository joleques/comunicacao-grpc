## Comunicação usando gRPC ###

### O que é gRPC?

    É um framework de comunicação entre serviços criado pela Google para aumentar a performace na comunicação entre os microservices.
    A arquitetura gRPC usa o formato de mensagem protobuf (buffers de protocolo), que é altamente compactado e eficiente para serializar dados estruturados.

    As APIs baseadas em RPC são ótimas para ações (ou seja, procedimentos ou comandos) e pode servir como uma alternativa mais eficiente do que uma API REST.


### Vantagens

    - HTTP/2 - Estrutura leve e de alto desempenho;
    - Protocol Buffers por padrão;
    - Multi plataforma usando mesma interface de contratos;
    - Recursos disponíveis para várias linguagens;
    - Oferece suporte a chamadas streaming do client, server e - bidirecionais;
    - Redução do uso de rede através da serialização do Protobuf;
    - Contrato definido entre cliente e server; 

### Desvantagens

    - Pouca documentação; 
    - Suporte limitado ao navegador;

## POCS

    Foi desenvolvido duas POCS, uma em Typescript (client e server) em outra em Java (client e server) para testar a comuniação entre os serviços usando gRPC. Abaixo como essa comunicação deve ocorrer.

![image](./documentacao/arq_services.png)

### Typescript



## Referências ##

    - [gRPC](https://grpc.io/)
    - [Protocol Buffers](https://developers.google.com/protocol-buffers/docs/proto)
    - [gRPC com node](https://medium.com/xp-inc/introdu%C3%A7%C3%A3o-ao-grpc-com-node-js-98f6a4ede11)
    - [gRPC com Typescript](https://adnanahmed.info/blog/2019/11/01/grpc-with-nodejs-typescript/)
    - [Video 1](https://www.youtube.com/watch?v=QyyMjF764mo&t=2757s)
    - [Video 2](https://www.youtube.com/watch?v=lU7OrUeaqD0)