import React from "react"
import Waitress from "./Waitress"
import Kitchen from "./Kitchen"
import "../../App.css"


function Main() {
    return (
        <main className="main" >
            <Waitress />
            <Kitchen />
        </main>
    )
}

export default Main