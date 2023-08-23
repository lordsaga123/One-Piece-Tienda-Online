import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <nav>
            <h3>One Piece Tienda Online</h3>
            <div>
                <button>Figuras</button>
                <button>Manga</button>
                <button>Posters</button>
                <button>Vestimenta</button>
            </div>
            <CartWidget/>
        </nav>

    )
}
export default NavBar