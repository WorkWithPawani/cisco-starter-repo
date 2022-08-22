import React, { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import {textNoDataAvailable, ipType, ipDetail} from './constants/constants';
import './DataPointCardCollection.css';

const client = new W3CWebSocket('ws://localhost:55455');

function DataPointCardCollection() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [ipv4v6, setIpv4v6] = useState([]);
    const [ipv4, setIpv4] = useState([]);
    const ipDetails = [{"id": "ipv4", "name": "IPv4", "data": ipv4}, {"id": "ipv4v6", "name": "IPv4(v6)", "data": ipv4v6}];
  
    useEffect(() => {
      fetch("https://api64.ipify.org?format=json")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setIpv4v6(result.ip);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
        fetch("https://api.ipify.org?format=json")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setIpv4(result.ip);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
        client.onopen = () => {
            console.log('WebSocket Client Connected');
          };
          client.onmessage = (message) => {
            console.log("websocket message", message);
        };
    }, [])
  
    return (
        <div className="data-point-container">
        {/* {dataPoints.forEach((datapoint)=>{ return <DataPointCard name={datapoint.name} data={datapoint.data} />})} */}
        {(ipDetails && ipDetails.length) ? ipDetails.map(ip => {
        return (
          <div key={ip.id}>
            <div className='data-point-card'>
            <h2>{ipType} {ip.name}</h2>
            <hr />
            <h2>{ipDetail} {ip.data}</h2>
            </div>
          </div>
        );
      }) : (<h1>{textNoDataAvailable}</h1>)}
        </div>
    )
}
export default DataPointCardCollection;
