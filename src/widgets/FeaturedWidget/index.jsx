import React from 'react';
import { Grid, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function FeaturedWidget({ imageURL, heading, description }) {
  const router = useRouter();

  const handleCatalogueButtonClick = () => {
    router.push('/catalogue');
  };

  return (
    <Grid item xs={12} sm={6} lg={6} xl={6} sx={{display:'flex',justifyContent:'center', alignItems:'center'}}>
      <Grid container direction="column" spacing={2} sx={{display:'flex',justifyContent:'center', alignItems:'center'}} >
        <Grid item>
            {/* Container for image with fixed max height */}
            <Image src={imageURL} alt="Featured Image" width={300} height={300} />
        </Grid>
        <Grid item sx={{minHeight:'370px'}}>
            <Typography variant="h4" component="h2" fontWeight="bold" align="left" width={300}  sx={{margin:'1rem 0rem'}}>
              {heading}
            </Typography>
            <Typography variant="body1" align="left" width={300}>
              {description}
            </Typography>
            <Button
              variant="contained"
             
              onClick={handleCatalogueButtonClick}
              sx={{margin:'1rem 0rem',
              color: 'white', padding: '1rem',
              backgroundColor: 'brown',
              '&:hover': {
                backgroundColor: '#e3d5ca',
              }
          
          }}
            >
              View Catalogue
            </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

