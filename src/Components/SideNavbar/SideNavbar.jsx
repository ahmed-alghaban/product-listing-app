import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const SideNavbar = ({ minPrice, setMinPrice, maxPrice, setMaxPrice, clearPriceFilter }) => {
    return (
        <Box
            sx={{
                width: 220,
                flexShrink: 0,
                mr: 4,
                p: 2,
                backgroundColor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'flex-start',
                minHeight: '200px',
                justifyContent: 'flex-start',
            }}
        >
            <Typography variant="h6" fontWeight="bold" mb={2}>
                Filter by Price
            </Typography>

            <TextField
                label="Min Price"
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                fullWidth
                size="small"
                sx={{ mb: 2 }}
            />

            <TextField
                label="Max Price"
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                fullWidth
                size="small"
                sx={{ mb: 2 }}
            />

            <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={clearPriceFilter}
            >
                Clear
            </Button>
        </Box>
    );
};

export default SideNavbar;
