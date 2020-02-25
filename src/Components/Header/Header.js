import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import logo from "./logo.png"
import InputClient from '../Main/InputClient'

function Header() {

  return (
    <header className="header">
      <AppBar position="static" id="appbar" color="primary">
        <Toolbar variant="dense">
          <Typography variant="h6" color="#f2f7f5">
            <img src={logo} alt="BurgerQueen" id="logo" />
          </Typography>
          <InputClient />
        </Toolbar>
      </AppBar>
    </header>
  )
}


export default Header