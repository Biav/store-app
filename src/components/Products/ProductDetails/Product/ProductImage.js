import React from 'react';

const productImage = (props) => (
    <>
        <div className="col-lg-6">
            <div className="s_product_img">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src = { require(`./../../../../assets/products/product1.jpg`)}
                      alt="First slide"/>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src = { require(`./../../../../assets/products/product1.jpg`)}
                      alt="Second slide"/>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src = { require(`./../../../../assets/products/product1.jpg`)}
                      alt="Third slide"/>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </>
);

export default productImage;
    
