import React from 'react';
import { Grid } from '@mui/material';
//import HeaderSection from '../HeaderSection';
import mainBackground from '../../../public/assets/b1.jpg';
import TextArea from './TextArea';
import styles from './style.module.scss';
import dynamic from "next/dynamic";

export default function MainSection() {
  const HeaderSection = dynamic(
    () => {
      return import("../HeaderSection");
    },
    { ssr: false }
  );
  return (
    <div
      style={{
        backgroundImage: `url(${mainBackground.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '600px',
        position: 'relative', // Set the position to relative
      }}
      className={`${styles.main}`}
    >
      <HeaderSection />
      {/* Centered TextArea */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{
          position: 'absolute', // Position the Grid absolutely within the parent div
          top: '50%', // Move the Grid to the vertical center
          left: '50%', // Move the Grid to the horizontal center
          transform: 'translate(-50%, -50%)', // Adjust to perfectly center the Grid
        }}
      >
        <TextArea />
      </Grid>
    </div>
  );
}
