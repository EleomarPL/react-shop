import PropTypes from 'prop-types';

const ProductItem = ({producData}) => {
  return (
    <article style={ {width: '15rem', marginRight: '10px', marginBottom: '1rem'} }>
      <div className="d-flex justify-content-center">
        <img src={ producData.category.image }
          style={ {
            height: '15rem', width: '15rem',
            objectFit: 'cover', borderRadius: '10px'
          } }
        />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column">
          <strong>${ producData.price }</strong>
          <span style={ {color: 'GrayText'} }>{ producData.title }</span>
        </div>
        <button type="button" className="button-add-card">
          <i className="bi bi-cart-plus-fill" style={ {fontSize: '2rem'} }></i>
        </button>
      </div>
    </article>
  );
};

ProductItem.propTypes = {
  producData: PropTypes.object.isRequired
};

export default ProductItem;