import React from 'react';
import * as mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import './Styles/FlightDate.css'
import {setFlightDate, setTicketType} from "../../Redux/Actions";
import {useDispatch} from "react-redux";






const Datepicker = mobiscroll.Datepicker;

const now = new Date();
const min = now;

const max = new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());

export default function MobiDate() {
    const  [rangeCalendar,setRange] = React.useState({
        rangeStatus:false
    })
    const dispatch = useDispatch();



    const  dateTest =(e)=>{
        let getDate = e.valueText.split("-")

        dispatch(setFlightDate(getDate[0].trim()))
        dispatch(setTicketType(getDate[0].trim()))
    }

     const addRoute =(e)=>{
        e.preventDefault()
         // mbsc-calendar-cell
        /*  document.querySelectorAll('.mbsc-calendar-cell-text.mbsc-calendar-day-text.mbsc-windows.mbsc-calendar-today').forEach(function(item) {
             item.classList.remove('mbsc-calendar-cell');
         });*/



         let btnBackAgain = document.createElement('button');
         btnBackAgain.className = 'btn btn-warning';
         btnBackAgain.innerHTML = 'Туда-обратно';

        let btnOneWay = document.createElement('button');
         btnOneWay.className = 'btn ';
         btnOneWay.innerHTML = 'В одну сторону';
         btnOneWay.disabled = true;

         let routeBtnGroup = document.createElement('div');
         routeBtnGroup.className = 'col routeGroup'

         let routeGroup = document.querySelector('.routeGroup')
         routeBtnGroup.append(btnBackAgain)
         routeBtnGroup.append(btnOneWay)

         if(routeGroup == null){
             let headerCalendar = document.querySelector('.mbsc-popup-header')
             headerCalendar.append(routeBtnGroup)
         }

         btnBackAgain.addEventListener('click', function (){
             btnBackAgain.disabled = true
             btnBackAgain.className = 'btn'

             btnOneWay.disabled = false
             btnOneWay.className = 'btn btn-warning'
             setRange({...rangeCalendar, rangeStatus:true})
         })


         btnOneWay.addEventListener('click', function (){
             btnOneWay.disabled = true
             btnOneWay.className = 'btn'

             btnBackAgain.disabled = false
             btnBackAgain.className = ' btn btn-warning'
             setRange({...rangeCalendar, rangeStatus:false})
         })

         if(rangeCalendar.rangeStatus == true){
             btnBackAgain.disabled = true
             btnBackAgain.className = 'btn'

             btnOneWay.disabled = false
             btnOneWay.className = 'btn btn-warning'
         }else{
             btnOneWay.disabled = true
             btnOneWay.className = 'btn'

             btnBackAgain.disabled = false
             btnBackAgain.className = 'btn btn-warning'
         }

    }

    return (
        <div className='col-xl col-lg-2 col-md-4 col-sm-4 p-0 flight-date searchInput' onClick={addRoute.bind(this)} >
            {(rangeCalendar.rangeStatus)?
                <Datepicker
                    controls={['calendar']}
                    dateFormat="DD.MM.YYYY"
                    locale={mobiscroll.localeRu}
                    min={min}
                    max={max}
                    headerText = " "
                    select="range"
                    responsive={{
                        xsmall: {
                            controls: ['calendar'],
                            display: 'bottom',
                            touchUi: true
                        },
                        small: {
                            controls: ['calendar'],
                            display: 'bottom',
                            touchUi: true
                        },
                        custom: {
                            breakpoint: 600,
                            controls: ['calendar'],
                            display: 'anchored',
                            touchUi: false
                        },
                    }}
                    onChange = {dateTest.bind(this)}
                />
            :

                /*** One way ***/
                <Datepicker
                    controls={['calendar']}
                    responsive={{
                        xsmall: {
                            controls: ['calendar'],
                            display: 'bottom',
                            touchUi: true
                        },
                        small: {
                            controls: ['calendar'],
                            display: 'bottom',
                            touchUi: true
                        },
                        custom: {
                            breakpoint: 600,
                            controls: ['calendar'],
                            display: 'anchored',
                            touchUi: false
                        },



                    }}
                    dateFormat="DD.MM.YYYY"
                    locale={mobiscroll.localeRu}
                    min={min}
                    max={max}
                    headerText = " "
                    touchUi={false}
                    onChange = {dateTest.bind(this)}
                />
            }

        </div>
    );
}

