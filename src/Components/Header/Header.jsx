import React from 'react';
import {
    Box,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Paper,
    TextField,
    InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const Header = ({ categories, selectedCategory, setSelectedCategory, searchQuery, setSearchQuery,handleCategoryChange,handleSearchBarChange }) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={2}
            boxShadow={2}
            borderRadius={4}
            bgcolor="white"
            mb={4}
        >
            {/* Category Filter */}
            <FormControl sx={{ minWidth: 180 }} size="small">
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

            <TextField
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                size="small"
                sx={{
                    width: 300,
                    ml: 2,
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
