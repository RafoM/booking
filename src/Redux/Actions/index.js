import axios from 'axios'
import {useSelector} from 'react-redux'

export function chooseFrom(direction){
    return{
        type:"DEPARTINGFROM",
        direction:direction
    }
}

export function departingCity(city){
    return{
        type:"DEPARTINGCITY",
        city:city
    }
}

export function arrivingCity(city){
    return{
        type:"ARRIVINGCITY",
        city:city
    }
}

export function chooseTo(direction){
    return{
        type:"ARRIVINGTO",
        direction:direction
    }
}

export function setDepartingCity(city){
    return{
        type:"SETDEPARTINGCITY",
        city:city
    }
}

export function setArrivingCity(city){
    return{
        type:"SETARRIVINGCITY",
        city:city
    }
}


export function swap(from,to){
    return{
        type:"SWIP",
        from:from,
        to:to,
    }
}

export function increaseQuantity(age){
    return{
        type:"INCREASEQUANTITY",
        age:age
    }
}

export function decreaseQuantity(age){
    return{
        type:"DECREASEQUANTITY",
        age:age
    }
}

export function setTicketClass(ticketClass){
    return{
        type:"SETTICKETCLASS",
        ticketClass:ticketClass
    }
}

export function setFlightDate(date){
    return{
        type:"SETFLIGHTDATE",
        date:date,
        // month:month,
        // year:year,
    }
}

export function setTicketType(side,date,month,year){
    return{
        type:"SETTICKETTYPE",
        side:side,
        date:date,
        month:month,
        year:year
    }
}

export function print(data){
    // console.log(data)
}

export const getDest = (e = "") => async dispatch => {
    if(e === ""){
        try {
            const res = await axios.get(`https://api.oneavia.ru/api/v1/auto_complete?query=`)
            dispatch({
                type: 'citis',
                cities: res.data.cities
            })
        } catch (e) {
            dispatch({
                type: 'errors',
                cities: console.log(e),
            })
        }
    }
    else{
        try {
            const res = await axios.get(`https://api.oneavia.ru/api/v1/auto_complete?query=${e}`)
            console.log(res.data.cities)
            dispatch({
                type: 'citis',
                cities: res.data.cities
            })
        } catch (e) {
            dispatch({
                type: 'errors',
                cities: console.log(e),
            })
        }
    }
}

export const getTo = (e = "") => async dispatch => {

    if(e === ""){
        try {
            const res = await axios.get(`https://api.oneavia.ru/api/v1/auto_complete?query=`)
            dispatch({
                type: 'citisTo',
                cities: res.data.cities
            })
        } catch (e) {
            dispatch({
                type: 'errors',
                cities: console.log(e),
            })
        }
    }
    else{
        try {
            const res = await axios.get(`https://api.oneavia.ru/api/v1/auto_complete?query=${e}`)
            dispatch({
                type: 'citisTo',
                cities: res.data.cities
            })
        } catch (e) {
            dispatch({
                type: 'errors',
                cities: console.log(e),
            })
        }
    }
}

export function chooseAirportDeparting(airportName,airportIataCode){
    return{
        type:"CHOOSEAIRPORTFROM",
        airportName:airportName,
        airportIataCode:airportIataCode
    }
}

export function chooseAirportArriving(airportName,airportIataCode){
    return{
        type:"CHOOSEAIRPORTTO",
        airportName:airportName,
        airportIataCode:airportIataCode
    }
}




export const searchTicket = (props) =>async dispatch =>{

    const ticket = props.ticket
    // console.log(11111,ticket)
    // const flightBack =

    try{
        let segment = 0
        // console.log(ticket.flightDate)
        const base = 'https://api.oneavia.ru/api/v1/search_flights?'
        const adults = 'adults=' + ticket.quantity.adultQuantity;
        const childer = 'children=' + ticket.quantity.childQuantity;
        const babies = 'babies=' + ticket.quantity.babyQuantity;
        const seniors = 'seniors=0'
        const ticketClass = 'class=' +  ticket.class
        
        const from = "segments[" + segment + "][fromCode]=" + ticket.from.cityIataCode
        const to = "segments[" + segment + "][toCode]=" + ticket.to.cityIataCode
        const date = "segments[" + segment + "][date]=" + ticket.flightDate
        let link = base + adults + "&" + childer + "&" + babies + "&" + seniors + "&" + ticketClass + "&" + "direct=1" + "&" + from + "&" + "segments[" + segment + "][fromName]=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0" + "&" + to + "&" + "segments[" + segment + "][toName]=%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA&students=0" + "&" + date + "&lang=ru"
        // let sm = `https://api.oneavia.ru/api/v1/search_flights?adults=1&children=0&babies=0&seniors=0&class=economy&direct=1&segments[0][fromCode]=MOW&segments[0][fromName]=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&segments[0][toCode]=SVX&segments[0][toName]=%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA&students=0&segments[0][date]=30.01.2021&lang=ru`
        // console.log(link)
        const res = await axios.get(link)
        // console.log(res.data.data)

        if(ticket.flightBack != null){
            segment = 1
            const fromBack = "segments[" + segment + "][fromCode]=" + ticket.to.cityIataCode
            const toBack = "segments[" + segment + "][toCode]=" + ticket.from.cityIataCode
            const dateBack = "segments[" + segment + "][date]=" + ticket.flightBack
            // console.log(dateBack+ "&" + "lang=ru");
            let linkBack = base + adults + "&" + childer + "&" + babies + "&" + seniors + "&" + ticketClass + "&" + "direct=1" + "&" + fromBack + "&" + "segments[" + segment + "][fromName]=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0" + "&" + toBack + "&" + "segments[" + segment + "][toName]=%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA&students=0"+"&"+dateBack+"&lang=ru"
            // console.log(linkBack)
            const resBack = await axios.get(linkBack)
            dispatch({
                type: 'SEARCHTICKET',
                searchFlights: res.data.data ,
                searchFlightsBack:resBack.data.data
            })
        }
        else{
            dispatch({
                type: 'SEARCHTICKET',
                searchFlights: res.data.data
    
            })
        } 
    }catch(e){
        dispatch({
            type:'error',
            searchFlights:console.log(e)
        })
    }
}




