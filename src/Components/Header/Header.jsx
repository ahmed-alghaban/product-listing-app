import React from 'react';
import {
    Box,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    InputAdornment,
    useMediaQuery,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = ({ categories, selectedCategory, setSelectedCategory, searchQuery, setSearchQuery }) => {
    // Responsive design - using Material-UI's useMediaQuery hook
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Box
            display="flex"
            flexDirection={isMobile ? "column" : "row"}  // Stack vertically on mobile
            alignItems="center"
            justifyContent="space-between"
            p={2}
            boxShadow={2}
            borderRadius={4}
            bgcolor="white"
            mb={4}
        >
            {/* Category Filter */}
            <FormControl
                sx={{
                    minWidth: isMobile ? "100%" : 180,  // 100% width for mobile
                    mb: isMobile ? 2 : 0,               // Add margin-bottom on mobile
                }}
                size="small"
            >
                <InputLabel>Filter by Category</InputLabel>
                <Select
                    value={selectedCategory}
                    label="Filter by Category"
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <MenuItem value="">All</MenuItem>
                    {categories.map((category, index) => (
                        <MenuItem key={index} value={category}>
                            {category}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Search Bar */}
            <TextField
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                size="small"
                sx={{
                    width: isMobile ? "100%" : 300,  // 100% width for mobile
                    ml: isMobile ? 0 : 2,             // Remove left margin on mobile
                    backgroundColor: 'white',
                    borderRadius: 2,
                    boxShadow: 2,
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon color="action" />
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
};

export default Header;
