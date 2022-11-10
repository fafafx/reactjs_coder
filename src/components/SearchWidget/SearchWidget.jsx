function SearchWidget() {
  return (
    <>
      <div className="container mb-4">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Escribe el producto que quieres buscar"
            aria-label="Search"
          ></input>
          <button className="btn btn-outline-success">Buscar</button>
        </form>
      </div>
    </>
  );
}

export default SearchWidget;
