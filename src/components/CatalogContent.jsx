import CatalogItem from "./CatalogItem";


function CatalogContent(props) {
    
    return(
        <>
            <h3 className="text-center p-5">{props.greetingCatalog}</h3>
            
            <div className="row row-cols-1 row-cols-md-5 g-3 mb-5">
                <CatalogItem nombreProducto="Naturals Diamond" descripcionProducto="Alimento para gatos reforzado con vitaminas y proteínas." stock="16" precioProducto={18308} imgCode="img000001" />
                <CatalogItem nombreProducto="Naturals Diamond" descripcionProducto="Alimento para gatos reforzado con vitaminas y proteínas." stock="16" precioProducto={18308} />
                <CatalogItem nombreProducto="Naturals Diamond" descripcionProducto="Alimento para gatos reforzado con vitaminas y proteínas." stock="16" precioProducto={18308} />
                <CatalogItem nombreProducto="Naturals Diamond" descripcionProducto="Alimento para gatos reforzado con vitaminas y proteínas." stock="16" precioProducto={18308} /><CatalogItem nombreProducto="Naturals Diamond" descripcionProducto="Alimento para gatos reforzado con vitaminas y proteínas." stock="16" precioProducto={18308} />
                
                      </div>
        </>
    )
}

export default CatalogContent;