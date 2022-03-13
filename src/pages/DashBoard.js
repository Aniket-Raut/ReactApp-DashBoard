import { Card2 } from "../components/Card2"
import { ContentView } from "../components/ContentView"
import { DashCard } from "../components/DashCard"
import { Form1 } from "../components/Form1"
import { NavBar } from "../components/NavBar"
import { Temp } from "../components/Temp"
import './dashboard.css'

export const DashBoard=()=>{
    return(
        <div>
            {/* <div className="top-cnt">
                <NavBar uimg="https://www.w3schools.com/w3images/avatar3.png"></NavBar>
            </div> */}
            {/* <div className="main-cnt">
                <div className="col1">
                    <DashCard uimg="https://www.w3schools.com/w3images/avatar3.png" uname="Aniket Raut" dsg="Developer" 
                    loc="Nagpur" dob="29-Sep-1999"></DashCard>
                    <Card2 i1="Temp value 1" i2="Temp value 2" i3="Temp value 3"></Card2>
                </div>

                <div className="col2">
                    <Form1></Form1>
                    <Form1></Form1>
                    <Temp></Temp>
                </div>
            </div> */}
            
        </div>
    )
}