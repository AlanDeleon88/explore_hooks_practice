import React, { useEffect } from "react";
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import "./ProductView.css";
import { useState } from "react";

function ProductView({ products }) {
  // TODO: Replace with state variable
  const [sideOpen, setSideOpen] = useState(localStorage.getItem('sideOpen'));
  const [selectedProduct, setSelectedProduct] = useState(false);

  useEffect(() =>{
    console.log(`selectedProduct CHANGE TO`, selectedProduct);

    if(selectedProduct){
      setSideOpen(true);

    }

  }, [selectedProduct]);

  useEffect(() =>{
    console.log(`sideOpen CHANGED TO`, sideOpen);
    if(!sideOpen){

      setSelectedProduct(false);
    }
  },[sideOpen])
  console.log('product view')
  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map((item) => (
            <ProductListItem
              key={item.id}
              product={item}
              onClick={() => {
                setSelectedProduct(item)

            }}
              isSelected={selectedProduct.id == item.id ? true : false}
            />
          ))}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div
            className="product-side-panel-toggle"
            onClick={() => {
              setSideOpen(!sideOpen)
              sideOpen ? localStorage.setItem('sideOpen', '') : localStorage.setItem('sideOpen', 'true');
            }}
          >
            {sideOpen ? ">" : "<"}
          </div>
        </div>
        <ProductDetails product={selectedProduct} visible={sideOpen} />
      </div>
    </div>
  );
}

export default ProductView;
