import React,{useState,useEffect} from 'react'
import {chooseTo,getTo,chooseAirportArriving,arrivingCity} from '../../Redux/Actions/index'
import {useSelector, useDispatch} from 'react-redux'
import './Styles/ArrivingTo.css'


function ArrivingTo() {

    const [searchCity,setSearchCity] = useState("")

    const arrivingDirections = useSelector(state=>state.arrivingTo.to)
    const ticket = useSelector(state=>state.ticket)

    const dispatch = useDispatch()


    function displayList(id,display) {
        let x = document.getElementById(id)
        x.style.display = display;
    }

    function hideList(id,display) {
        let x = document.getElementById(id)
        x.style.display = display
    }


    useEffect(()=>{
        if(searchCity === ""){
            dispatch(chooseTo(""))
        }
        dispatch(getTo(searchCity))

    },[searchCity]) 

    return (
        <div id="arrivingTo" className={'col-xl col-lg-3 col-md-6 searchInput'}>
            <div id="chosen-arriving-city">
                    <input 
                        id="arriving-input"
                        type="text"
                        value={ticket.to.cityName}
                        onChange={(e)=>{setSearchCity(e.target.value);dispatch(arrivingCity(e.target.value))}}
                        autocomplete="off"
                        />
                    <div id="swip-container">
                        <p id="airport">{ticket.to.cityIataCode}</p>
                    </div>         
            </div>

            <div id="arriving-lists" className={'departing-list'}>
                <ul className={'pl-0'}>
                   {
                       arrivingDirections.slice(0,5).map((direction,index)=>{
                            if(!direction.airports || searchCity === ""){
                                return <li className={'departing-list-item'}
                                        key={index}
                                        onClick={()=>{setSearchCity(direction.cityName);dispatch(chooseTo(direction))}}
                                        >
                                                    <span id="direction">
                                                        <p id="city">
                                                            {direction.cityName},
                                                        </p>
                                                        <p id="country">
                                                            {direction.countryName}
                                                        </p>
                                                    </span>
                                                    <p id="airport">
                                                        {direction.cityIataCode}
                                                    </p>
                                        </li>
                            }
                            else{
                                return <li className={'departing-list-item'}>
                                    <ul key={index}
                                    onClick={()=>{setSearchCity(direction.cityName);dispatch(chooseTo(direction))}}
                                    className={"departing-list-cities pl-0"} >
                                        <li  className={'departing-list-item'}>
                                                <span id="direction">
                                                    <p id="city">
                                                        {direction.cityName},
                                                    </p>
                                                    <p id="country">
                                                        {direction.countryName}
                                                    </p>
                                                </span>
                                                <p id="airport">
                                                    {direction.cityIataCode}
                                                </p>


                                        </li>
                                        <ul className={'airport-list p-0'}>
                                            {

                                                direction.airports.map((airport,airportIndex)=>{
                                                    if(direction.cityIataCode !==  airport.airportIataCode)
                                                    return<li className={'departing-list-item'}
                                                        onClick={()=>{dispatch(chooseTo(direction));dispatch(chooseAirportArriving(airport.airportName,airport.airportIataCode))}}
                                                        key={airportIndex}>
                                                        <p id="airportL">{airport.airportName}</p>
                                                        <p id="airportLCode">{airport.airportIataCode}</p>
                                                    </li>
                                                })
                                            }
                                        </ul>


                                </ul>
                                </li>
                            }
                        })
                    } 
                </ul>
                
            </div>
        </div>
    )
}

export default ArrivingTo
