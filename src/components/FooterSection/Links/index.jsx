import React from 'react';
import styles from './style.module.scss';
import { Grid, Container, Typography } from '@mui/material';
import { menuLinks, contactLinks, helpLinks, socialLinks } from './data'; // Assuming data.js file structure
import { FaTwitter,FaFacebook, FaLinkedin  } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Full-width store name */}
          <Grid item xs={12}>
            <Typography variant="h6">ArtisanHaus</Typography>
          </Grid>

          {/* Responsive layout for menuLinks and helpLinks */}
          <Grid item xs={12} md={6} lg={3}>
           <h6 className={`font-bold`}>Menu</h6>
            {/* menuLinks */}
            {menuLinks.map((link, index) => (
              <Typography key={index} variant="body2">
                {link.title}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            {/* helpLinks */}
            <h6 className={`font-bold`} >Help</h6>
            {helpLinks.map((link, index) => (
              <Typography key={index} variant="body2">
                {link.title}
              </Typography>
            ))}
          </Grid>

          {/* Responsive layout for socialLinks and contactLinks */}
          <Grid item xs={12} md={3} lg={3}>
            {/* socialLinks */}
            <h6 className={`font-bold`} >Social Media
            </h6>
            {socialLinks.map((link, index) => (
              <Typography key={index} variant="body2">
                {link.title}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            {/* contactLinks */}
            <h6 className={`font-bold`} >Contact Us</h6>
            {contactLinks.map((link, index) => (
              <Typography key={index} variant="body2">
                {link.title}
              </Typography>
            ))}
          </Grid>

          {/* Copyright */}
          <Grid item xs={12}>
            <Typography variant="caption" color="textSecondary">
              &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
