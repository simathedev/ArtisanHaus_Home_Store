import React from 'react';
import { CircularProgress, Typography, Box, Card } from '@mui/material';

const Loading = () => {
  return (
    <Box
      height="70vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      opactiy="50%"
    ><Card variant="outlined" sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', padding:'5rem',width:'340px',height:'340px',borderRadius:'50%'}}>
       <Typography variant="h4" sx={{color:'brown',fontSize:'22px'}} my={3}>
     Loading...
      </Typography>
      <CircularProgress sx={{color:'brown'}} size={60} />
      </Card>
    </Box>
  );
};

export default Loading;

