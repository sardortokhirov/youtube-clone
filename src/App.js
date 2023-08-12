import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Box} from '@mui/material'
import {ChanelDetail, Feed, Navbar, SearchFeed, VideoDetail} from "./components";
import Page404 from "./utils/404";


function App() {

    return (
        <BrowserRouter>
            <Box sx={{backgroundColor: '#000'}}>
                <Navbar/>
                <Routes>
                    <Route path="/" exact element={<Feed/>}/>
                    <Route path="/video/:id" element={<VideoDetail/>}/>
                    <Route path="/channel/:id" element={<ChanelDetail/>}/>
                    <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </Box>
        </BrowserRouter>)
}

export default App