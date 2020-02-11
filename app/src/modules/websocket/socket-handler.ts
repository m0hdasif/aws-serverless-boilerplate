import 'module-alias/register'; // for allowing @utils alias in js
import {WebSocket} from '@utils/websocket';

// ! It is not maintaining connections across inter-lambda functions
export async function lambda4 (event: any, context: any){
    try {
        let data ="";
        const {connectionId,domainName,stage,eventType}= event.requestContext;
        let webSockets = new WebSocket(connectionId,domainName,stage);
        if (eventType !== 'DISCONNECT' && eventType !== 'CONNECT') {
            data = JSON.parse(event.body).data
            console.log(`ASIF: if data`, data);
        }else if(eventType==='CONNECT'){
            console.log(`ASIF: CONNECT`);
        }else{
            WebSocket.removeConnection(connectionId);
        }

        if(eventType!=='DISCONNECT'){
            let sendResponse = await webSockets.send(data);

        }
        console.log(`ASIF:after send Response  webSockets.connectionsCount`, WebSocket.connectionsCount);

        console.log(`ASIF: webSockets.connections`, WebSocket.connectionsList);
        
        return {};
    } catch (error) {
        console.log(`ASIF: error`, error);
        return {};
    }

};

export async function lambda5(event: any, context: any){
    console.log(`ASIF: WebSocket.connectionsCount`, WebSocket.connectionsCount);
    try {
        const {connectionId,domainName,stage}= event.requestContext;
        let webSockets = new WebSocket(connectionId,domainName,stage);
        let data = JSON.parse(event.body).data
        let sendResponse = await webSockets.send(data);
        console.log(`ASIF: sendResponse`, sendResponse);
        console.log(`ASIF:after send Response  webSockets.connectionsCount`, WebSocket.connectionsCount);

        console.log(`ASIF: webSockets.connections`, WebSocket.connectionsList);
        // the return value is ignored when this function is invoked from WebSocket gateway
        return {};
    } catch (error) {
        console.log(`ASIF: error`, error);
        return {};
    }
};