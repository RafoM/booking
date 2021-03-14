import ticketstate from '../States/ticket';
import React from 'react'
import { act } from 'react-dom/test-utils';

function ticketReducer(state = ticketstate,action) {
    let temp = {...state};
    
    if(action.type === "DEPARTINGFROM"){
        temp.from = action.direction
    }
    if(action.type === "ARRIVINGTO"){
        temp.to = action.direction
    }
    if(action.type === "DEPARTINGCITY"){
        temp.from = {
            cityName:"",
        }
        temp.from.cityName = action.city
        console.log(temp)
    }
    if(action.type === "ARRIVINGCITY"){
        temp.to = {
            cityName:"",
        }
        temp.to.cityName = action.city
        console.log(temp)
    }
    if(action.type === "SWIP"){
        let x = action.from;
        temp.from = action.to;
        temp.to = x;
    }
    
    if(action.type === "INCREASEQUANTITY"){
        if(action.age === "adult"){
            temp.quantity.adultQuantity += 1
        }
        else if(action.age === "child"){
            temp.quantity.childQuantity += 1
        }
        else if(action.age === "baby"){
            temp.quantity.babyQuantity += 1
        }
    }
    if(action.type === "DECREASEQUANTITY"){
        if(action.age === "adult"){
            if(temp.quantity.adultQuantity > 1){
                temp.quantity.adultQuantity -= 1
            }
        }
        else if(action.age === "child"){
            if(temp.quantity.childQuantity > 0){
                temp.quantity.childQuantity -= 1
            }
        }
        else if(action.age === "baby"){
            if(temp.quantity.babyQuantity > 0){
                temp.quantity.babyQuantity -= 1
            }
        }
    }
    if(action.type === "SETTICKETCLASS"){
        temp.class = action.ticketClass
        // console.log(temp)
    }
    if(action.type === "SETFLIGHTDATE"){
       temp.flightDate = action.date

    }
    if(action.type === "SETTICKETTYPE"){
        temp.flightBack = action.side
        if(action.side === true){
            temp.flightBackDate = action.date
        }
    }
    if(action.type === "CHOOSEAIRPORTFROM"){
        temp.from.airportName = action.airportName;
        temp.from.airportIataCode = action.airportIataCode;
        temp.from.cityIataCode = action.airportIataCode;
        console.log(temp)
    }
    if(action.type === "CHOOSEAIRPORTTO"){
        temp.to.airportName = action.airportName;
        temp.to.airportIataCode = action.airportIataCode;
        temp.to.cityIataCode = action.airportIataCode;
        console.log(temp)

    }
    return temp;
    
}

export default ticketReducer
