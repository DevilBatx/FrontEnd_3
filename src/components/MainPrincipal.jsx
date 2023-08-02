import { Fragment } from "react"
import Producto from "./producto"

const MainPrincipal = () => {
    return(
        <Fragment>
            <Producto name="Fideos" money={500}></Producto>
            <Producto name="Coca cola" money={1000}></Producto>
            <Producto name="Alfajor" money={10}></Producto>
        </Fragment>
    )
}

export default MainPrincipal