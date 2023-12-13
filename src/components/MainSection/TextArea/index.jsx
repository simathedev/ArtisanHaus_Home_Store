'use client';
import React from 'react';
import { Button, Typography, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Index() {
  const router = useRouter();

  const handleCatalogueButtonClick = () => {
    router.push('/catalogue');
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={10} sm={8} md={6}>
        {/* Nested Grid for text and button */}
        <Grid container direction="column" spacing={2} alignItems="center">
          <Grid item>
            <Typography variant="body1" align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat, velit at
              fringilla fermentum, dolor odio finibus nulla, et semper justo magna sit amet nulla.
            </Typography>
          </Grid>
          <Grid item xs={10} sm={8} md={6}>
            <Button
              variant="contained"
              color="primary"
              sx={{
            
                color: 'white',
                backgroundColor: 'brown',
            '&:hover': {
              backgroundColor: '#e3d5ca',
            },
                width: '100%',
                padding: '0.8rem',
              }}
              onClick={handleCatalogueButtonClick}
            >
              View Catalogue
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
