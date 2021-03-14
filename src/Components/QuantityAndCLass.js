import React,{useState,useEffect} from 'react'
import {useSelector, useDispatch,connect} from 'react-redux'
import {increaseQuantity,decreaseQuantity,setTicketClass} from '../Redux/Actions/index'
import './Styles/QuantityAndClass.css'

function QuantityAndCLass() {
    let [display,setDisplay] =  useState("d-none")
    let [printClass, SetPrintClass] = useState("Эконом")
    let [ticketType, setTicketType] = useState("economy")
    const dispatch = useDispatch()

    const ticketQuantity = useSelector(state=>state.ticket.quantity)
    const ticketClass = useSelector(state=>state.ticket.class)

    const toggleDisplay = () =>{
        if(display == "d-none"){
            setDisplay("d-flex")
        }
        else{
            setDisplay("d-none")
        }
    }

    
    useEffect(()=>{
        checkboxCheck()
    },[ticketType])




    const checkboxCheck = () =>{
        
        let economy = document.getElementById("economy")
        let comfort = document.getElementById("comfort")
        let business = document.getElementById("business")
        let first = document.getElementById("first")
        let arr = [economy,comfort,business,first]
        arr.map((type)=>{
            if(type.id !== ticketType){
                type.checked = false
            }
            else{
                type.checked = true
            }
        })
        console.log(ticketClass)
    }

    return (
        <div className="col-xl col-lg-2 col-md-4  col-sm-4 col p-0 Calc-container  searchInput">
            <div id="res-container" onClick={()=>toggleDisplay()}>
                <p>{ticketQuantity.adultQuantity + ticketQuantity.childQuantity + ticketQuantity.babyQuantity} пассажир, {printClass}</p>
                <img src='icons\Dropdown.png'/>
            </div>
            <div id="res-calculator-container" className={display} >
                <div id="passenger-calc-container">
                    <div id="passenger-calc">
                        <div id="passenger-age">
                            <h3>Взрослые</h3>
                            <p>Старше 12 лет</p>
                        </div>
                        <div id="passenger-count" className="input-group">
                            <div className="input-group-prepend">
                                <button
                                onClick={()=>dispatch(decreaseQuantity("adult"))}
                                className="btn btn-outline-secondary">-</button>
                            </div>
                            <input value={ticketQuantity.adultQuantity} className="form-control"/>
                            <div className="input-group-append">
                                <button
                                onClick={()=>dispatch(increaseQuantity("adult"))}
                                className="btn btn-outline-secondary">+</button>
                            </div>
                        </div>
                    </div>
                    <div id="passenger-calc">
                        <div id="passenger-age">
                            <h3>Дети</h3>
                            <p>От 2 до 12 лет </p>
                        </div>
                        <div id="passenger-count" className="input-group">
                            <div className="input-group-prepend">
                                <button
                                onClick={()=>dispatch(decreaseQuantity("child"))}
                                className="btn btn-outline-secondary">-</button>
                            </div>
                            <input value={ticketQuantity.childQuantity} className="form-control"/>
                            <div className="input-group-append">
                                <button
                                onClick={()=>dispatch(increaseQuantity("child"))}
                                className="btn btn-outline-secondary">+</button>
                            </div>
                        </div>
                    </div>
                    <div id="passenger-calc">
                        <div id="passenger-age">
                            <h3>Младенцы</h3>
                            <p>До 2 лет, без места</p>
                        </div>
                        <div id="passenger-count" className="input-group">
                            <div className="input-group-prepend">
                                <button
                                onClick={()=>dispatch(decreaseQuantity("baby"))}
                                className="btn btn-outline-secondary">-</button>
                            </div>
                            <input value={ticketQuantity.babyQuantity} className="form-control"/>
                            <div className="input-group-append">
                                <button
                                onClick={()=>dispatch(increaseQuantity("baby"))}
                                className="btn btn-outline-secondary">+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="ticket-class-container">
                    <div className="form-check" id="ticket-class">
                        <input
                        onClick={()=>{dispatch(setTicketClass("economy"));SetPrintClass("Эконом");setTicketType("economy")}}
                        id="economy"
                        className="form-check-input"
                        type="checkbox"
                        value="Эконом"
                        />
                        <label className="form-check-label">
                        Эконом
                        </label>
                    </div>
                    <div className="form-check" id="ticket-class">
                        <input
                        onClick={()=>{dispatch(setTicketClass("comfort"));SetPrintClass("Комфорт");setTicketType("comfort")}}
                        id="comfort"
                        className="form-check-input"
                        type="checkbox"
                        value="Комфорт" />
                        <label className="form-check-label" >
                        Комфорт
                        </label>
                    </div>
                    <div className="form-check" id="ticket-class">
                        <input
                        id="business"
                        onClick={()=>{dispatch(setTicketClass("business"));SetPrintClass("Бизнесс");setTicketType("business")}}
                        className="form-check-input"
                        type="checkbox"
                        value="Бизнесс" />
                        <label className="form-check-label">
                        Бизнесс
                        </label>
                    </div>
                    <div className="form-check" id="ticket-class">
                        <input
                        id="first"
                        onClick={()=>{dispatch(setTicketClass("first"));SetPrintClass("Первый Класс");setTicketType("first")}}
                        className="form-check-input"
                        type="checkbox"
                        value="Первый класс" />
                        <label className="form-check-label" >
                        Первый класс
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuantityAndCLass
