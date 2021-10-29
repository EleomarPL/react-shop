const SpinnerLoading = () => {
  return (
    <div className="d-flex justify-content-center my-2">
      <div
        className="spinner-border text-primary"
        style={ {width: '3rem', height: '3rem'} }
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default SpinnerLoading;