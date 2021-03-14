import {combineReducers} from 'redux';
import departingFromReducer from './departingFromReducer'
import ticketReducer from './ticketReducer'
import arrivingToReducer from './arrivingToReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({departingFrom:departingFromReducer, arrivingTo:arrivingToReducer , ticket:ticketReducer,searchResults:searchReducer});

export default rootReducer;