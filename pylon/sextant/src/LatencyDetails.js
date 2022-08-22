import {latencyMessageData, latencyTimeDifference} from './constants/constants';

function LatencyDetails(currentlatencyData, timeDifference) {
  return (
    <div className='data-point-card'>
        <h2>{latencyMessageData} + {currentlatencyData}</h2>
        <hr />
        <h2>{latencyTimeDifference} + {timeDifference}</h2>
     </div>

    
  );
}

export default LatencyDetails;
