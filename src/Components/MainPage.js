import React from 'react'
import MainPageHeader from './MainPageHeader'
import SearchTicket from './SearchTicket/SearchTicket'
import {useSelector, useDispatch,connect} from 'react-redux'
import searchReducer from '../Redux/Reducers/searchReducer'


function MainPage(props) {
    const searchResults = useSelector(state=>state.searchResults.results)

    
    function clickFun(target){

        let id = target.id
        let departingFromInput = document.getElementById("departing-input-container")
        let departingList = document.getElementById("departing-lists")
        let arrivingToInput = document.getElementById("chosen-arriving-city")
        let arrivingList = document.getElementById("arriving-lists")
        let flightDateInput = document.getElementById("flight-date")
        let calendar = document.getElementById("calendar-container")
        let calendarTwo = document.getElementById("calendar-container-two")
        let twoWay = document.getElementById("two-way")
        let calcRes = document.getElementById("res-container")
        let calc = document.getElementById("res-calculator-container")
        
        if(departingList.style.display === "" || departingList.style.display === "none"){
            if(departingFromInput.contains(target)){
                departingList.style.display = "flex"
            }
        }
        else{
            if(departingFromInput.contains(target)){
                departingList.style.display = "flex"
            }
            else{
                departingList.style.display = "none"

            }
        }
        if(arrivingList.style.display === "" || arrivingList.style.display === "none"){
            if(arrivingToInput.contains(target)){
                arrivingList.style.display = "flex"
            }
        }
        else{
            if(arrivingToInput.contains(target)){
                arrivingList.style.display = "flex"
            }
            else{
                arrivingList.style.display = "none"
            }
        }

        
        return     
    }


    return (
        <div onClick={(e)=>clickFun(e.target)}>
            <MainPageHeader /> 
            <div class="res" >
            {
                searchResults.map((result, key)=>{
                   return (
                       <div className="col-12 col-lg-6" key={key}>
                            <div className="col bg-amount"><h4>{result.price.RUB.amount} р.</h4></div>
                           <div className="row">
                               <div className="col">
                                    <h5>{result.segments[0].dep.city.title}</h5>
                                    <p>{result.segments[0].dep.airport.title +" "+result.segments[0].dep.airport.code}</p>
                                    <p> {result.segments[0].dep.datetime}</p>
                               </div>
                               <div className="col">
                                   <h5>{result.segments[0].arr.city.title}</h5>
                                   <p>{result.segments[0].arr.airport.title+" "+result.segments[0].arr.airport.code}</p>
                                   <p>{result.segments[0].arr.datetime}</p>
                               </div>
                           </div>
                       </div>
                   )
                })
            }
            </div>  
            
        </div>
    )
}

export default connect(state=>state)(MainPage)
