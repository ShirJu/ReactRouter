import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import  Carousel  from '../Componentes/Carrusel'
import ProductosListado from '../Componentes/ProductosListado'

export default function Home() {

  const [products, setProducts] = useState([]);
 

  useEffect(() => {

    axios
      .get("https://dummyjson.com/products")
      .then((result) => {
        setProducts(result.data.products);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [products]);

  return (
    <>      
        <Carousel/>
        <section id="featured-products" className="product-store padding-large">
          <div className="container">
            <div className="section-header flex-wrap align-items-center justify-content-between">
              <h2 className="section-title">Los mejores 6 Productos</h2>


              <div className='row d-flex flex-wrap'>
                 <ProductosListado products={products.slice(0, 6)}  />
              </div>
            </div>
            
          </div>
        </section>        
    </>
  )
}
