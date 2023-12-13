import React from 'react';
import { Grid, Typography } from '@mui/material';
import FeaturedWidget from '../../widgets/FeaturedWidget';
import { featured } from './data';
import styles from './style.module.scss';

export default function Index() {
  return (
    <div className={styles.main}>
      <Grid container display="flex" justifyContent="center" alignItems="center" sx={{}}>
        <Grid item>
          <div className={`flex sm:flex-col xs:flex-col md:flex-row lg:flex-row xl:flex-row  xs:justify-center sm:justify-center md:justify-between lg:justify-between  xl:justify-between  items-center gap-4 mb-[6rem]`}>
            <Typography variant='h2'>Featured</Typography>
            <Typography variant='body1' width='30%'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam repellendus molestias accusantium.</Typography>
          </div>
        </Grid>
        <Grid item className={`my-10`} display="flex" justifyContent="center" alignItems="center" sx={{}}>
          <Grid container spacing={12} display="flex" justifyContent="center" alignItems="center" sx={{}}>
            {featured.map((item) => (
              <FeaturedWidget
                key={item.id}
                imageURL={item.imageURL}
                heading={item.heading}
                description={item.description}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
