import React, { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import './DataPointCard.css';
import LatencyDetails from "./LatencyDetails";

const client = new W3CWebSocket('ws://localhost:55455');

function DataPointCard() {
        const [currentlatencyData, setCurrentLatencyData] = useState([]);
        const [timeDifference, setTimeDifference] = useState([]);

        useEffect(() => {
            client.onopen = () => {
                console.log('WebSocket Client Connected');
              };
              client.onmessage = (message) => {
                setTimeDifference(Date.now() - message.timeStamp);
                setCurrentLatencyData(message.data);
            };
        }, [])
  
    return (
        <div className="data-point-container">
        <div className='latency-card data-point-card'>
        <h2>Latency Message Data: {currentlatencyData}</h2>
        <hr />
        <h2>Latency Time difference: {timeDifference}</h2>
        </div>
        </div>
    );
}

export default DataPointCard;
