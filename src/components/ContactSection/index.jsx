import React from 'react';
import { Grid, Typography, Card, CardContent } from '@mui/material';
import styles from './style.module.scss';
import { points, contactLinks } from './data';

export default function ContactSection() {
  return (
    <div className={styles.main}>
      <Grid container direction="column" spacing={4} alignItems='center' justifyContent='center' margin='2rem 0rem' sx={{ width:{xs:'90%', md:'100%'}}}>
        <Grid item xs={12} sm={12} md={6} container direction="row" spacing={4} alignItems='center' justifyContent='center' textAlign='center' sx={{margin:{sm:'3rem 0rem'}}}>
          <Typography variant='h3' sx={{ width:{xs:'60%',sm:'70%', md:'30%'}, textAlign:{xs:'center', md:'left' } }}>Why Choose Our Company?</Typography>
          <Grid item xs={12} sm={12} md={6} style={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
            {points.map((item) => (
              <Grid item key={item.id}>
                <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center', marginBottom: '15px',width:'90%', justifyContent: 'center'}}>
                  <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center', marginLeft: '10px', }}>
                  <div>{item.SVG}</div>
                    <Typography variant="h6" fontWeight="bold">{item.heading}</Typography>
                    <Typography variant="body2">{item.description}</Typography>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container spacing={1} style={{  display: 'flex', flexDirection: 'column', marginTop:'5rem', justifyContent: 'center', alignItems: 'center',borderTop:'1px solid black' }} sx={{width:{xs:'75%',sm:'60%', md:'60%'}}} >
        <Typography variant='h3' style={{  textAlign: 'center', marginTop:'4rem' }}>Contact Us</Typography>
        <Grid item xs={12} sm={12} md={12} lg={12} style={{  display: 'flex', flexDirection: 'column', justifyContent: 'center',  alignItems: 'center', margin: '2rem 0rem' }} sx={{width:{xs:'100%',md:'60%'}}}>
        
           
      {contactLinks.map((link) => (
         <CardContent key={link.id} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',height: '100%' }}>
              {link.SVG}
              <Typography variant="body1" style={{ marginTop: '5px', textAlign: 'center' }}>{link.title}</Typography>
            </CardContent>
         
      ))}
    
        </Grid>
    </Grid>
    </Grid>
    </div>
  );
}
