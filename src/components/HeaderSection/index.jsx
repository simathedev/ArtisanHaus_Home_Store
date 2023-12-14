'use client';
import React, { useState } from 'react';
import { Container, Grid, Typography, Divider, useMediaQuery, useTheme } from '@mui/material';
import { IoMenu } from 'react-icons/io5';
import { FaTimes } from 'react-icons/fa';
import Links from './Links';
import { menuLinks } from './Links/data'; // Assuming your data structure
import Menu from '@/components/Menu';

export default function Index() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      {/* Header Row */}
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Header Name */}
          <Grid item>
            <Typography variant="h4" component="a" href={'/'}>
              ArtisanHaus
            </Typography>
          </Grid>

          {/* Header Links or Menu Icon */}
          <Grid item>
            {isLargeScreen ? (
              <Links links={menuLinks} />
            ) : (
              <Menu />
            )}
          </Grid>
        </Grid>
      </Container>
      <Divider />
    </>
  );
}
