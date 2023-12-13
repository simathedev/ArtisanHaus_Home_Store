import React, { useState } from 'react';
import { IconButton, Typography, Button, Grid } from '@mui/material';
import { FaHeart } from 'react-icons/fa';
import styles from './style.module.scss';
import Image from 'next/image';

const Index = ({ product }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleEnquireClick = () => {
    console.log('Enquire clicked');
  };

  const goBack = () => {
    // Your logic for going back
  };

  return (
    <div className={styles.main}>
      <Grid container spacing={4} sx={{justifyContent:'center',alignItems:'center'}}>
        {/* Product Image Column */}
        <Grid item xs={11} lg={6} container justifyContent="center" alignItems="center">
          <img src={product.imageURL} alt={product.title} style={{ maxWidth: '80%', height: 'auto' }} />
        </Grid>

        {/* Text and Buttons Column */}
        <Grid item xs={9} lg={6} container display="flex" direction="column" justifyContent="center" sx={{}} >
          <Typography variant="h5" gutterBottom sx={{alignItems:{xs:'left'}}}>Product Details</Typography>
          <Typography variant="h4" gutterBottom sx={{alignItems:{xs:'left'}}}>{product.title}</Typography>
          <Typography variant="h4" gutterBottom sx={{alignItems:{xs:'left'}}}>R {product.price}</Typography>
          <Typography variant="body1" marginBottom="16px" width="90%">{product.description}</Typography>
          <Typography variant="body2" marginBottom="16px">{product.inStock ? 'In Stock' : 'Out of Stock'}</Typography>

          <IconButton onClick={handleLikeClick} color={liked ? 'secondary' : 'default'} style={{ border: 'none', width: '40px', height: '40px', backgroundColor: 'transparent', marginBottom:'1rem' }}>
            <FaHeart />
          </IconButton>

          <Button
            variant="contained"
            sx={{ backgroundColor: 'brown',
            '&:hover': {
              backgroundColor: '#e3d5ca',
            }, border: 'none', borderRadius: '6px', width: '130px', padding:'10px 0px', color: 'white' }}
            onClick={handleEnquireClick}
          >
            Enquire
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
