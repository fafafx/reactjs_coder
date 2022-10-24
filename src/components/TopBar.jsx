import logo from "../logo.png";
function TopBar(props) {
    
    return(
        <>
            <div className="infoBar">{props.greeting}</div><div className="logoCartBar">
    <div className="text-center p-5"><h1>Mi Tienda</h1></div>

    </div></>
    )
}

export default TopBar;