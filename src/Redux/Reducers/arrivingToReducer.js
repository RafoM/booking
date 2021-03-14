import arrivingTo from '../States/arrivingTo';

function arrivingToReducer(state = arrivingTo,action){
    let temp = {...state};

    if(action.type === 'citisTo'){
        //temp.from.push(action.cities)
        temp.to = []
        Object.keys(action.cities).map((key,index)=>{
            temp.to[index] = action.cities[key]
            
        })
    }    

    return temp

}

export default arrivingToReducer