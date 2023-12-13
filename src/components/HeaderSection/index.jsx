'use client'
import React, {useState,useEffect} from 'react';
import { Container, Grid, Typography, IconButton, Divider } from '@mui/material';
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import Links from './Links';
import { menuLinks } from './Links/data'; // Assuming your data structure
import Menu from '@/components/Menu';

export default function Index() {
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      {/* Header Row */}
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Header Name */}
          <Grid item>
            <Typography variant="h4" component="a" href={'/'}>ArtisanHaus</Typography>
          </Grid>

          {/* Header Links or Menu Icon */}
          <Grid item>
            {/* Show header links for lg and xl screens */}
            {window.innerWidth >= 1280 ? (
              // Render header links for lg and xl screens
              <Links links={menuLinks} />
            ) : (
              <Menu/>
             
            )}
          </Grid>
        </Grid>
      </Container>
      <Divider/>
    </>
  );
}
