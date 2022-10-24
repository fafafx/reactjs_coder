import CartWidget from "./CartWidget";

function NavBar() {
    
    return(
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-start" id="navbarSupportedContent">
    <button type="button" className="btn btn-link">Home</button>
                        <button type="button" className="btn btn-link">Productos</button>
                        <button type="button" className="btn btn-link">Mi cuenta</button>
                        <button type="button" className="btn btn-link">Contacto</button>
                        
      
    </div><CartWidget />
  </div>
</nav>
            
    </>
    )
}

export default NavBar;