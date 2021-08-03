import React from 'react'
import { useTimer } from 'react-timer-hook';
import "./CountDown.style.scss";
function MyTimer({ expiryTimestamp }:any) {
    const {
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      resume,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    return (
        <div style={{textAlign: 'center'}}>
      
          <div className="section__timer">
            <span className="p-3 py-2 timer m-0" >{days}</span>:<span className="p-3 py-2 timer" >{hours}</span>:<span className="p-3 py-2 timer" >{minutes}</span>:<span className="p-3 py-2 timer">{seconds}</span>
          </div>
          {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
          {/* <button onClick={start}>Start</button>
          <button onClick={pause}>Pause</button>
          <button onClick={resume}>Resume</button> */}
          {/* <button onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 300);
            restart(time)
          }}>Restart</button> */}
        </div>
      ); 
    }

interface ICountDown{
    timeCustom:number
}

const CountDown:React.FC<ICountDown> = ({timeCustom}) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + timeCustom); // 10 minutes timer
    return (
        <MyTimer expiryTimestamp={time} />
    )
}

export default CountDown
