import { useEffect, useState, useRef } from "react";
import timerKitchen from '../../img/kitchen_timer.gif'

export default function Cronometro({wait}) {
  
    const lapso = wait.date;
   

    const [time, setTime] = useState()
    
    const isMountedRef = useRef(true)
    useEffect(() => () => { isMountedRef.current = false }, [])  


      useEffect(() => {
        const mytime = Date.now();
        const inicio = Math.floor((mytime - lapso)/1000);
        setTime(inicio);
        setInterval(() => {
            setTime(preview => preview + 1)     
        }, 1500);
       
        
      }, [lapso]);

    
    return (
      <div className="time" >
        <img className='timer-kitchen' src={timerKitchen} alt='timer-kitchen' />
        <span >
            {Math.floor((time/60)%60)} : 
            {time%60 < 10 ? ' 0'+time%60 : ' '+time%60}
        </span>
      </div>
    );
  }
  
 