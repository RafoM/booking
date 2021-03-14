import searchResults from '../States/searchResults'
import React from 'react'

function searchReducer(state = searchResults, action) {
    let temp = {...state}
    temp.results = [];
    temp.resultsBack = [];
    if(action.type === "SEARCHTICKET"){
        if(action.searchFlightsBack){
            action.searchFlightsBack.flights.map((flight)=>{
                temp.resultsBack.push(flight)
            })
        }
        action.searchFlights.flights.map((flight)=>{
            temp.results.push(flight)
        })
        // console.log(action.searchFlights.flights)
        // console.log(temp)
    }
    return temp
}

export default searchReducer
