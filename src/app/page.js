'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography, Button } from '@mui/material';
import MainSection from '../components/MainSection';
import CatalogueSection from '@/components/CatalogueSection';
import FeaturedSection from '@/components/FeaturedSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Inter, sans-serif',
      h1: {
        fontFamily: 'Hedvig Serif, serif',
      },

    },
  });
  

  const router = useRouter();

  useEffect(() => {
    // Get the hash from the URL
    const { hash } = router;
    
    // If hash is present and matches a section id, scroll to that section
    if (hash && document.getElementById(hash.slice(1))) {
      document.getElementById(hash.slice(1)).scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
        <MainSection/>
        <div id="featured">
        <FeaturedSection  />
        </div>
        <CatalogueSection/>
        <div id="contact">
        <ContactSection  />
        </div>
    </ThemeProvider>
  );
}
