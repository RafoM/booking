import React,{useState}from 'react'
import Calendar from 'react-calendar';
import './Styles/FlightDate.css'
import {setFlightDate,setTicketType} from '../../Redux/Actions/index'
import {useSelector, useDispatch} from 'react-redux'

function FlightDate(props) {

    const dispatch = useDispatch();
    let flightDate = useSelector(state=>state.ticket.flightDate)

    let [display_To,setDisplay_To] = useState("d-none")
    let [display_From,setDisplay_From] = useState("d-none")
    let [display_TwoWay,setDisplay_TwoWay] = useState("d-none")
    let [flightBack,setFlightBack] = useState(false)
    let [dateFlyTo, setDateFlyTo] = useState(new Date())
    let dayTo = dateFlyTo.getDate();
    let monthTo = dateFlyTo.getMonth() + 1;
    let yearTo = dateFlyTo.getFullYear();
    let [dateFlyFrom, setDateFlyFrom] = useState(new Date())
    let dayFrom = dateFlyFrom.getDate();
    let monthFrom = dateFlyFrom.getMonth() + 1;
    let yearFrom = dateFlyFrom.getFullYear();
    

    function displayToggleTo(display) {
        
        if(display != "d-none"){
            setDisplay_To("d-none")
            return display

        }
        else{
            setDisplay_To("d-block")
            return display
        }
    }

    function displayToggleFrom(display) {
        
        if(display != "d-none"){
            setDisplay_From("d-none")
            return display

        }
        else{
            setDisplay_From("d-block")
            return display
        }
    }

    function displayTwoWayCalendar(type){
        if(type === "two-way"){
            document.getElementById("two-way").style.backgroundColor = " #F6A800";
            document.getElementById("one-way").style.backgroundColor = " #FFFFFF";
            return display_TwoWay
        }
        else if(type === "one-way"){
            document.getElementById("one-way").style.backgroundColor = " #F6A800";
            document.getElementById("two-way").style.backgroundColor = " #FFFFFF";
            return display_TwoWay
        }
    }

    
    
    
    
    return (
        <div id="flight-date-body">
            <div id="flight-date-container">
                <div id="flight-date">
                    <input 
                    value={flightDate.date + "." + flightDate.month + "." + flightDate.year}
                    onClick={()=>{displayToggleTo(display_To)}}/>
                    <img src="icons/Vector.jpg"/>
                </div>
                <div id="calendar-container" >
                    <div id="trip-type-selector">
                            <button 
                            onClick={()=>{displayTwoWayCalendar("one-way");setFlightBack(false)}}
                            id="one-way">
                                Туда
                            </button>
                            <button 
                            onClick={()=>{displayTwoWayCalendar("two-way");setDateFlyFrom(dateFlyTo);setFlightBack(true)}}
                            id="two-way">
                                Обратно
                            </button>
                    </div>
                    <Calendar 
                    onChange={(value)=>{dispatch(setFlightDate(value.getDate(),value.getMonth(),value.getFullYear()));displayToggleTo(display_To);setDateFlyTo(value)}}
                    value={new Date()}
                    />
                    
                </div>
            </div>
            <div id="flight-date-container">
                <div id="flight-date">
                    <input 
                    value={dayFrom + "." + monthFrom + "."  + yearFrom}
                    />
                    <img src="icons/Vector.jpg"/>
                </div>
                <div id="calendar-container-two">
                    <div id="trip-type-selector">
                        Обратно
                    </div>
                    <Calendar 
                    onChange={(value)=>{setDateFlyFrom(value);dispatch(setTicketType(flightBack,value.getDate(),value.getMonth(),value.getFullYear()))}}
                    value={dateFlyFrom}
                    />
                    
                </div>
            </div>
            
        </div>
    )
}

export default FlightDate
