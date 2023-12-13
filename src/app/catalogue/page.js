'use client';
// Catalogue.jsx
import React, { useState, useEffect } from 'react';
import { Typography, Grid, CircularProgress, Alert } from '@mui/material';
import { Products } from '@/data';
import ProductWidget from '@/widgets/ProductWidget';
//import HeaderSection from '../../components/HeaderSection';
import CategoryFilterWidget from '@/widgets/CategoryFilterWidget';
import dynamic from "next/dynamic";

const Catalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const groupedProducts = Products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  const categories = Object.keys(groupedProducts);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    setLoading(true);
    setError(false);

    if (selectedCategory === 'All') {
      setFilteredProducts(Products);
      setLoading(false);
    } else {
      const products = groupedProducts[selectedCategory];
      if (products) {
        setFilteredProducts(products);
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
    }
  }, [selectedCategory, groupedProducts]);
  const HeaderSection = dynamic(
    () => {
      return import("@/components/HeaderSection");
    },
    { ssr: false }
  );

  return (
    <div>
      <HeaderSection />
      <CategoryFilterWidget
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />

      {/* Render Products based on selected category */}
      {loading && <CircularProgress />}
      {error && <Alert severity="error">Error loading products</Alert>}

      {filteredProducts.length > 0 && (
        <div>
          <Typography variant="h4" align="center" marginBottom="1rem" marginTop="2rem" gutterBottom>
            {selectedCategory}
          </Typography>
          <Grid container spacing={2} justifyContent="center" alignItems="center" marginBottom="4rem">
            {filteredProducts.map((product) => (
              <Grid
                key={product.id}
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={4}
              >
                <ProductWidget product={product} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Catalogue;

