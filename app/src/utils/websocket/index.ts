import AWS from 'aws-sdk';
import {isNotExist,removeElem} from   '../common';

const SOCKET_API_VERSION = '2018-11-29';

export class WebSocket {
    private static connections:string[]=[];

    private connectionId:string="";
    
    private apigwManagementApi: AWS.ApiGatewayManagementApi = new AWS.ApiGatewayManagementApi({
        apiVersion: SOCKET_API_VERSION,
        endpoint: 'http://localhost:3001' // for serverless offline
    });

    constructor(connectionId:string,domainName: string, stage?: string) {
        this.connectionId = connectionId;
        if (domainName !== 'localhost') {
            this.apigwManagementApi = new AWS.ApiGatewayManagementApi({
                apiVersion: '2018-11-29',
                endpoint: domainName + '/' + stage // for deployed API staging
            });
        }
        WebSocket.setConnectionId(this.connectionId)
    }

    async send(data: any) {
        // convert data to string
        if(typeof data !=="string")
            data = JSON.stringify(data);
        return this.apigwManagementApi.postToConnection({ ConnectionId: this.connectionId, Data: data }).promise();
    }

    static get connectionsCount(){
        console.log(`ASIF: WebSocket -> getconnectionsCount -> WebSocket.connections.length`, WebSocket.connections.length);
        return WebSocket.connections.length;
    }

    static get connectionsList(){
        console.log(`ASIF: WebSocket -> getconnections -> WebSocket.connections`, WebSocket.connections);
        return WebSocket.connections;
    }

    static setConnectionId (connectionId: string){
        if(isNotExist(WebSocket.connections,connectionId)){
            WebSocket.connections.push(connectionId);
            console.log(`ASIF: WebSocket -> setconnectionId -> WebSocket.connections`, WebSocket.connections);
        }
    }
    
    static removeConnection(connectionId:string){
        console.log(`ASIF: WebSocket -> before removeConnection -> WebSocket.connections`, WebSocket.connections);
        removeElem(WebSocket.connections,connectionId);
        console.log(`ASIF: WebSocket -> after removeConnection -> WebSocket.connections`, WebSocket.connections);
    }
    getConnectionId(){
        return this.connectionId;
    }
}