import React from 'react'
import ArrivingTo from './ArrivingTo'
import DepartingFrom from './DepartingFrom'
import './Styles/SearchTicket.css'
import MobiDate from './MobiDate'
import QuantityAndCLass from "../QuantityAndCLass";
import {searchTicket} from "../../Redux/Actions";
import {connect, useDispatch} from "react-redux";




function SearchTicket(props) {
    const dispatch = useDispatch()
    return (
        <div className="row m-0">
            <DepartingFrom/>
            <ArrivingTo/>
            <MobiDate/>
            <QuantityAndCLass/>
            <div className="col-xl-1 col-lg-1 col-md  col-sm  p-0 btnCol">
                <button
                    onClick={()=>{dispatch(searchTicket(props))}}
                    id="find-ticket">
                    <p className={'btnSearch'}>Найти билет</p>
                    <img src="icons\search2.png"/>
                </button>
            </div>
        </div>
    )
}

export default connect(state=>state)(SearchTicket)
