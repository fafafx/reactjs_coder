function QuantityControl() {
  return (
    <>
      <div className="">
        <button type="button" className="btn btn-outline-info m-1">
          -
        </button>
        <button type="button" className="btn btn-light m-1" disabled>
          0
        </button>
        <button type="button" className="btn btn-outline-info m-1 m-1">
          +
        </button>
        <small className="text-muted p-1">Stock disponible: 16.</small>
      </div>
    </>
  );
}

export default QuantityControl;
