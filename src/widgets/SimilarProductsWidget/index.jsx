import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import styles from './style.module.scss';
import { useRouter } from 'next/navigation';

const Index = ({ currentProductId, products }) => {
  // Get the current product details
  const router = useRouter();

  const handleCatalogueButtonClick = () => {
   
  };

  const currentProduct = products.find((product) => product.id === currentProductId);

  // Filter similar products based on the current product's category
  const similarProducts = products.filter(
    (product) => product.category === currentProduct.category && product.id !== currentProductId
  );

  return (
    <div className={styles.mainContainer}>
      <Typography variant="h4" gutterBottom>
        You Might Also Like...
      </Typography>
      <Grid container spacing={2}>
        {similarProducts.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="50"
                image={product.imageURL}
                alt={product.title}
              />
              <CardContent sx={{}}>
                <Typography gutterBottom variant="subtitle1">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  R {product.price}
                </Typography>
                <Button
            variant="contained"
            style={{ backgroundColor: 'brown',
            '&:hover': {
              backgroundColor: '#e3d5ca',
            }, color: 'white', padding: '8px',width:'30%',margin:'12px 0px'}}
            onClick={() => router.push(`/catalogue/${product.id}`)}
          >
            View
            </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Index;
