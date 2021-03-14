import departingFrom from '../States/departingFrom'
import React from 'react'

function departingFromReducer(state = departingFrom,action) {
    let temp = {...state};
    if(action.type ==="SETDEPARTINGCITY"){
        temp.city = action.city
    }

    if(action.type === 'citis'){
        temp.from = []
        //temp.from.push(action.cities)
        Object.keys(action.cities).map((key,index)=>{
            temp.from[index] = action.cities[key]
            if(temp.from.length > index + 1){
                temp.from.slice(index,temp.from.length-1)
            }

        })

    }

    return temp
}

export default departingFromReducer
