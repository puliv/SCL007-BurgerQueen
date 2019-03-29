import React from "react"
import Waitress from "./Waitress"
import "../../App.css"


function Main(props) {
    return (
        <main className="main" >
            <Waitress onClick={props.onClick}/>
            {/* <Kitchen onClick={props.onClick}/> */}
        </main>
    )
}

export default Main