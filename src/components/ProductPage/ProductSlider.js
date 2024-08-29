import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './ProductSlider.css';
const ProductSlider = () => {
    useEffect(() => {
      if (window.bootstrap) {
        const myCarousel = document.querySelector('#demo');
        const bootstrapCarousel = new window.bootstrap.Carousel(myCarousel, {
          interval: 15000, // 15 seconds
          ride: 'carousel',
        });
  
        const delayedCycle = () => {
          setInterval(() => {
            bootstrapCarousel.next();
          }, 15000); // 15 seconds delay
        };
  
        delayedCycle();
      } else {
        console.error("Bootstrap is not loaded");
      }
    }, []);
  
    return ( 2);
  };
  
  export default ProductSlider;
  