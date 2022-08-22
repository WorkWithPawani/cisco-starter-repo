import {dataPoints} from './constants/dataPoints';
import DataPointCard from './DataPointCard';
import {textNoDataAvailable} from './constants/constants';
import './DataPointCardCollection.css';

function DataPointCardCollection() {
    return (
        <div className="data-point-container">
        {/* {dataPoints.forEach((datapoint)=>{ return <DataPointCard name={datapoint.name} data={datapoint.data} />})} */}
        {(dataPoints && dataPoints.length) ? dataPoints.map(dataPoint => {
        return (
          <div key={dataPoint.id}>
            <DataPointCard name={dataPoint.name} data={dataPoint.data} id={dataPoint.id}/>
            <div className='data-point-card'>
            <h2>name: {dataPoint.name}</h2>
            <hr />
            <h2>data: {dataPoint.data}</h2>
            </div>
          </div>
        );
      }) : (<h1>{textNoDataAvailable}</h1>)}
        </div>
    )
}
export default DataPointCardCollection;
