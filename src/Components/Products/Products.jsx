import React, { useEffect, useMemo, useState } from 'react'
import axios from "axios"
import { Box, Grid } from '@mui/material'
import Product from './Product'
import Header from '../Header/Header'
import SideNavbar from '../SideNavbar/SideNavbar'

const Products = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [searchQuery, setSearchQuery] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const clearPriceFilter = () => {
        setMinPrice('');
        setMaxPrice('');
    };

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => {
                const productsData = res.data.products;
                setProducts(productsData);

                const allCategories = productsData.map(product => product.category);
                const uniqueCategories = [...new Set(allCategories)];
                setCategories(uniqueCategories);
            })
            .catch(error => console.error(error));
    }, []);

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
            const matchesSearch = searchQuery
                ? product.title.toLowerCase().includes(searchQuery.toLowerCase())
                : true;
            const matchesMinPrice = minPrice ? product.price >= parseFloat(minPrice) : true;
            const matchesMaxPrice = maxPrice ? product.price <= parseFloat(maxPrice) : true;

            return matchesCategory && matchesSearch && matchesMinPrice && matchesMaxPrice;
        });
    }, [products, selectedCategory, searchQuery, minPrice, maxPrice]);



    return (
        <>
            <Box>
                {/* Header */}
                <Header
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

                {/* Main Container for Sidebar and Products */}
                <Box
                    sx={{
                        display: "flex",
                        mt: 4,
                        px: 3,
                    }}
                >
                    {/* Sidebar - fixed at the top */}
                    <Box
                        sx={{
                            width: 260, // Width of the sidebar
                            backgroundColor: "white", // Background color of sidebar
                            borderRadius: 3, // Smooth corners
                            boxShadow: 2, // Shadow to make the sidebar pop
                            p: 2, // Padding inside sidebar for spacing
                            height: "fit-content", // Adjust the height to content
                            mt: 2,
                            flexShrink: 0, // Sidebar doesn't shrink
                        }}
                    >
                        <SideNavbar
                            minPrice={minPrice}
                            setMinPrice={setMinPrice}
                            maxPrice={maxPrice}
                            setMaxPrice={setMaxPrice}
                            clearPriceFilter={clearPriceFilter}
                        />
                    </Box>

                    {/* Products Section */}
                    <Box sx={{ flexGrow: 1, ml: 10 }}>
                        <Grid container spacing={3}>
                            {filteredProducts.map((product) => (
                                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                    <Product product={product} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default Products