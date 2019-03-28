import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import logo from "./logo.png"

function Header() {

    return (
        <header className="header">
            <AppBar position="static" id="appbar">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">  
                        <img src= {logo} alt="BurgerQueen" id="logo"/>
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>
    )
}


export default Header