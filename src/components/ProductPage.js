import React from 'react';
import ProductCarousel from './ProductCarousel';
import ProductSlider from './ProductPage/ProductSlider';

const ProductPage = () => {
  return (
    <div className="product-page">
      {/* Other product page content */}
      <ProductCarousel />
      <ProductSlider/>
      {/* Other product page content */}
    </div>
  );
};

export default ProductPage;
