import React from 'react'
import court from '../court.png'
import '../style.css';
import Clubs from '../components/Clubs'



const Home = (props) => {
  // console.log("home:", props)
    return (

      <div className = "Home">

        <h2 className = "text-center"> It's Court Time! </h2>
        <h6 className = "text-center"> Register/Login To Begin </h6>
        <h4 className = "text-center"> Select a Club </h4>
        <br/>
      <Clubs clubs = {props.home.clubs}/>
      <br/>

      <img src={court} width = '800' height = "500" alt="Court" className="center" />
    </div>
    )
  }


export default Home
