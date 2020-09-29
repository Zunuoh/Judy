import React, {useState, useEffect} from 'react';
import moment from 'moment';
import buildCalendar from "../components/build";
import '../styles/style.css';
// import dayStyles from '../styles/styles.js'
const CalendarScreen = ()=>{
    const [value, setValue] = useState(moment());
    const [calendar, setCalendar] = useState([]);
    
    
   
    useEffect(()=>{
        
        setCalendar(buildCalendar(value))
    }, [value]);

    function isSelected(day){
        return value.isSame(day, "day");
    }
    
    function beforeToday(day){
        return day.isBefore(new Date(), "day");
    }
    
    function isToday(day){
        return day.isSame(new Date(), "day");
    }
    
  function dayStyles(day){
        if (beforeToday(day)) return "before";
        if (isSelected(day)) return "selected";
        if (isToday(day)) return "today";
        return "";
    }
    
    return(
        <div>
          <h2> Calendar</h2>  

          {/* <div>
             {startDay.format("MM/DD")}
             {endDay.format("MM/DD")}
        </div> */}
        <div className="calendar">
        {calendar.map((week)=>(
           <div>
               {week.map((day)=>(
                   <div className="day" onClick={() => setValue(day)}>
                       <div className={dayStyles(day)}>{day.format("D").toString()}</div>
                   </div>
               ))}
           </div>
       ))}
        </div>
       
        </div>
      
    )
}

export default CalendarScreen;