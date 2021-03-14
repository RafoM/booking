
import './App.css';
import {connect} from 'react-redux'
import MainPage from './Components/MainPage';

function App() {
  return (
    <MainPage/>
  );
}

export default connect(state=>state) (App);
