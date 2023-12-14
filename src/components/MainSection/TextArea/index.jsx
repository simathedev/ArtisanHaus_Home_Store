'use client';
import React from 'react';
import { Button, Typography, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Typography variant="body1" align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat, velit
                at fringilla fermentum, dolor odio finibus nulla, et semper justo magna sit amet
                nulla.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={10} sm={8} md={6}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Button
                variant="contained"
                style={{
                  color: 'white',
                  backgroundColor: 'brown', // Background color for the button
                  width: '100%',
                  padding: '0.8rem',
                }}
                onClick={handleCatalogueButtonClick}
              >
                View Catalogue
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
