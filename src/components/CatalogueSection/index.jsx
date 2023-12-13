import React from 'react';
import PictureWidget from '../../widgets/PictureWidget';
import { catalogue } from './data';
import { Grid } from '@mui/material';

export default function CatalogueSection() {
  return (
    <Grid container spacing={0}>
      {catalogue.map((item) => (
        <Grid item key={item.id} xs={4}>
          <PictureWidget imageURL={item.imageURL} headingText={item.category} id={item.id} />
        </Grid>
      ))}
    </Grid>
  );
}
