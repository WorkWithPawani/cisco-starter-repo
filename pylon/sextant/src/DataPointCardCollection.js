import React, { useEffect, useState } from "react";
import {dataPoints} from './constants/dataPoints';
import DataPointCard from './DataPointCard';
import {textNoDataAvailable} from './constants/constants';
import './DataPointCardCollection.css';

function DataPointCardCollection() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [ipv4v6, setIpv4v6] = useState([]);
    const [ipv4, setIpv4] = useState([]);
    const ipDetails = [{"id": "ipv4", "name": "IPv4", "data": ipv4}, {"id": "ipv4v6", "name": "IPv4(v6)", "data": ipv4v6}]
  
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
        )
    }, [])
  
    return (
        <div className="data-point-container">
        {/* {dataPoints.forEach((datapoint)=>{ return <DataPointCard name={datapoint.name} data={datapoint.data} />})} */}
        {(ipDetails && ipDetails.length) ? ipDetails.map(ip => {
        return (
          <div key={ip.id}>
            <DataPointCard name={ip.name} data={ip.data} id={ip.id}/>
            <div className='data-point-card'>
            <h2>IP Type: {ip.name}</h2>
            <hr />
            <h2>IP Details: {ip.data}</h2>
            </div>
          </div>
        );
      }) : (<h1>{textNoDataAvailable}</h1>)}
        </div>
    )
}
export default DataPointCardCollection;
