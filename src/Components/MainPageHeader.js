import React,{useEffect} from 'react'
import QuantityAndCLass from './QuantityAndCLass'
import {useSelector, useDispatch,connect} from 'react-redux'
import SearchTicket from './SearchTicket/SearchTicket'
import './Styles/MainPageHeader.css'



function MainPageHeader(props) {

    return (
        <div id="MainPageHeader">
            <div id="header-container">
                <div id="headerMenu">
                    <p>Личный кабинет</p>
                    <div id="language">
                        <p>EN</p>
                        <img src="icons/flag1.png"/>
                    </div>
                </div>

                    <div id="search-container">

                        <div className="col-6 col-md-4  col-lg-3 mb-3 routeType">
                            <div className={'row p-0'}>
                                <p>Тур</p>
                                <p>Поезд</p>
                                <p>Отели</p>
                            </div>

                        </div>

                            <SearchTicket />


                    </div>
            </div>
       
        </div>
    )
}

export default MainPageHeader
