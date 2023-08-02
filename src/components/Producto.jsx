import { Fragment } from "react"


const Producto = (props) => {
    return(
        <Fragment>
            <h2>Nombre: {props.name}</h2>
            <h2>Precio: {props.money}</h2>
        </Fragment>
    )
}

export default Producto