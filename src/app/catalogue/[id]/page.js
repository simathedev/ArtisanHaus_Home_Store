'use client';
import React, { useState, useEffect } from 'react';
import { Products } from '@/data';
import ProductDetailsWidget from '@/widgets/ProductDetailsWidget';
//import HeaderSection from '@/components/HeaderSection';
import SimilarProductsWidget from '@/widgets/SimilarProductsWidget';
import LoadingSecton from '@/components/LoadingSection';
import dynamic from "next/dynamic";


const ProductPage = ({ params }) => {
  const { id } = params;
  const productId = parseInt(id, 10);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulate fetching product data
    setTimeout(() => {
      const foundProduct = Products.find((product) => product.id === productId);
      setProduct(foundProduct);
      setLoading(false);
    }, 1000); // Simulating a delay of 1 second (1000 milliseconds)
  }, [productId]);
  const HeaderSection = dynamic(
    () => {
      return import("@/components/HeaderSection");
    },
    { ssr: false }
  );

  if (loading) {
    return (
      <div>
        <HeaderSection />
        <LoadingSecton/>
        {/*<div>Loading...</div>*/}
      </div>
    );
  }

  if (!product) {
    return (
      <div>
        <HeaderSection />
        <div>No product found for ID: {id}</div>
      </div>
    );
  }

  return (
    <div>
      <HeaderSection />
      {/* Render ProductDetailsWidget with the specific product */}
      <ProductDetailsWidget product={product} />
      
      {/* Render SimilarProductsWidget passing the current product ID and the products array */}
      <SimilarProductsWidget currentProductId={productId} products={Products} />
    </div>
  );
};

export default ProductPage;

