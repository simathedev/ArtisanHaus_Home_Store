import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import { useRouter } from 'next/navigation';

const cardStyle = {
  maxWidth: 445,
  margin: '20px',
};

const mediaStyle = {
  height: 500,
};

const Index = ({ product }) => {
  const router = useRouter();

  const handleCatalogueButtonClick = () => {
    console.log("id that is being pushed: ",product.id)
    router.push(`/catalogue/${product.id}`);
  };

  return (
    <Card style={cardStyle}>
      <CardMedia
        style={mediaStyle}
        image={product.imageURL}
        title={product.title}
      />
      <CardContent sx={{minHeight:'170px;'}}>
        <Typography gutterBottom variant="h4" component="h2">
          {product.title}
        </Typography>
        <Typography variant="h6" color="textPrimary">
          R {product.price}
        </Typography>
        <Button
            variant="contained"
            style={{
              backgroundColor: 'brown',
              '&:hover': {
                backgroundColor: '#e3d5ca',
              },
              color: 'white', padding: '6px',width:'30%'}}
            onClick={handleCatalogueButtonClick}
          >
            View
          </Button>
      </CardContent>
    </Card>
  );
};

export default Index;
