import React from "react"
import "../../App.css"

function Kitchen(props) {
    let pedidos = "";
    if (props.btnOrderBreakfast) {
        pedidos = props.btnOrderBreakfast.forEach((item) => {
            return (
                <p>{item.menu} {item.precio}</p>
            )
        })
    }

    return (
        <section className="kitchen">
            {pedidos}
        </section>
    )
}

export default Kitchen