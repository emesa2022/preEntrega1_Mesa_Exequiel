import Carrito from "./CardWindget";

const Nav = (props) => {
    if(props.isHeader === true){
    return(
        <nav className="headerNavar">
        <ul class="menu">
          <li>
            <button id="todos" class="boton-menu "><i
              class="bi bi-hand-index-thumb-fill"></i> Todos los productos</button>
          </li>
          <li>
            <button id="accesorios" class="boton-menu boton-categoria"><i
              class="bi bi-hand-index-thumb"></i> Accesorios</button>
          </li>
          <li>
            <button id="aComprimidos" class="boton-menu boton-categoria"><i
              class="bi bi-hand-index-thumb"></i> Aire Comprimidos</button>
          </li>
          <li>
            <button id="cuchillos" class="boton-menu boton-categoria"><i class="bi bi-hand-index-thumb"></i> Cuchilleria</button>
          </li>
          <Carrito/>
        </ul>
      </nav>
    )
}else{
    return(
        <div>
            <p>Exequiel 2022</p><br/>
            <a href={props.hrefLinkFooter}>{props.textLinkFooter}</a>

        </div>
        
    )
}
}

export default Nav;