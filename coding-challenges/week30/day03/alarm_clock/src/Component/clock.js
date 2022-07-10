import { useEffect, useState } from "react"




function Clock(props){

    const [currenttime, setcurrenttime] = useState(new Date()) //23.55.45.56655
    const [alarm, setAlarm] = useState(null) //23.56.00
    const [intervaltimeId, setintervaltimeId] = useState()

    useEffect(()=>{
        const intervaltimeId = setInterval(()=>{

            setcurrenttime(new Date())   

        }, 1000)
        return ()=>{
            clearInterval(intervaltimeId)
        }            
    },[])

    useEffect(() => {
        // console.log("Alarm", alarm, "Time", currenttime)
        // console.log("Alarm MS", alarm.getTime(), "Time", currenttime.getTime())
        if (alarm && alarm.toTimeString() === currenttime.toTimeString()) {
            alert("Alarm!!")
        }
    })

    

    useEffect(() => {

        
        const alarmDate = new Date( `${currenttime.toDateString()} ${props.alarm}:00` )
        console.log("Test", alarmDate)
        setAlarm(alarmDate)
        // const alarm = props.alarm.replace(/^(?:00:)?0?/, '');  
        // const time = currenttime.getHours() + ':' +  currenttime.getMinutes() 
        // console.log(alarm,time);
        // if (alarm == time ){
        //     alert("uth jaa")
        // } 

    }, [props.alarm])
    
    
    

    return(
        <main>
            <section className='text-center'>
               <h1>Clock</h1>
            </section>
            <section>
                <h3>{currenttime.toLocaleTimeString()}</h3> 
            </section>  
        </main>
    )
}

export {Clock}