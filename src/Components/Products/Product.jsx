import React, { useState } from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    Chip,
    Box,
    Rating
} from '@mui/material';

const Product = ({ product }) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };
    return (
        <Card
            sx={{
                width: 345,
                height: 550,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                m: 2,
                borderRadius: 4,
                boxShadow: 4,
                transition: 'transform 0.3s',
                border: clicked ? '2px solid red' : '2px solid transparent',
                '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: 8
                }
            }}
            onClick={handleClick}
        >
            <CardMedia
                component="img"
                height="200"
                image={product.thumbnail}
                alt={product.title}
                sx={{ objectFit: 'contain', p: 2 }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div" fontWeight="bold" noWrap>
                    {product.title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {product.description}
                </Typography>
                <Box my={1}>
                    {product.tags.map((tag, index) => (
                        <Chip
                            key={index}
                            label={tag}
                            size="small"
                            sx={{ mr: 0.5, mb: 0.5 }}
                            color="primary"
                            variant="outlined"
                        />
                    ))}
                </Box>
                <Typography variant="h6" color="primary">
                    ${product.price}
                    <Typography
                        component="span"
                        variant="body2"
                        color="text.secondary"
                        sx={{ ml: 1, textDecoration: 'line-through' }}
                    >
                        ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                    </Typography>
                </Typography>
                <Box display="flex" alignItems="center" mt={1}>
                    <Rating value={product.rating} precision={0.1} readOnly size="small" />
                    <Typography variant="body2" color="text.secondary" ml={0.5}>
                        {product.rating}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" variant="contained" fullWidth>
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
}

export default Product;
