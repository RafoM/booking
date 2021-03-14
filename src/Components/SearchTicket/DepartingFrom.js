import React,{useState,useEffect} from 'react'
import {useSelector, useDispatch,connect} from 'react-redux'
import {chooseFrom,swap,getDest,getTo,chooseAirportDeparting,departingCity} from "../../Redux/Actions/index"
import './Styles/DepartingFrom.css'


function DepartingFrom(props) {

    const [searchCity,setSearchCity] = useState("")
    
    const departingDirections = useSelector(state=>state.departingFrom.from)
    const ticket = useSelector(state=>state.ticket)

    const dispatch = useDispatch()
    

    useEffect(()=>{
            if(searchCity === ""){
                dispatch(chooseFrom(""))
            }
            dispatch(getDest(searchCity))

    },[searchCity])


    function swapFun(){
        dispatch(swap(ticket.from,ticket.to))
        console.log("ticket-from = " + ticket.to.cityName)
        console.log("ticket-to = " + ticket.from.cityName)
        dispatch( getDest(ticket.to.cityName))
        dispatch(getTo(ticket.from.cityName))

       
        

    }

    console.log(departingDirections)


    return (
        <div id="departingFrom" className={'col-xl col-lg-3 col-md-6 searchInput'}>
            <div id="chosen-departing-city" >
                <div id="departing-input-container">
                    <input 
                        id="departing-input"
                        type="text"
                        value={ticket.from.cityName}
                        onChange={(e)=>{setSearchCity(e.target.value);dispatch(departingCity(e.target.value))}}
                        autocomplete="off"
                        />
                </div>
                <div id="swip-container">
                    <p id="airport">{ticket.from.cityIataCode}</p>
                    <img 
                    id="swip" src="icons\swip.png"
                    onClick={()=>{swapFun()}}
                    />
                </div>         
            </div>





            <div id="departing-lists" className={'departing-list'}>
                <ul className={'pl-0'}>
                   {    
                        departingDirections.slice(0,5).map((direction,index)=>{

                                if(!direction.airports || searchCity === ""){
                                    return <li className={'departing-list-item'}
                                            key={index}
                                            onClick={()=>{dispatch(chooseFrom(direction));setSearchCity(direction.cityName)}}
                                            id="departing-from-city"
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
                                        <ul  key={index}
                                             onClick={()=>{dispatch(chooseFrom(direction));setSearchCity(direction.cityName)}}
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
                                                                return<li  className={'departing-list-item'}
                                                                    onClick={()=>{dispatch(chooseFrom(direction));dispatch(chooseAirportDeparting(airport.airportName,airport.airportIataCode))}}
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
                        //     map((direction,index)=>{
                        //             return <li 
                        //         key={index} 
                        //         onClick={()=>dispatch(chooseFrom(direction))}
                        //         id="departing-from-city"
                        //         >
                        //                     <span id="direction">
                        //                         <p id="city">
                        //                             {direction.cityName},
                        //                         </p>
                        //                         <p id="country">
                        //                             {direction.countryName}
                        //                         </p>   
                        //                     </span>
                        //                     <p id="airport">
                        //                                     {direction.cityIataCode}
                        //                     </p>
                        //                 </li>    
                            
                        // })
                    } 
                </ul>
                
            </div>
        </div>
    )
}

export default connect(state=>state)(DepartingFrom)
