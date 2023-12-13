import React from 'react';
import { Grid, Typography } from '@mui/material';

export default function Links({ links }) {
  return (
    <Grid container spacing={2} alignItems="center">
      {links.map((link, index) => (
        <Grid item key={index}>
          <Typography variant="body1" component="a" href={link.href}>{link.title}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}
